import {useTranslations, useLocale} from 'next-intl';
import TitlebarBelowImageList from '@/components/TitlebarBelowImageList';
import RecipeGrid from '@/components/RecipeGrid';

export default function Home({}) {
	const t = useTranslations('Homepage');

	return (
		<>
		<h1>
			{t('title')}
		</h1>
		<RecipeGrid recipes={prismaData} />
		</>
	);
}