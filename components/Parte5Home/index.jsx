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
    desc: 'Trabajar con los chicos de Launchy es increíble. Súper rápidos, dispuestos y reciben el feedback de manera positiva siempre. ¡Realmente es un placer trabajar con un equipo como el de ellos!',
    empresa: 'Community',
    name: 'Helena Donoso',
    job: 'CEO',
    foto: '/img/testimonios/Helena.png',
  },
  {
    id: 2,
    desc: 'Trabajar con los chicos de Launchy es increíble. Súper rápidos, dispuestos y reciben el feedback de manera positiva siempre. ¡Realmente es un placer trabajar!',
    empresa: 'Infuy',
    job: 'CGO',
    name: 'Joaquín del Torchio',
    foto: '/img/testimonios/Infuy.png',
  },
  {
    id: 3,
    desc: 'Trabajar con los chicos de Launchy es increíble. Súper rápidos, dispuestos y reciben el feedback de manera positiva siempre. ¡Realmente es un placer trabajar!',
    empresa: 'Itgall',
    job: 'Gerente CSG',
    name: 'Gisella García',
    foto: '/img/testimonios/Gisella.png',
  },
  {
    id: 4,
    desc: 'El programa de aceleración nos ha ampliado las expectativas de oportunidades en el mercado con nuevas estrategias. De oportunidades en el mercado con.',
    empresa: 'Revenue B2B',
    job: 'CEO',
    name: 'Gisella García',
    foto: '/img/testimonios/michael.jpg',
  },
  {
    id: 5,
    desc: 'El programa de aceleración nos ha ampliado las expectativas de oportunidades en el mercado con nuevas estrategias. De oportunidades en el mercado con.',
    empresa: 'Revenue B2B',
    job: 'CEO',
    name: 'Gisella García',
    foto: '/img/testimonios/michael.jpg',
  },
  {
    id: 6,
    desc: 'El programa de aceleración nos ha ampliado las expectativas de oportunidades en el mercado con nuevas estrategias. De oportunidades en el mercado con.',
    empresa: 'Revenue B2B',
    job: 'CEO',
    name: 'Gisella García',
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
          name={d.name}
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
        {/*slider for desktop*/}
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
          className="mySwiper hidden md:block h-[250px]"
        >
          <SwiperSlide>
            <Slide1 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2 />
          </SwiperSlide>
        </Swiper>
        {/*slider for mobile*/}
        <Swiper
          //ponerlo con decimales es para que se asome poquito el siguiente slide en lo que se ve una
          slidesPerView={1.1}
          spaceBetween={10}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination]}
          className="mySwiper md:hidden   h-[250px]"
        >
          {data.map((d) => (
            <SwiperSlide>
              <TestimonialCard
                key={d.id}
                desc={d.desc}
                empresa={d.empresa}
                job={d.job}
                foto={d.foto}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </HomeSectionContainer>
  );
};

export default index;
