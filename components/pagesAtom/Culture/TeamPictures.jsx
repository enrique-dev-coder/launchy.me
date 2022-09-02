import React, { Fragment } from 'react';
import BoxesSwiper from './BoxesSwiper';

const TeamPictures = () => {
  return (
    <Fragment>
      <div className="relative border-y-2 border-white my-[60px] md:my-[80px] py-[3%]">
        <img
          src="/img/icons/Somos-Talento-Latino-foto.png"
          alt="foto"
          className="hidden sm:block px-[2%] lg:px-0 h-[56px] mx-auto"
        />
        <img
          src="/img/icons/Somos-Talento-Latino-foto-2.png"
          alt="foto"
          className="block sm:hidden h-[60px] mx-auto"
        />
        <div className="absolute right-0 lg:right-auto lg:left-0 -top-[45%] xl:left-[9%] block sm:hidden lg:block w-[82px] h-[82px] lg:w-[110px] lg:h-[110px]">
          <img
            src="/img/icons/Latino-mami.svg"
            alt="latino mami"
            className="w-full h-full"
          />
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-3 px-[2%] max-w-[400px] mx-auto md:max-w-full">

        {/* Primeras dos hileras en mobile. 1 de 3 en Desktop */}
        <div className="grid col-span-1 grid-cols-2">
          
          {/* Primera hilera - Ivana trabajando /Jasu y Flor */}
          <div className="h-[195px] col-span-1 mx-auto p-[8px] w-full">
            <img
              src="/img/team-fotos/Ivana-trabajando.png"
              alt="foto"
              className=" h-full w-full relative z-20 "
            />
          </div>
          
          <div className="h-[195px] col-span-1 mx-auto p-[8px] w-full">
            <img
              src="/img/team-fotos/Flor-y-jasu.png"
              alt="foto"
              className="h-full w-full relative z-20"
            />
          </div> 
          
          {/* Segunda hilera - Flor con su perro /Foto de Ivana */}

          <div className="h-[190px] col-span-1 mx-auto p-[8px] w-full">
            <img
              src="/img/team-fotos/Flor.png"
              alt="foto"
              className="h-full w-full relative z-20"
            />
          </div>
          
          <div className="h-[190px] col-span-1 mx-auto p-[8px] w-full">
            <img
              src="/img/team-fotos/Ivana.png"
              alt="foto"
              className="h-full w-full relative z-20"
            />
          </div>

        </div>

        {/* Terce hilera en mobile. 2 de 3 en Desktop */}
        <div className="grid col-span-1 grid-cols-2 grid-rows-2">
        
          <div className="h-[392px] col-span-1 row-span-2 mx-auto p-[8px] w-full">
            <img
              src="/img/team-fotos/Luis-jugando.png"
              alt="foto"
              className="h-full w-full relative z-20"
            />
          </div>
          
          <div className="h-[196px] col-span-1 row-span-1 mx-auto p-[8px] w-full">
            <img
              src="/img/team-fotos/Jasu.png"
              alt="foto"
              className="h-full w-full relative z-20"
            />
          </div>
          
          <div className="h-[196px] col-span-1 row-span-1 mx-auto p-[8px] w-full">
            <img
              src="/img/team-fotos/Tite.png"
              alt="foto"
              className="h-full w-full relative z-20"
            />
          </div>

          
        </div>

        {/* Ultimas dos hileras en mobile. 3 de 3 en Desktop */}
        <div className="grid col-span-1 grid-cols-2">
        
          {/* Primera hilera - Dai / Luis */}
          <div className="h-[195px] col-span-1 mx-auto p-[8px] w-full">
            <img
              src="/img/team-fotos/Leyendo.png"
              alt="foto"
              className="h-full w-full relative z-20"
            />
          </div>
          
          <div className="h-[195px] col-span-1 mx-auto p-[8px] w-full">
            <img
              src="/img/team-fotos/Luis-cumple.png"
              alt="foto"
              className="h-full w-full relative z-20"
            />
          </div>
          
          {/* Segunda hilera - Eli / Daily */}
          
          <div className="h-[195px] col-span-1 mx-auto p-[8px] w-full">
            <img
              src="/img/team-fotos/Eli.png"
              alt="foto"
              className="h-full w-full relative z-20"
            />
          </div>
          
          <div className="h-[195px] col-span-1 mx-auto p-[8px] w-full">
            <img
              src="/img/team-fotos/Daily.png"
              alt="foto"
              className="h-full w-full relative z-20"
            />
          </div>

        </div>
      </div>

      <BoxesSwiper />
    </Fragment>
  );
};

export default TeamPictures;
