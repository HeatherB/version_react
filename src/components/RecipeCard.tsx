import Image from 'next/image';
import {Link} from '@/i18n/navigation';
import type { Recipe } from '@prisma/client';
import { getRecipeImageUrl } from '@/lib/recipe_images';

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
  // Parse ingredients to count them
  // cleanedIngredients is a Python-style list string with single quotes, not JSON
  let ingredientCount = 0;
  try {
    // Convert Python-style single quotes to double quotes for JSON parsing
    const jsonString = recipe.cleanedIngredients
      ?.replace(/'/g, '"')  // Replace single quotes with double quotes
      .replace(/\\"/g, "'"); // Restore escaped quotes that were apostrophes
    const ingredients = JSON.parse(jsonString || '[]');
    console.log('ingredients ', ingredients);
    ingredientCount = Array.isArray(ingredients) ? ingredients.length : 0;
    console.log('ingredientCount  ', ingredientCount );
  } catch {
    ingredientCount = 0;
  }

  return (
    <div className="recipe-card">
      <Image
        src={getRecipeImageUrl(recipe.imageName)}
        alt={recipe.title}
        width={400}
        height={300}
        unoptimized
      />
      <div className="recipe-card-content">
        <h3>{recipe.title}</h3>
        <Link href={`/recipe/${recipe.id}`}>View Recipe</Link>
      </div>
    </div>
  );
}