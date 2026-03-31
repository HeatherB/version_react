import { getTranslations } from 'next-intl/server';
import { prisma } from '@/lib/db';
import NavigationBar from '@/components/NavigationBar';
import RecipeGrid from '@/components/RecipeGrid';
import SearchBar from '@/components/SearchBar';

type Props = {
  searchParams: Promise<{ q?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { q } = await searchParams;
  const t = await getTranslations('Search');

  const recipes = q
    ? await prisma.recipe.findMany({
        where: {
          OR: [
            { title: { contains: q, mode: 'insensitive' } },
            { ingredients: { contains: q, mode: 'insensitive' } },
            { cleanedIngredients: { contains: q, mode: 'insensitive' } },
          ],
        },
        take: 50,
      })
    : [];

  return (
    <>
      <NavigationBar />
      <main style={{ padding: '2rem' }}>
        <h1>{t('title')}</h1>
        <SearchBar />

        {q && (
          <p style={{ margin: '1rem 0' }}>
            {`${recipes.length} result${recipes.length !== 1 ? 's' : ''} for "${q}"`}
          </p>
        )}

        {recipes.length > 0 ? (
          <RecipeGrid recipes={recipes} />
        ) : q ? (
          <p>{t('noResults')}</p>
        ) : (
          <p>{t('trySearch')}</p>
        )}
      </main>
    </>
  );
}
