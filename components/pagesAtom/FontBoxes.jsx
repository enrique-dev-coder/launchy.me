import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css/scrollbar';
import 'swiper/css';




const FontBoxes = ({title, text}) => {
  return (
    <div className="mb-[60px] md:mb-[80px] overflow-hidden px-[8%] hidden md:block">
      <div className='flex w-full gap-12 my-4'>
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
            <div>
              <h3 className='mb-2'>{title} Regular</h3>
              <p>{text}</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className=" font-semibold">
              <h3 className='mb-2'>{title} Semibold</h3>
              <p>{text}</p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="font-bold">
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