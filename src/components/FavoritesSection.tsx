'use client';

import { useFavorites } from '@/context/FavoritesContext';
import { useTranslations } from 'next-intl';
import RecipeCard from './RecipeCard';
import styled from 'styled-components';

const Title = styled.h2`
  font-family: var(--decorative-font);
  margin-bottom: 1rem;
`;

export default function FavoritesSection() {
  const { favorites } = useFavorites();
  const t = useTranslations('Favorites');

  if (favorites.length === 0) {
    return (
      <main style={{ padding: '2rem' }}>
        <Title>{t('title')}</Title>
        <p>You do not have any recipes saved to Favorites.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: '2rem' }}>
      <Title>{t('title')}</Title>
      {favorites.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </main>
  );
}
