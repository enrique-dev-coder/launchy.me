import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';

const HeaderSlider = ({slidesQuantity, slidesItems}) => {
  return (
    <ul className="max-h-[90px] flex w-full border-y border-black z-10">
      {/* DESKTOP */}
      <Swiper
        slidesPerView={slidesQuantity}
        loop={true}
        className="flex w-full gap-4 hidden md:block"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {slidesItems.map((item, index) => (
          <SwiperSlide key={index}>
            <li className="text-center py-4 uppercase">
              {item}
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* MOBILE */}
      <Swiper
        slidesPerView={3}
        loop={true}
        className="flex w-full gap-4 md:hidden"
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
      >
        {slidesItems.map((item, index) => (
          <SwiperSlide key={index}>
            <li className="text-center py-4 uppercase">
              {item}
            </li>
          </SwiperSlide>
        ))}
      </Swiper>
    </ul>
  )
}

export default HeaderSlider