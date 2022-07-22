import React from 'react';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';
import Title2Home from '../Title2Home';
import Card from './Card';
import HomeButton from '../HomeButton';
import LogoSlider from '../LogoSlider';
const data = [
  {
    id: 1,
    path: '/img/casos/ITGALL2.mp4',
    desc: 'DESARROLLAMOS EL PUNTO DE ENCUENTRO VIRTUAL DE LOS LIVING LABS EN GALICIA',
    descEng: 'DEVELOPMENT OF A VIRTUAL MEET POINT OF GALICIA LIVING LABS',
    link: '/itgall',
    video: true,
  },
  {
    id: 2,
    path: '/img/casos/app_deportiva.png',
    desc: 'DISEÑAMOS LA EXPERIENCIA EN ESTADIOS DEPORTIVOS CON EL DISEÑO DE UNA APP',
    descEng:
      ' USER EXPERIENCE DESIGN OF FOOTBALL STADIUMS THROUGH A MOBILE APP ',
    link: '/ligaMX',
    video: false,
  },
  {
    id: 3,
    path: '/img/casos/fichap.png',
    desc: 'REORGANIZAMOS EL SITE DE FICHAP PARA UNA MEJOR PERFORMANCE ',
    descEng: 'FICHAP SITE REORGANIZATION FOR A BETTER PERFORMANCE',
    link: '/fichap',
    video: false,
  },
  {
    id: 4,
    path: '/img/casos/community3.png',
    desc: 'SITE DE DOCUMENTACION PARA PROTOCOLO DE ENERGIA DE LOS ANGELES',
    descEng: 'SITE DOCUMENTATION FOR LOS ANGELES ENERGY PROTOCOL',
    link: '/community',
    video: false,
  },
  {
    id: 5,
    path: '/img/casos/JAAK.mp4',
    desc: 'DISEÑAMOS UN DASHBOARD PARA MEJORAR EL CUSTOMER SUCCESS',
    descEng: 'DASHBOARD DESIGN TO IMPROVE CUSTOMER SUCCESS ON THE COMPANY',
    link: '/jaak',
    video: true,
  },
  {
    id: 6,
    path: '/img/casos/infuy.png',
    desc: 'ESTRATEGIA Y APLICACIÓN PARA INFUY: PIONERA EN DESARROLLO BLOCKCHAIN',
    descEng:
      'STRATEGY AND APPLICATION FOR INFUY: PIONEER IN BLOCKCHAIN DEVELOPMENT',
    link: '/infuy',
    video: false,
  },
];

const index = () => {
  return (
    <>
      <HomeSectionContainer>
        <div className="w-full" id="proyectos">
          <Title2Home
            title={'Y ESTO ES LO QUE HACEMOS Y AMAMOS...'}
            titleENG={'THIS IS WHAT WE DO AND LOVE...'}
          />
        </div>
        <div className="flex flex-wrap justify-between">
          {data.map((d, i) => (
            <Card
              key={i}
              link={d.link}
              path={d.path}
              desc={d.desc}
              descEng={d.descEng}
              video={d.video}
            />
          ))}
        </div>
        <div className="w-full flex justify-center">
          <a href="/contact">
            <HomeButton
              link={'/contact'}
              title={'CONVIERTETE EN UNO'}
              titleEng={'BECOME ONE'}
            />
          </a>
        </div>
      </HomeSectionContainer>
      <div className="mt-[-40px] mb-[120px]">
        <LogoSlider />
      </div>
    </>
  );
};

export default index;
