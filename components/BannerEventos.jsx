import React from 'react';
import HomeSectionContainer from './Wrappers/HomeSectionContainer';
import HomeButton from './HomeButton';
const BannerEventos = () => {
  return (
    <HomeSectionContainer>
      <div className="w-full flex h-[205px]">
        <div className=" basis-1/2 flex flex-col">
          <div className="flex mb-[40px] ">
            <h2 className="text-white uppercase text-lg  letter_spacing">
              ¡ÚNETE A NUESTROS EVENTOS!
            </h2>
            <img src="/img/right.svg" alt="arrow" className="" />
          </div>
          <div className="flex flex-col  flex-1">
            <h2 className="gradient_text_banner roboto_condesed font-bold">
              LA CIENCIA DETRAS DEL CUSTOMER JOURNEY MAP
            </h2>
          </div>
          <div className="flex">
            <HomeButton title={'Reserva tu entrada'} />
          </div>
        </div>
        <div className="flex basis-1/2 bg-[url(/img/banner_eventos.png)] h-full bg-center  bg-no-repeat bg-cover">
          <div className="w-[50%]"></div>
          <div className="w-[50%]">
            <div className="h-[50%] flex flex-col w-10/12 mx-auto  justify-end">
              <p className="masterclass">Masterclass</p>
              <p
                className=" text-right  "
                style={{ color: '#211539', borderBottom: '1px solid #211539' }}
              >
                7 de Julio - 18 pm ARG
              </p>
            </div>
          </div>
        </div>
      </div>
    </HomeSectionContainer>
  );
};

export default BannerEventos;
