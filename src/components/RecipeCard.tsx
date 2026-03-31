import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import FavoritesBar from '@/components/FavoritesBar';
import type { Recipe } from '@prisma/client';
import { getRecipeImageUrl } from '@/lib/recipe_images';
import styled from 'styled-components';

type Props = {
  recipe: Recipe;
};

const Wrapper = styled.div`
  position: relative;
`;

export default function RecipeCard({ recipe }: Props) {
  return (
    <Wrapper className="recipe-card">
      <FavoritesBar item={recipe} />
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
    </Wrapper>
  );
}
