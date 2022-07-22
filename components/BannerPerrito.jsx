import React from 'react';
import HomeSectionContainer from './Wrappers/HomeSectionContainer';
import TranslatedParagraph from './TranslatedParagraph';
const BannerPerrito = () => {
  return (
    <HomeSectionContainer>
      <div className="w-full h-[229px] flex flex-col justify-center border border-white">
        <div className="w-full h-[60%] ">
          <div className="w-full flex justify-center mb-[10px]">
            <img src="/img/huella.png" alt="conocelos" />
            <TranslatedParagraph
              textEnglish={'We want to give a paw !'}
              textSpanish={'¡QUEREMOS DAR UNA PATA!'}
              classes={
                'text-white uppercase md:text-3xl roboto_condesed font-bold mx-4'
              }
            />
            <img
              src="/img/huella.png"
              alt="conocelos"
              className="  rotate-180"
            />
          </div>
          <TranslatedParagraph
            textEnglish={
              '5% of our profit is destinated to help on the rescue of animals and their adoption.'
            }
            textSpanish={
              'El 5% de nuestro profit se destina a ayudar al rescate de animales y su adopción.'
            }
            classes={
              'text-white text-center w-4/5 md:w-[40%] mx-auto mb-[20px]'
            }
          />

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
