import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

const items = [
    'diseño de manual de marca',
    '-',
    'banners',
    '-',
    'feed',
    '-',
    'presentaciones',
    '-',
    'aplicaciones de marca',
    '-',
    'infografías',
    '-',
    'editables',
    '-',
]

const HeaderSlider = () => {
  return (
    <ul className="max-w-[2800px] mx-auto border-y border-black z-10">
        <Swiper
        slidesPerView={11}
        slidesPerGroup={1}
        loop={true}
        className="flex w-full"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <li className="justify-center py-4 flex-1 flex uppercase">
              {item}
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </ul>
  )
}

export default HeaderSlider