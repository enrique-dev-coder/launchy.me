import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

const logos = [
  {
    id: 1,
    name: 'revenue',
  },
  {
    id: 2,
    name: 'thinkweek',
  },
  {
    id: 3,
    name: 'itgall',
  },
  {
    id: 4,
    name: 'infuy',
  },
  {
    id: 5,
    name: 'fichap',
  },
  {
    id: 6,
    name: 'jaak',
  },
  {
    id: 7,
    name: 'community',
  },
  {
    id: 8,
    name: 'cleartech',
  },
  {
    id: 9,
    name: 'breathe',
  },
  {
    id: 10,
    name: 'creatoris',
  },
  {
    id: 11,
    name: 'estudioa',
  },
];

const LogoSlider = () => {
  return (
    <div className="w-full max-w-[1420px]   mx-auto">
      <Swiper
        slidesPerView={11}
        //cada que avance el slider avanza de a 3
        slidesPerGroup={1}
        loop={true}
<<<<<<< HEAD
        className="flex flex-col items-center"
=======
        className="hidden md:flex flex-col items-center"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {logos.map((l) => (
          <SwiperSlide key={l.id}>
            <div className="h-[50px] flex flex-col justify-center">
              <img
                src={`/img/logos/${l.name}.png`}
                alt={`logo de ${l.name}`}
                className="mx-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/*slider for mobile view*/}
      <Swiper
        slidesPerView={3}
        //cada que avance el slider avanza de a 3
        slidesPerGroup={1}
        loop={true}
        className="flex md:hidden flex-col items-center"
>>>>>>> main
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {logos.map((l) => (
          <SwiperSlide key={l.id}>
            <div className="h-[50px] flex flex-col justify-center">
              <img
                src={`/img/logos/${l.name}.png`}
                alt={`logo de ${l.name}`}
                className="mx-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoSlider;
