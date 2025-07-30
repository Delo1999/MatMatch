import { z } from "zod";

// Define the structured schema for recipes using Zod
export const RecipeSchema = z.object({
  recipes: z
    .array(
      z.object({
        name: z.string().describe("The name of the recipe"),
        ingredients_you_have: z
          .array(z.string())
          .describe(
            "List of ingredients from user's input that are used in this recipe"
          ),
        missing_ingredients: z
          .array(z.string())
          .describe(
            "Essential ingredients not provided by user that are required"
          ),
        full_ingredients_list: z
          .array(
            z.object({
              ingredient: z.string(),
              quantity: z.string().optional(),
              notes: z.string().optional(),
            })
          )
          .describe("Complete list of all ingredients needed with quantities"),
        instructions: z
          .array(z.string())
          .describe("Step-by-step cooking instructions"),
        prep_time: z.string().describe("Preparation time"),
        cook_time: z.string().describe("Cooking time"),
        servings: z.number().describe("Number of servings this recipe makes"),
      })
    )
    .describe("Array of 3 distinct and suitable recipes"),
  summary: z.string().describe("Brief summary of the recipe suggestions"),
});

// TypeScript types derived from the schema
export type Recipe = z.infer<typeof RecipeSchema>["recipes"][0];
export type RecipeResponse = z.infer<typeof RecipeSchema>;

//  responseMimeType: "application/json",
//     responseSchema: {
//       type: Type.ARRAY,
//       items: {
//         type: Type.OBJECT,
//         properties: {
//           recipeName: {
//             type: Type.STRING,
//           },
//           ingredientsYouHave: {
//             type: Type.ARRAY,
//             items: {
//               type: Type.STRING,
//             },
//           },
//           missingIngredients: {
//             type: Type.ARRAY,
//             items: {
//               type: Type.STRING,
//             },
//           },
//           fullIngredientsList: {
//             type: Type.ARRAY,
//             items: {
//               type: Type.STRING,
//             },
//           },
//           instructions: {
//             type: Type.ARRAY,
//             items: {
//               type: Type.STRING,
//             },
//           },
//           estimatedTime: {
//             type: Type.OBJECT,
//             properties: {
//               preparationTime: {
//                 type: Type.STRING,
//               },
//               cookingTime: {
//                 type: Type.STRING,
//               },
//             },
//             propertyOrdering: ["preparationTime", "cookingTime"],
//           },
//         },
//         propertyOrdering: [
//           "recipeName",
//           "ingredientsYouHave",
//           "missingIngredients",
//           "fullIngredientsList",
//           "instructions",
//           "estimatedTime",
//         ],
//       },
//     },
