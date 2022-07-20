import React from 'react';
import HomeSectionContainer from './Wrappers/HomeSectionContainer';
import HomeButton from './HomeButton';
const BannerPerrito = () => {
  return (
    <HomeSectionContainer>
      <div className="w-full h-[229px] flex flex-col justify-center border border-white">
        <div className="w-full h-[60%] ">
          <div className="w-full flex justify-center mb-[10px]">
            <img src="/img/huella.png" alt="conocelos" />
            <h2 className="text-white uppercase md:text-3xl roboto_condesed font-bold mx-4">
              ¡QUEREMOS DAR UNA PATA!
            </h2>
            <img
              src="/img/huella.png"
              alt="conocelos"
              className="  rotate-180"
            />
          </div>
          <p className="text-white text-center w-4/5 md:w-[40%] mx-auto mb-[20px]">
            El 5% de nuestro profit se destina a ayudar al rescate de animales y
            su adopción.
          </p>
          <div className="w-full flex justify-center ">
            <a
              href="https://instagram.com/danosunapatamdp?igshid=YmMyMTA2M2Y="
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-white py-2 px-3 uppercase text-sm navbar_button">
                Conócelos
              </button>
            </a>
          </div>
        </div>
      </div>
    </HomeSectionContainer>
  );
};

export default BannerPerrito;
