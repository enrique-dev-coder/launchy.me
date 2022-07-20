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

      {/* gap-4 */}
      <div className="grid grid-cols-1 md:grid-cols-3 px-[2%] max-w-[400px] mx-auto md:max-w-full">
        {/* gap-4 */}
        <div className="grid col-span-1 grid-cols-2">
          <img
            src="/img/team-fotos/Ivana-trabajando.png"
            alt="foto"
            className="col-span-1 h-full p-[8px] relative z-20 mx-auto"
          />

          <img
            src="/img/team-fotos/Flor-y-jasu.png"
            alt="foto"
            className="col-span-1 h-full p-[8px] relative z-20 mx-auto"
          />

          <img
            src="/img/team-fotos/Flor.png"
            alt="foto"
            className="col-span-1 h-full p-[8px] relative z-20 mx-auto"
          />

          <img
            src="/img/team-fotos/Ivana.png"
            alt="foto"
            className="col-span-1 h-full p-[8px] relative z-20 mx-auto"
          />
        </div>

        {/* gap-4 */}
        <div className="grid col-span-1 grid-cols-2 grid-rows-2">
          <img
            src="/img/team-fotos/Luis-jugando.png"
            alt="foto"
            className="row-span-2 col-span-1 p-[8px] h-full relative z-20"
          />

          <img
            src="/img/team-fotos/Jasu.png"
            alt="foto"
            className="row-span-1 col-span-1 p-[8px] h-full relative z-20"
          />

          <img
            src="/img/team-fotos/Tite.png"
            alt="foto"
            className="row-span-1 col-span-1 p-[8px] h-full relative z-20"
          />
        </div>

        {/* gap-4 */}
        <div className="grid col-span-1 grid-cols-2">
          <img
            src="/img/team-fotos/Leyendo.png"
            alt="foto"
            className="col-span-1 h-full p-[8px] relative z-20 mx-auto"
          />

          <img
            src="/img/team-fotos/Luis-cumple.png"
            alt="foto"
            className="col-span-1 h-full p-[8px] relative z-20 mx-auto"
          />

          <img
            src="/img/team-fotos/Eli.png"
            alt="foto"
            className="col-span-1 h-full p-[8px] relative z-20 mx-auto"
          />

          <img
            src="/img/team-fotos/Daily.png"
            alt="foto"
            className="col-span-1 h-full p-[8px] relative z-20 mx-auto"
          />
        </div>
      </div>

      <BoxesSwiper />
    </Fragment>
  );
};

export default TeamPictures;
