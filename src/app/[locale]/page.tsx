import {getTranslations} from 'next-intl/server';
import TitlebarBelowImageList from '@/components/TitlebarBelowImageList';
import RecipeGrid from '@/components/RecipeGrid';
import { prisma } from '@/lib/db';

export default async function Home() {
	const t = await getTranslations('Homepage');
	const recipes = await prisma.recipe.findMany();

	return (
		<>
		<h1>
			{t('title')}
		</h1>
		<RecipeGrid recipes={recipes} />
		<TitlebarBelowImageList recipes={recipes} />
		</>
	);
}