import React from 'react';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';
import HomeButton from '../HomeButton';
const index = () => {
  return (
    <HomeSectionContainer>
      <div className="w-full h-[362px] flex flex-col bg-white team-background">
        <div className="w-[90%] h-[70%] mx-auto flex flex-col items-center  justify-end">
          <div className="h-[80%] flex flex-col items-center justify-around">
            <h2
              className=" text-4xl uppercase   font-bold"
              style={{ color: '#211539' }}
            >
              Conoce al team
            </h2>
            <p className="font-semibold text-center text-[15px] ">
              Somos buenas personas ¿eso importa? Si! Para nosotros es lo
              elemental, nos hace empaticos, practivos y buenos compañeros. Vas
              a amar trabajar con nosotros. Siempre buscamos soluciones con la
              mejor actitud.
            </p>
            <HomeButton title={'conócenos :)'} />
          </div>
        </div>
        <div
          className="w-full h-[20%]"
          style={{ borderTop: '2px solid #211539' }}
        ></div>
      </div>
    </HomeSectionContainer>
  );
};

export default index;
