import type { NextPage } from 'next';
import HeroHomePage from '../components/HeroHomePage';
import StarBackground from '../components/Wrappers/StarBackground';
import ParteDosHome from '../components/Parte2Home/index';
import ParteTresHome from '../components/Parte3Home/index';
import ParteCuatroHome from '../components/Parte4Home/index';
import LogoSlider from '../components/LogoSlider';
import ParteCincoHome from '../components/Parte5Home/index';
import ParteSeisHome from '../components/Parte6Home/index';
import ParteSieteHome from '../components/Parte7Home/index';

const Home: NextPage = () => {
  return (
    <div>
      <HeroHomePage />
      <StarBackground height="400vh">
        <ParteDosHome />
        <ParteTresHome />
        <ParteCuatroHome />
        <LogoSlider />
        <ParteCincoHome />
        <ParteSeisHome />
        <ParteSieteHome />
      </StarBackground>
    </div>
  );
};

export default Home;
