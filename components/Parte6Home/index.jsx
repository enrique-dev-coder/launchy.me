import React from 'react';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';
import HomeButton from '../HomeButton';
import AlienSlider from './AlienSlider';
import TranslatedParagraph from '../TranslatedParagraph';
import { useMenu } from '../../context/MenuContext';
const index = () => {
  const { english } = useMenu();
  return (
    <HomeSectionContainer>
      <div className="relative">
        <div className="bg-[url(/img/team/bg_img.png)] w-full h-[362px] absolute z-0"></div>
        <div className="team-background w-full h-[362px] absolute z-10"></div>
        <div className="w-full h-[362px] flex flex-col relative z-20 ">
          <div className="absolute right-0  translate-x-[50px] -translate-y-[50px]   ">
            <img
              src="/img/team/latino.png"
              alt="latino mami"
              className="w-[85%] md:w-full"
            />
          </div>
          <div className="w-[90%] h-[70%] mx-auto flex flex-col items-center relative justify-center   md:justify-end">
            <div className="h-[80%] flex flex-col items-center md:justify-around">
              <h2
                className=" text-[22px] md:text-4xl mb-[20px] md:mb-0 uppercase roboto_condesed font-bold "
                style={{ color: '#211539' }}
              >
                {english ? 'Meet the team' : 'Conoce al team'}
              </h2>
              <TranslatedParagraph
                textSpanish={
                  ' Somos buenas personas ¿eso importa? Si! Para nosotros es lo elemental, nos hace empaticos, practivos y buenos compañeros. Vas a amar trabajar con nosotros. Siempre buscamos soluciones con la mejor actitud.'
                }
                textEnglish={
                  'We are good people ... does it matter? Yes! For us this is basic, it made us empathic, proactive, and good partners. You will love to work with us. We are always searching for new solutions with the best attitude.'
                }
                classes={' text-center mb-[20px] text-[14px] md:text-[15px] '}
              />
              <a href="/culture">
                <HomeButton
                  link={'/culture'}
                  title={'conócenos :)'}
                  titleEng={'Meet us :)'}
                />
              </a>
            </div>
          </div>
          <div
            className="w-full  overflow-hidden relative  h-[30%]"
            style={{ borderTop: '2px solid #211539' }}
          >
            <div className="w-full flex absolute justify-between bottom-0 top-[30px] h-full">
              <AlienSlider />
            </div>
          </div>
        </div>
      </div>
    </HomeSectionContainer>
  );
};

export default index;
