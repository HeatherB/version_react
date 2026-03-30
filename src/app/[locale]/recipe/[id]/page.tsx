import { prisma } from '@/lib/db';
import RecipeRecipe from '@/components/RecipeRecipe';
import { notFound } from 'next/navigation';

type Props = {
  params: Promise<{ id: string; locale: string }>;
};

export default async function RecipePage({ params }: Props) {
  const { id } = await params;
  const recipeId = parseInt(id, 10);

  if (isNaN(recipeId)) {
    notFound();
  }

  const recipe = await prisma.recipe.findUnique({
    where: { id: recipeId },
  });

  if (!recipe) {
    notFound();
  }

  return (
    <main>
      <RecipeRecipe recipe={recipe} />
    </main>
  );
}
