import React from 'react';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';
import HomeButton from '../HomeButton';
import AlienSlider from './AlienSlider';

const index = () => {
  return (
    <HomeSectionContainer>
      <div className="relative">
        <div className="bg-[url(/img/team/bg_img.png)] w-full h-[362px] absolute z-0"></div>
        <div className="team-background w-full h-[362px] absolute z-10"></div>
        <div className="w-full h-[362px] flex flex-col relative z-20 ">
          <div className="w-[90%] h-[70%] mx-auto flex flex-col items-center relative   justify-end">
            <div className="h-[80%] flex flex-col items-center justify-around">
              <h2
                className=" text-4xl uppercase roboto_condesed font-bold "
                style={{ color: '#211539' }}
              >
                Conoce al team
              </h2>
              <p className=" text-center text-[15px] ">
                Somos buenas personas ¿eso importa? Si! Para nosotros es lo
                elemental, nos hace empaticos, practivos y buenos compañeros.
                Vas a amar trabajar con nosotros. Siempre buscamos soluciones
                con la mejor actitud.
              </p>
              <HomeButton title={'conócenos :)'} />
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
