import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
const images = [
  { id: 1, path: 'alien1' },
  { id: 2, path: 'alien2' },
  { id: 3, path: 'alien3' },
  { id: 4, path: 'alien4' },
  { id: 5, path: 'alien5' },
  { id: 6, path: 'alien6' },
  { id: 7, path: 'alien1' },
  { id: 8, path: 'alien2' },
  { id: 9, path: 'alien3' },
  { id: 10, path: 'alien4' },
];
const AlienSlider = () => {
  return (
    <Swiper
      slidesPerView={10}
      //cada que avance el slider avanza de a 3
      slidesPerGroup={1}
      loop={true}
      className=""
      autoplay={{
        delay: 500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
    >
      {images.map((l) => (
        <SwiperSlide key={l.id}>
          <div className=" flex flex-col justify-center">
            <img
              src={`/img/team/${l.path}.png`}
              alt={`logo de ${l.path}`}
              className="mx-auto"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default AlienSlider;
