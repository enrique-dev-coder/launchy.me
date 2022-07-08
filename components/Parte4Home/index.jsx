import React from 'react';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';
import Title2Home from '../Title2Home';
import Card from './Card';
import HomeButton from '../HomeButton';
const data = [
  {
    id: 1,
    path: '/img/casos/ITGALL2.mp4',
    desc: 'DESARROLLAMOS EL PUNTO DE ENCUENTRO VIRTUAL DE LOS LIVING LABS EN GALICIA',
    link: '/itgall',
    video: true,
  },
  {
    id: 2,
    path: '/img/casos/app_deportiva.png',
    desc: 'DISEÑAMOS LA EXPERIENCIA EN ESTADIOS DEPORTIVOS CON EL DISEÑO DE UNA APP',
    link: '/ligaMX',
    video: false,
  },
  {
    id: 3,
    path: '/img/casos/fichap.png',
    desc: 'REORGANIZAMOS EL SITE DE FICHAP PARA UNA MEJOR PERFORMANCE ',
    link: '/fichap',
    video: false,
  },
  {
    id: 4,
    path: '/img/casos/community3.png',
    desc: 'SITE DE DOCUMENTACION PARA PROTOCOLO DE ENERGIA DE LOS ANGELES',
    link: '/community',
    video: false,
  },
  {
    id: 5,
    path: '/img/casos/JAAK.mp4',
    desc: 'DISEÑAMOS UN DASHBOARD PARA MEJORAR EL CUSTOMER SUCESS',
    link: '/jaak',
    video: true,
  },
  {
    id: 6,
    path: '/img/casos/infuy.png',
    desc: 'ESTRATEGIA Y APLICACIÓN PARA INFUY: PIONERA EN DESARROLLO BLOCKCHAIN',
    link: '/infuy',
    video: false,
  },
];

const index = () => {
  return (
    <HomeSectionContainer>
      <div className="w-full" id="proyectos">
        <Title2Home title={'Y ESTO ES LO QUE HACEMOS Y AMAMOS...'} />
      </div>
      <div className="flex flex-wrap justify-between">
        {data.map((d, i) => (
          <Card
            key={i}
            link={d.link}
            path={d.path}
            desc={d.desc}
            video={d.video}
          />
        ))}
      </div>
      <div className="w-full flex justify-center">
        <HomeButton link={'/contact'} title={'CONVIERTETE EN UNO'} />
      </div>
    </HomeSectionContainer>
  );
};

export default index;
