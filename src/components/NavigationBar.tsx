import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 1rem 4rem;
  margin: 0 auto;
  background: var(--primary-brown);
  color: var(--white);
  display: flex;
`;

const InnerWrapper = styled.div`
  display: flex;
`;

const Anchor = styled(Link)`
  flex: 0 0 200px;
  display: flex;
  text-decoration: none;
  color: var(--white);
  font-family: var(--main-sans-font);
  &:hover {
    text-decoration: underline;
  }
`;

export default async function NavigationBar() {
  const t = await getTranslations('Navigation');

  return (
    <Wrapper id="navigationBar">
      <Anchor href="/">Fork &amp; Framework</Anchor>

      <InnerWrapper>
        <Anchor href="/">
          <span>{t('home')}</span>
        </Anchor>

        <Anchor href="/search">
          <span>{t('search')}</span>
        </Anchor>

        <Anchor href="/recipes">
          <span>All Recipes</span>
        </Anchor>
      </InnerWrapper>
    </Wrapper>
  );
}
