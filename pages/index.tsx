import type { NextPage } from 'next';
import HeroHomePage from '../components/HeroHomePage';
import StarBackground from '../components/Wrappers/StarBackground';
import StarBackgroundCss from '../components/Wrappers/StarBackgroundCss';
import ParteDosHome from '../components/Parte2Home/index';
import ParteTresHome from '../components/Parte3Home/index';
import ParteCuatroHome from '../components/Parte4Home/index';
import LogoSlider from '../components/LogoSlider';
import ParteCincoHome from '../components/Parte5Home/index';
import ParteSeisHome from '../components/Parte6Home/index';
import ParteSieteHome from '../components/Parte7Home/index';
import BannerEventos from '../components/BannerEventos';
import BannerPerrito from '../components/BannerPerrito';
import SubscribeForm from '../components/SubscribeForm';
import Footer from '../components/Footer';
const Home: NextPage = () => {
  return (
    <div>
      <HeroHomePage />
      <StarBackgroundCss>
        <ParteDosHome />
        <ParteTresHome />
        <ParteCuatroHome />
        <LogoSlider />
        <ParteCincoHome />
        <ParteSeisHome />
        <ParteSieteHome />
        <BannerEventos />
        <BannerPerrito />
        <SubscribeForm />
        <Footer />
      </StarBackgroundCss>
    </div>
  );
};

export default Home;
