import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper';
import { useRef, useState, useEffect } from 'react';

import 'swiper/css';

const texts = [
  {
    id: 0,
    text: 'Me hace mejor cada dia, siento que aprendo mucho con todo el equipo. Los quiero mucho.',
  },
  {
    id: 1,
    text: 'Donde aprendo dia a día con un equipo super talentoso y donde siempre le vemos el lado positivo a todo.',
  },
  {
    id: 2,
    text: 'Equipo muy dinámico y muy preparado para sus funciones, aparte que se genera muy buen ambiente de trabajo',
  },
  {
    id: 3,
    text: 'Launchy es la unión de personas talentosas en áreas de la economía digital con el fin de llevar a las empresas al siguiente nivel',
  },
  {
    id: 4,
    text: 'Launchy es un espacio para trabajar muy amigable y confortable',
  },
  {
    id: 5,
    text: 'Me siento feliz siendo parte de Launchy, siento que aprendí mucho desde el primer día hasta hoy.',
  },
  {
    id: 6,
    text: 'Estoy empezando con el equipo y se me hacen super amigables y con un gran clima.',
  },
];

const BoxesSwiper = () => {
  const swiperRef = useRef(null);

  const [activeSlide, setActiveSlide] = useState(null);
  //console.log(slideRef.current.id);

  //este useEffect se ejecuta cada que se cambia el evento de swiper que se ejecuta cada que se cambia
  //la idea es que ela ctive Slide es el index de la slide de swiper que se guarda en el estado y coincide con el id del slide
  useEffect(() => {
    setActiveSlide(swiperRef.current.swiper.realIndex);
    swiperRef.current.swiper.on('slideChange', () =>
      setActiveSlide(swiperRef.current.swiper.realIndex)
    );
  }, [activeSlide]);

  return (
    <div
      className={`w-full flex items-center py-[1rem] mt-[60px] md:mt-[80px] hidden lg:block`}
    >
      {/* DESKTOP 1280px */}
      <Swiper
        slidesPerView={3.5}
        loop={true}
        className="flex w-full gap-4 block"
        grabCursor={true}
        //modules={[FreeMode]}
        centeredSlides={true}
        initialSlide={activeSlide}
        ref={swiperRef}
      >
        {texts.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div
              className={`${
                activeSlide === item.id
                  ? 'bg-gradient-to-b from-gray-600 via-gray-600 to-[#E3DEFF]'
                  : 'bg-gradient-to-b from-gray-600 via-gray-600 to-[#E3DEFF] opacity-40'
              }  transition-opacity text-[14px] text-white roboto_normal border border-white shrink-0 h-[105px] w-[280px] p-[2%] flex items-center text-center `}
            >
              {item.text}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BoxesSwiper;
