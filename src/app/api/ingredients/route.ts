import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";
import { config } from "@/config/env";
import { getCurrentUser } from "@/lib/auth";

// Set to true to use mock data for testing
const USE_MOCK_DATA = true;

export async function POST(req: NextRequest) {
  const { ingredients } = await req.json();

  // Return mock data for testing
  if (USE_MOCK_DATA) {
    const mockRecipes = [
      {
        recipeName: "Quick Pasta Carbonara",
        ingredientsYouHave: ingredients.slice(0, Math.min(3, ingredients.length)),
        missingIngredients: ["Eggs", "Parmesan cheese", "Black pepper"],
        fullIngredientsList: [
          "200g pasta",
          "100g bacon or pancetta",
          "2 eggs",
          "50g parmesan cheese",
          "Black pepper to taste",
          "Salt to taste",
        ],
        instructions: [
          "Cook pasta according to package instructions until al dente",
          "While pasta cooks, fry bacon in a pan until crispy",
          "Beat eggs with grated parmesan in a bowl",
          "Drain pasta, reserving 1 cup of pasta water",
          "Mix hot pasta with bacon, remove from heat",
          "Add egg mixture, tossing quickly to create creamy sauce",
          "Add pasta water if needed to achieve desired consistency",
          "Season with black pepper and serve immediately",
        ],
        estimatedTime: {
          preparationTime: "5 minutes",
          cookingTime: "15 minutes",
        },
      },
      {
        recipeName: "Simple Veggie Stir-Fry",
        ingredientsYouHave: ingredients.slice(0, Math.min(2, ingredients.length)),
        missingIngredients: ["Soy sauce", "Garlic", "Ginger"],
        fullIngredientsList: [
          "2 cups mixed vegetables",
          "2 tablespoons vegetable oil",
          "2 cloves garlic, minced",
          "1 teaspoon grated ginger",
          "2 tablespoons soy sauce",
          "1 teaspoon sesame oil",
          "Cooked rice for serving",
        ],
        instructions: [
          "Heat oil in a large wok or pan over high heat",
          "Add garlic and ginger, stir-fry for 30 seconds",
          "Add vegetables and stir-fry for 5-7 minutes until tender-crisp",
          "Add soy sauce and sesame oil, toss to combine",
          "Serve hot over steamed rice",
        ],
        estimatedTime: {
          preparationTime: "10 minutes",
          cookingTime: "10 minutes",
        },
      },
      {
        recipeName: "Classic Grilled Cheese Sandwich",
        ingredientsYouHave: ingredients.slice(0, Math.min(2, ingredients.length)),
        missingIngredients: ["Bread", "Cheese", "Butter"],
        fullIngredientsList: [
          "2 slices bread",
          "2 slices cheddar cheese",
          "2 tablespoons butter",
        ],
        instructions: [
          "Butter one side of each bread slice",
          "Place cheese between bread slices, buttered sides facing out",
          "Heat a pan over medium heat",
          "Cook sandwich for 3-4 minutes per side until golden and cheese melts",
          "Cut in half and serve hot",
        ],
        estimatedTime: {
          preparationTime: "2 minutes",
          cookingTime: "8 minutes",
        },
      },
    ];

    console.log("Returning mock recipes for ingredients:", ingredients);
    return NextResponse.json(mockRecipes);
  }

  const user = await getCurrentUser(req);
  let userAllergies: string[] = [];
  let userDietaryPrefs: string[] = [];

  if (user) {
    try {
      const { prisma } = await import("@/lib/prisma");
      const userData = await prisma.user.findUnique({
        where: { id: user.id },
        select: { allergies: true, dietaryPrefs: true },
      });

      if (userData) {
        userAllergies = userData.allergies
          ? JSON.parse(userData.allergies)
          : [];
        userDietaryPrefs = userData.dietaryPrefs
          ? JSON.parse(userData.dietaryPrefs)
          : [];
      }
    } catch (error) {
      console.error("Error fetching user preferences:", error);
    }
  }

  const apiKey = config.GEMINI_API_KEY;

  if (!apiKey) {
    console.error("GEMINI_API_KEY is not configured");
    return NextResponse.json(
      { error: "API key not configured" },
      { status: 500 }
    );
  }

  const ai = new GoogleGenAI({
    apiKey: apiKey,
  });

  try {
    let promptContent = `You are a helpful and resourceful chef. Your primary goal is to suggest delicious and 
       practical recipes based on the ingredients a user has available, **prioritizing the use of the provided 
       ingredients and minimizing the need for additional items**. Create 3 quick recipes using: ${ingredients.join(
         ", "
       )}.`;

    if (userAllergies.length > 0) {
      promptContent += ` **IMPORTANT: The user is allergic to: ${userAllergies.join(
        ", "
      )}. NEVER include these ingredients or any dishes that commonly contain them. Avoid cross-contamination risks.**`;
    }

    if (userDietaryPrefs.length > 0) {
      promptContent += ` **DIETARY PREFERENCES: The user prefers: ${userDietaryPrefs.join(
        ", "
      )}. Please prioritize recipes that align with these preferences.**`;
    }

    promptContent += ` Be specific about the required quantities for each ingredient in every recipe. Keep instructions brief. Return empty array if ingredients are unsuitable. Provide all recipe suggestions in the same language as the input ingredients.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: promptContent,

      config: {
        maxOutputTokens: 50000,
        temperature: 0.3,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              recipeName: {
                type: Type.STRING,
              },
              ingredientsYouHave: {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING,
                },
              },
              missingIngredients: {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING,
                },
              },
              fullIngredientsList: {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING,
                },
              },
              instructions: {
                type: Type.ARRAY,
                items: {
                  type: Type.STRING,
                },
              },
              estimatedTime: {
                type: Type.OBJECT,
                properties: {
                  preparationTime: {
                    type: Type.STRING,
                  },
                  cookingTime: {
                    type: Type.STRING,
                  },
                },
                propertyOrdering: ["preparationTime", "cookingTime"],
              },
            },
            propertyOrdering: [
              "recipeName",
              "ingredientsYouHave",
              "missingIngredients",
              "fullIngredientsList",
              "instructions",
              "estimatedTime",
            ],
          },
        },
      },
    });

    console.log(response.text);
    const parsedResponse = JSON.parse(response.text as string);

    if (
      !parsedResponse ||
      !Array.isArray(parsedResponse) ||
      parsedResponse.length === 0
    ) {
      return NextResponse.json(
        {
          error:
            "Tyvärr kunde jag inte hitta några recept för dessa ingredienser. Försök med fler eller mer specifika ingredienser.",
        },
        { status: 400 }
      );
    }
    /*
	await Promise.all(
      parsedResponse.map(async (recipe, index) => {
        const image = await imageGeneration(recipe.recipeName, ai);
        parsedResponse[index].image = image;
      })
    );
	*/

    return NextResponse.json(parsedResponse);
  } catch (error) {
    console.error("Error generating recipe:", error);
    return NextResponse.json(
      { error: "Sorry, there was an error generating your recipe." },
      { status: 500 }
    );
  }
}

// async function imageGeneration(recipeName: string, ai: GoogleGenAI) {
//   const response = await ai.models.generateImages({
//     model: "gemini-2.0-flash-lite",
//     prompt: recipeName,
//     config: {
//       numberOfImages: 1,
//       includeRaiReason: true,
//     },
//   });
//   return response?.generatedImages?.[0]?.image?.imageBytes;
// }
