import React from 'react';
import Title1Home from '../Title1Home';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';
import Card from './Card';
const data = [
  {
    title: 'idea',
    path: '/img/idea.png',
    desc: 'Tengo una idea pero no se por donde empezar y/o no tengo el equipo',
  },
  {
    title: 'espciealistas',
    path: '/img/especialistas.png',
    desc: 'Me faltan especialistas en areas clave pero no abarcan el tiempo para un recurso interno',
  },
  {
    title: 'producto',
    path: '/img/producto.png',
    desc: 'Tengo el producto pero no se como lanzarlo o penetrar el mercado',
  },
  {
    title: 'tiempo',
    path: '/img/tiempo.png',
    desc: 'No tengo el tiempo ni los recursos para capacitar y gestionar un equipo interno',
  },
  {
    title: 'creciemnto',
    path: '/img/crecimiento.png',
    desc: 'Necesitas que tu producto tome una estrategia de marca clara para escalar',
  },
];
const index = () => {
  return (
    <HomeSectionContainer>
<<<<<<< HEAD
      <div className="w-full">
        <Title1Home title={'SI TE PASA O SUENA ALGO DE ESTO...'} />
        {/*card container*/}
        <div className="flex">
=======
      <div className="w-full ">
        <Title1Home title={'SI TE PASA O SUENA ALGO DE ESTO...'} />
        {/*card container*/}
        <div className="flex overflow-x-scroll md:overflow-x-hidden  ">
>>>>>>> main
          {data.map((d, i) => (
            <Card key={i} path={d.path} desc={d.desc} />
          ))}
        </div>
      </div>
    </HomeSectionContainer>
  );
};

export default index;
