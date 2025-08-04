-- CreateTable
CREATE TABLE "FavoriteRecipe" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "recipeName" TEXT NOT NULL,
    "ingredientsYouHave" TEXT NOT NULL,
    "missingIngredients" TEXT NOT NULL,
    "fullIngredientsList" TEXT NOT NULL,
    "instructions" TEXT NOT NULL,
    "preparationTime" TEXT NOT NULL,
    "cookingTime" TEXT NOT NULL,
    "userId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "FavoriteRecipe_recipeName_userId_key" ON "FavoriteRecipe"("recipeName", "userId");
