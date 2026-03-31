import { prisma } from '@/lib/db';
import NavigationBar from '@/components/NavigationBar';
import RecipeGrid from '@/components/RecipeGrid';

export default async function Recipes() {
  const recipes = await prisma.recipe.findMany({ take: 20 });

  return (
    <>
      <NavigationBar />
      <main style={{ padding: '2rem' }}>
        <RecipeGrid recipes={recipes} />
      </main>
    </>
  );
}
