import Image from 'next/image';
import type { Recipe } from '@prisma/client';
import { getRecipeImageUrl } from '@/lib/recipe_images';

type Props = {
  recipe: Recipe;
};

// Parse Python-style list string to array
function parseIngredients(ingredientsStr: string): string[] {
  try {
    const jsonString = ingredientsStr?.replace(/'/g, '"').replace(/\\"/g, "'");
    const ingredients = JSON.parse(jsonString || '[]');
    return Array.isArray(ingredients) ? ingredients : [];
  } catch {
    return [];
  }
}

export default function RecipeRecipe({ recipe }: Props) {
  const ingredients = parseIngredients(recipe.cleanedIngredients);

  return (
    <div className="recipe-recipe">
      <Image
        src={getRecipeImageUrl(recipe.imageName)}
        alt={recipe.title}
        width={400}
        height={300}
        unoptimized
      />
      <div className="recipe-recipe-content">
        <h1>{recipe.title}</h1>

        <h2>Ingredients</h2>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>

        <h2>Instructions</h2>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
}
