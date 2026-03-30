import RecipeCard from './RecipeCard';
import type { Recipe } from '@prisma/client';

type Props = {
  recipes: Recipe[];
};

export default function RecipeGrid({ recipes }: Props) {
  return (
    <div className="recipe-grid">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}