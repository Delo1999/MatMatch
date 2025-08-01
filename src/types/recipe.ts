export interface ApiRecipe {
  recipeName: string;
  ingredientsYouHave: string[];
  missingIngredients: string[];
  fullIngredientsList: string[];
  instructions: string[];
  // image: string;
  estimatedTime: {
    preparationTime: string;
    cookingTime: string;
  };
}
