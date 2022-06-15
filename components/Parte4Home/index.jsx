import React from 'react';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';
import Title2Home from '../Title2Home';
import Card from './Card';
import HomeButton from '../HomeButton';
const data = [
  {
    id: 1,
    path: '/img/casos/ITGALL.mp4',
    desc: 'DESARROLLAMOS EL PUNTO DE ENCUENTRO VIRTUAL DE LOS LIVING LABS EN GALICIA',
    video: true,
  },
  {
    id: 2,
    path: '/img/casos/app_deportiva.png',
    desc: 'DISEÑAMOS LA EXPERIENCIA EN ESTADIOS DEPORTIVOS CON EL DISEÑO DE UNA APP',
    video: false,
  },
  {
    id: 3,
    path: '/img/casos/fichap.png',
    desc: 'REORGANIZAMOS EL SITE DE FICHAP PARA UNA MEJOR PERFORMANCE ',
    video: false,
  },
  {
    id: 4,
<<<<<<< HEAD
    path: '/img/casos/community.png',
=======
    path: '/img/casos/community3.png',
>>>>>>> main
    desc: 'SITE DE DOCUMENTACION PARA PROTOCOLO DE ENERGIA DE LOS ANGELES',
    video: false,
  },
  {
    id: 5,
<<<<<<< HEAD
    path: '/img/casos/dasboard.mp4',
=======
    path: '/img/casos/JAAK.mp4',
>>>>>>> main
    desc: 'DISEÑAMOS UN DASHBOARD PARA MEJORAR EL CUSTOMER SUCESS',
    video: true,
  },
  {
    id: 6,
    path: '/img/casos/infuy.png',
    desc: 'ESTRATEGIA Y APLICACIÓN PARA INFUY: PIONERA EN DESARROLLO BLOCKCHAIN',
    video: false,
  },
];

const index = () => {
  return (
    <HomeSectionContainer>
      <div className="w-full">
        <Title2Home title={'Y ESTO ES LO QUE HACEMOS Y AMAMOS...'} />
      </div>
      <div className="flex flex-wrap justify-between">
<<<<<<< HEAD
        {data.map((d) => (
          <Card path={d.path} desc={d.desc} video={d.video} />
=======
        {data.map((d, i) => (
          <Card key={i} path={d.path} desc={d.desc} video={d.video} />
>>>>>>> main
        ))}
      </div>
      <div className="w-full flex justify-center">
        <HomeButton title={'CONVIERTETE EN UNO'} />
      </div>
    </HomeSectionContainer>
  );
};

export default index;
