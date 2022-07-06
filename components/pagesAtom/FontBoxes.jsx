import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/scrollbar';
import 'swiper/css';

const FontBoxes = ({title, text}) => {
  return (
    <div className="mb-[60px] md:mb-[80px] overflow-hidden max-w-[906px] mx-auto px-[4%] lg:px-0">
      <div className='flex mx-auto gap-12 my-4 hidden lg:block'>
        <Swiper
          slidesPerView={3}
          
          loop={true}
          className="flex w-full"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
           }}
           modules={[Autoplay]}

        >
          <SwiperSlide>
            <div className='flex flex-col w-[200px]'>
              <h3 className='mb-2'>{title} Regular</h3>
              <p>{text}</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col font-semibold w-[200px]">
              <h3 className='mb-2'>{title} Semibold</h3>
              <p>{text}</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col font-bold w-[200px]">
              <h3 className='mb-2'>{title} Bold</h3>
              <p>{text}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className='flex mx-auto gap-12 my-4 block lg:hidden'>
        <Swiper
          slidesPerView={1}
          
          loop={true}
          className="flex w-full"
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
           }}
           modules={[Autoplay]}

        >
          <SwiperSlide>
            <div className='flex flex-col w-[250px] mx-auto'>
              <h3 className='mb-2'>{title} Regular</h3>
              <p>{text}</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" font-semibold w-[250px] mx-auto">
              <h3 className='mb-2'>{title} Semibold</h3>
              <p>{text}</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="font-bold w-[250px] mx-auto">
              <h3 className='mb-2'>{title} Bold</h3>
              <p>{text}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default FontBoxes