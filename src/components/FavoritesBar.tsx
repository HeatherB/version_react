'use client';

import { useFavorites } from '@/context/FavoritesContext';
import { useTranslations } from 'next-intl';
import type { Recipe } from '@prisma/client';
import styled from 'styled-components';

type Props = {
  item: Recipe;
};

const Wrapper = styled.div`
  width: 100%;
  height: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
`;

const FavBTN = styled.button`
  border: 1px solid var(--black);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  display: block;
  text-align: right;

  &.activated {
    background-color: var(--red);
  }
`;

export default function FavoritesBar({ item }: Props) {
  const t = useTranslations('Favorites');

  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((f) => f.id === item.id);

  return (
    <Wrapper id="favoritesBar">
      <FavBTN
        onClick={() => toggleFavorite(item)}
        title={isFavorite ? t('remove') : t('add')}
      >
        {isFavorite ? '❤️' : '🤍'}
      </FavBTN>
    </Wrapper>
  );
}
