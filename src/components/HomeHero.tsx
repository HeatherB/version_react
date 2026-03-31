import SearchBar from '@/components/SearchBar';
import { useTranslations } from 'next-intl';
import heroImg from '../../public/heros/becca-tapert-mDOGXiuVb4M-unsplash.jpg';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 50vw;
  max-height: 500px;
  background: var(--black);
  background-image:
    linear-gradient(to top, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%),
    url(${heroImg.src});
  background-size: cover;
  background-position: 0 85%;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  color: var(--white);
  font-family: var(--decorative-font);
  text-align: center;
  margin: 0 auto;
  padding: 0;
  font-size: 60px;
`;

const SubHeading = styled.h2`
  color: var(--white);
  font-family: var(--main-serif-font);
  font-weight: 400;
  text-align: center;
  margin: 0 auto;
  padding: 0;
  font-size: 24px;
`;

export default function HomeHero() {
  const t = useTranslations('HomeHero');

  return (
    <Wrapper>
      <Heading>{t('title')}</Heading>
      <SubHeading>{t('subTitle')}</SubHeading>
      <SearchBar />
    </Wrapper>
  );
}
