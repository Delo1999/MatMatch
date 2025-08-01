export interface ApiRecipe {
  recipename: string;
  ingredientsYouHave: string[];
  missingIngredients: string[];
  fullIngredientsList: string[];
  instructions: string[];
  estimatedTime: {
    preparationTime: string;
    cookingTime: string;
  };
}
