import React from 'react';
import Title1Home from '../Title1Home';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';
import Card from './Card';
const data = [
  {
    title: 'idea',
    path: '/img/idea.png',
    desc: 'Tengo una idea pero no se por donde empezar y/o no tengo el equipo',
    descEng:
      'I have an idea but I don´t know where to start or I don´t have the team',
  },
  {
    title: 'espciealistas',
    path: '/img/especialistas.png',
    desc: 'Me faltan especialistas en areas clave pero no abarcan el tiempo para un recurso interno',
    descEng:
      'Lack of professionals  in my company but I don´t need to give a permanent job',
  },
  {
    title: 'producto',
    path: '/img/producto.png',
    desc: 'Tengo el producto pero no se como lanzarlo o penetrar el mercado',
    descEng:
      'I have the product but I don´t know how to launch it into the market',
  },
  {
    title: 'tiempo',
    path: '/img/tiempo.png',
    desc: 'No tengo el tiempo ni los recursos para capacitar y gestionar un equipo interno',
    descEng:
      'There is no time or resources to train or manage an internal team',
  },
  {
    title: 'creciemnto',
    path: '/img/crecimiento.png',
    desc: 'Necesitas que tu producto tome una estrategia de marca clara para escalar',
    descEng:
      'There is no time or resources to train or manage an internal team',
  },
];
const index = () => {
  return (
    <HomeSectionContainer>
      <div className="w-full ">
        <Title1Home
          title={'SI TE PASA O SUENA ALGO DE ESTO...'}
          titleENG={'IF THIS HAD HAPPENED TO YOU...'}
        />
        {/*card container*/}
        <div className="flex overflow-x-scroll md:overflow-x-hidden  ">
          {data.map((d, i) => (
            <Card key={i} path={d.path} desc={d.desc} descEng={d.descEng} />
          ))}
        </div>
      </div>
    </HomeSectionContainer>
  );
};

export default index;
