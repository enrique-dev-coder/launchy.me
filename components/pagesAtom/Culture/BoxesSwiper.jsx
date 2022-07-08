import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

const texts = [
    {text: 'Me hace mejor cada dia, siento que aprendo mucho con todo el equipo. Los quiero mucho.' },
    {text: 'Donde aprendo dia a día con un equipo super talentoso y donde siempre le vemos el lado positivo a todo.' },
    {text: 'Equipo muy dinámico y muy preparado para sus funciones, aparte que se genera muy buen ambiente de trabajo' },
    {text: 'Launchy es la unión de personas talentosas en áreas de la economía digital con el fin de llevar a las empresas al siguiente nivel' },
    {text: 'Launchy es un espacio para trabajar muy amigable y confortable' },
    {text: 'Me siento feliz siendo parte de Launchy, siento que aprendí mucho desde el primer día hasta hoy.' },
    {text: 'Estoy empezando con el equipo y se me hacen super amigables y con un gran clima.' },
];

const BoxesSwiper = () => {
  return (
    <div className={`w-full flex items-center py-[1rem] mt-[60px] md:mt-[80px]`}>
    {/* DESKTOP 1280px */}
      <Swiper
        slidesPerView={4}
        loop={true}
        className="flex w-full gap-4 hidden xl:block"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {texts.map((item, index) => (
          <SwiperSlide key={index} className='flex justify-center'>
            <div className='text-white text-[14px] roboto_normal border border-white shrink-0 h-[105px] w-[280px] p-[2%] flex items-center text-center bg-gradient-to-b from-gray-600 via-gray-600 to-[#E3DEFF]'>
                {item.text}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* DESKTOP 1024px */}
      <Swiper
        slidesPerView={3}
        loop={true}
        className="flex w-full gap-4 hidden lg:block xl:hidden"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {texts.map((item, index) => (
          <SwiperSlide key={index} className='flex justify-center'>
            <div className='text-white text-[14px] roboto_normal border border-white shrink-0 h-[105px] w-[280px] p-[2%] flex items-center text-center bg-gradient-to-b from-gray-600 via-gray-600 to-[#E3DEFF]'>
                {item.text}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* TABLET 640px */}
      <Swiper
        slidesPerView={2}
        loop={true}
        className="flex w-full gap-4 hidden sm:block lg:hidden"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {texts.map((item, index) => (
          <SwiperSlide key={index} className='flex justify-center'>
            <div className='text-white text-[14px] roboto_normal border border-white shrink-0 h-[105px] w-[280px] p-[2%] flex items-center text-center bg-gradient-to-b from-gray-600 via-gray-600 to-[#E3DEFF]'>
                {item.text}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* MOBILE 320px */}
      <Swiper
        slidesPerView={1}
        loop={true}
        className="flex w-full gap-4 sm:hidden"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {texts.map((item, index) => (
          <SwiperSlide key={index} className='flex justify-center'>
            <div className='text-white text-[14px] roboto_normal border border-white shrink-0 h-[105px] w-[280px] p-[2%] flex items-center text-center bg-gradient-to-b from-gray-600 via-gray-600 to-[#E3DEFF]'>
                {item.text}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BoxesSwiper;