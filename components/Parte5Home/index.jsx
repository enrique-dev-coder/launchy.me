import React from 'react';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';
import TestimonialCard from './TestimonialCard';
import Title2Home from '../Title2Home';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    id: 1,
    desc: 'El programa de aceleración nos ha ampliado las expectativas de oportunidades en el mercado con nuevas estrategias. De oportunidades en el mercado con.',
    empresa: 'Revenue B2B',
    job: 'CEO',
    foto: '/img/testimonios/michael.jpg',
  },
  {
    id: 2,
    desc: 'El programa de aceleración nos ha ampliado las expectativas de oportunidades en el mercado con nuevas estrategias. De oportunidades en el mercado con.',
    empresa: 'Revenue B2B',
    job: 'CEO',
    foto: '/img/testimonios/michael.jpg',
  },
  {
    id: 3,
    desc: 'El programa de aceleración nos ha ampliado las expectativas de oportunidades en el mercado con nuevas estrategias. De oportunidades en el mercado con.',
    empresa: 'Revenue B2B',
    job: 'CEO',
    foto: '/img/testimonios/michael.jpg',
  },
  {
    id: 4,
    desc: 'El programa de aceleración nos ha ampliado las expectativas de oportunidades en el mercado con nuevas estrategias. De oportunidades en el mercado con.',
    empresa: 'Revenue B2B',
    job: 'CEO',
    foto: '/img/testimonios/michael.jpg',
  },
  {
    id: 5,
    desc: 'El programa de aceleración nos ha ampliado las expectativas de oportunidades en el mercado con nuevas estrategias. De oportunidades en el mercado con.',
    empresa: 'Revenue B2B',
    job: 'CEO',
    foto: '/img/testimonios/michael.jpg',
  },
  {
    id: 6,
    desc: 'El programa de aceleración nos ha ampliado las expectativas de oportunidades en el mercado con nuevas estrategias. De oportunidades en el mercado con.',
    empresa: 'Revenue B2B',
    job: 'CEO',
    foto: '/img/testimonios/michael.jpg',
  },
];

const Slide1 = () => {
  return (
    <div className="flex justify-between">
      {data.slice(0, 3).map((d) => (
        <TestimonialCard
          key={d.id}
          desc={d.desc}
          empresa={d.empresa}
          job={d.job}
          foto={d.foto}
        />
      ))}
    </div>
  );
};

const Slide2 = () => {
  return (
    <div className="flex justify-between">
      {data.slice(3, 6).map((d) => (
        <TestimonialCard
          key={d.id}
          desc={d.desc}
          empresa={d.empresa}
          job={d.job}
          foto={d.foto}
        />
      ))}
    </div>
  );
};
const index = () => {
  return (
    <HomeSectionContainer>
      <div className="w-full">
        <Title2Home
          title={'NOS ENCANTA SER PARTE DE TU EQUIPO Y ESCUCHARTE DECIR...'}
        />
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination]}
          className="mySwiper h-[250px]"
        >
          <SwiperSlide>
            <Slide1 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2 />
          </SwiperSlide>
        </Swiper>
      </div>
    </HomeSectionContainer>
  );
};

export default index;
