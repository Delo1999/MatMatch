import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI, Type } from "@google/genai";

export async function POST(req: NextRequest) {
  const { ingredients } = await req.json();

  const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `You are a helpful and resourceful chef. Your primary goal is to suggest delicious and practical recipes based on the ingredients a user has available, **prioritizing the use of the provided ingredients and minimizing the need for additional items**. Given the following ingredients: ${ingredients.join(
        ", "
      )} please suggest **3 distinct and suitable recipes**.

For each recipe you suggest:

* **Ingredients You Have:** List the ingredients from the user's input that are incorporated into this specific recipe.
* **Missing Ingredients:** Clearly list any essential ingredients *not* provided by the user that are required for the recipe. **Aim to keep this list as short as possible, suggesting recipes that require minimal additional items.** If a missing ingredient has a common substitute, you may briefly suggest it (e.g., "milk (or water/broth)").
* **Full Ingredients List:** Provide a complete list of all ingredients needed for the recipe, including quantities (if you can reasonably infer them, otherwise state "approximate").
* **Instructions:** Offer clear, concise, step-by-step cooking instructions.
* **Estimated Time:** Include both preparation and cooking times.

If the provided ingredients are too few, too vague (e.g., just "spices"), or don't lend themselves to a complete meal even with minimal additions, politely state that more details or ingredients are needed to suggest comprehensive recipes.

Please provide all recipe suggestions in the same language as the input ingredients.`,

      config: {
        maxOutputTokens: 100000,
        temperature: 0.5,
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
    return NextResponse.json(JSON.parse(response.text as string));
  } catch (error) {
    console.error("Error generating recipe:", error);
    return NextResponse.json(
      { error: "Sorry, there was an error generating your recipe." },
      { status: 500 }
    );
  }
}
