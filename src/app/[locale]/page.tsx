import {getTranslations} from 'next-intl/server';
import RecipeGrid from '@/components/RecipeGrid';
import { prisma } from '@/lib/db';

export default async function Home() {
	const t = await getTranslations('Homepage');
	// Fetch recipes - images are now local, no API calls needed
	const recipes = await prisma.recipe.findMany({ take: 20 });

	return (
		<>
		<h1>
			{t('title')}
		</h1>
		<RecipeGrid recipes={recipes} />
		</>
	);
}