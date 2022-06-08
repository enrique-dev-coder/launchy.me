import type { NextPage } from 'next';
import HeroHomePage from '../components/HeroHomePage';
import StarBackground from '../components/Wrappers/StarBackground';
import ParteDosHome from '../components/Parte2Home/index';
const Home: NextPage = () => {
  return (
    <div>
      <HeroHomePage />
      <StarBackground>
        <ParteDosHome />
      </StarBackground>
    </div>
  );
};

export default Home;
