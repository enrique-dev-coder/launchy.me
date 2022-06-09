import type { NextPage } from 'next';
import HeroHomePage from '../components/HeroHomePage';
import StarBackground from '../components/Wrappers/StarBackground';
import ParteDosHome from '../components/Parte2Home/index';
import ParteTresHome from '../components/Parte3Home/index';
import ParteCuatroHome from '../components/Parte4Home/index';
import LogoSlider from '../components/LogoSlider';
const Home: NextPage = () => {
  return (
    <div>
      <HeroHomePage />
      <StarBackground height="300vh">
        <ParteDosHome />
        <ParteTresHome />
        <ParteCuatroHome />
        <LogoSlider />
      </StarBackground>
    </div>
  );
};

export default Home;
