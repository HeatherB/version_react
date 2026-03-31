import FavoritesSection from '@/components/FavoritesSection';
import NavigationBar from '@/components/NavigationBar';
import HomeHero from '@/components/HomeHero';

export default async function Home() {
  return (
    <>
      <NavigationBar />
      <HomeHero />
      <FavoritesSection />
    </>
  );
}
