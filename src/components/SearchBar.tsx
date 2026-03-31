'use client';

import { useState } from 'react';
import { useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  gap: 8px;
  width: 100%;
  max-width: 500px;
  padding-top: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  font-size: 12px;
  border: none;
  border-radius: 4px;
  font-family: var(--main-sans-font);

  &:focus {
    outline: 2px solid var(--primary-green, #4f7942);
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  background: var(--primary-green, #4f7942);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  font-family: var(--main-sans-font);

  &:hover {
    opacity: 0.9;
  }
`;

export default function SearchBar() {
  const t = useTranslations('Search');

  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t('placeholderBar')}
        aria-label={t('ariaBar')}
      />
      <Button type="submit">{t('button')}</Button>
    </Form>
  );
}
