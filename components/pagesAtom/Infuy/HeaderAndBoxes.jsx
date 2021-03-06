import { Fragment } from 'react';
import InfoTarget from '../InfoTarget';
import Header from '../Header';

// InfoTarget props
const objetivoTexto =
  'Generar un Manual de marca y aplicaciones comerciales que apoyen los objetivos comerciales de la empresa así como solificar juntos la estrategia de marca de Infuy. Para ello brindaremos un Diseño aplicado con propósito y que permita escalar a la marca a largo plazo.';

const desafioTexto = {
  one: 'Crear una identidad grafica sólida y consistente  que muestre a INFUY como lider y pionera en desarrollo blockchain.',
  two: 'Generar presentaciones para el área de  GROWTH hablandole gráficamente a dos mercados distintos: empresas sólidas y startups.',
  three:
    'Impactar en la cultura interna de INFUY gráficamente a partir de inciativas que sumaran al equipo de People.',
  four: 'Hacer una marca que se use en el día a día. Capacitando a cada departamento y obteniendo un espacio co-creativo.',
};

const imgData = {
  imgURL: {
    one: "/img/icons/fluent_web-asset-20-regular.svg",
    two: "/img/icons/carbon_growth.svg",
    three: "/img/icons/icon-park-outline_graphic-design.svg",
    four: "/img/icons/fluent_calendar-today-28-regular.svg"
  },
  height: {
    one: 32,
    two: 32,
    three: 32,
    four: 32,
  },
  width: {
    one: 32,
    two: 32,
    three: 32,
    four: 32,
  },
  color: 'from-indigo-400 via-white to-white',
  alt: {
    one: 'Icon created by Launchy Team',
  },
};

//Header items
const items = [
  'diseño',
  'banners',
  'feed',
  'presentaciones',
  'aplicaciones',
  'infografías',
  'editables',
];

const HeaderAndBoxes = () => {
  return (
    <Fragment>
      <Header quantity={6} items={items}>
        <img
          src="/img/infuy/Logo Infuy.png"
          width={220}
          height={111}
          alt={'Mockup de Infuy creado por Launchy'}
        />
      </Header>
      <InfoTarget
        objetivoTexto={objetivoTexto}
        desafioTexto={desafioTexto}
        imgData={imgData}
      />
    </Fragment>
  );
};

export default HeaderAndBoxes;
