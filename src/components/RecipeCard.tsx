import Image from 'next/image';
import { getRecipeImage } from '@/lib/images';
import type { Recipe } from '@prisma/client';

type Props = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: Props) {
  return (
    <div className="recipe-card">
      <Image
        src={getRecipeImage(recipe.name, 400, 300)}
        alt={recipe.name}
        width={400}
        height={300}
        unoptimized
      />
      <div className="recipe-card-content">
        <h3>{recipe.name}</h3>
        <p>{recipe.minutes} mins • {recipe.nIngredients} ingredients</p>
      </div>
    </div>
  );
}