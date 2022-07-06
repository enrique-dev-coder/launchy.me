import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

const images = [
  { id: 1, path: 'Angular' },
  { id: 2, path: 'css' },
  { id: 3, path: 'react' },
  { id: 4, path: 'java' },
  { id: 5, path: 'javascript' },
  { id: 6, path: 'MongoDB' },
  { id: 7, path: 'My sql' },
  { id: 8, path: 'Net' },
  { id: 9, path: 'nextjs' },
  { id: 10, path: 'node' },
  { id: 11, path: 'php' },
  { id: 12, path: 'Python' },
  { id: 13, path: 'react' },
  { id: 14, path: 'tailwindcss' },
  { id: 15, path: 'node' },
];
const StackSlider = () => {
  return (
    <div className='my-[60px] md:my-[80px] border-y border-white py-[1%]'>
      {/*slider for desktop*/}
      <Swiper
        slidesPerView={10}
        //cada que avance el slider avanza de a 3
        slidesPerGroup={1}
        loop={true}
        className="md:block hidden"
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {images.map((l) => (
          <SwiperSlide key={l.id}>
            <div className=" flex flex-col justify-center items-center">
              <img
                src={`/img/stack/${l.path}.png`}
                alt={`logo de ${l.path}`}
                className="mx-auto h-[20px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/*slider for mobile*/}
      <Swiper
        slidesPerView={3}
        //cada que avance el slider avanza de a 3
        slidesPerGroup={1}
        loop={true}
        className="md:hidden"
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {images.map((l) => (
          <SwiperSlide key={l.id}>
            <div className=" flex flex-col justify-center items-center">
              <img
                src={`/img/stack/${l.path}.png`}
                alt={`logo de ${l.path}`}
                className="mx-auto h-[20px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StackSlider;