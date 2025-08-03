import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";
import { config } from "@/config/env";

export async function POST(req: NextRequest) {
  const { ingredients } = await req.json();

  // Use config file for API key
  const apiKey = config.GEMINI_API_KEY;

  console.log("Using config API key:", apiKey ? "✓ Key available" : "✗ No key");

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
    // const models = await ai.models.list();
    // console.log(models);
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are a helpful and resourceful chef. Your primary goal is to suggest delicious and 
       practical recipes based on the ingredients a user has available, **prioritizing the use of the provided 
       ingredients and minimizing the need for additional items**. Create 3 quick recipes using: ${ingredients.join(
         ", "
       )}. Keep instructions brief. Return empty array if ingredients are unsuitable. Provide all recipe suggestions in the same language as the input ingredients.`,

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

    // Kontrollera om AI:n returnerade en tom array eller ogiltig data
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
