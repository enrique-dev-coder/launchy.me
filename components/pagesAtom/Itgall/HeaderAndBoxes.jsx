import React, { Fragment } from 'react';
import InfoTarget from '../InfoTarget';
import Header from '../Header';

const objetivoTexto =
  'ITGALL es una empresa que nace para dar visibilidad a todos los living labs empezando por Galicia y actualmente expandiendose por el mundo. Y ese es el punto de esta web, dar a conocer a cada uno, dando una visión macro a esta iniciativa que busca revolucionar el campo de la salud.';

const desafioTexto = {
  one: 'Centralizar los living labs desde la web localizandolos geográficamente desde una visión macro del ecosistema de salud.',
  two: 'Transmitir la propuesta de valor de ITGALL con una gráfica testada a través de diversas propuestas.',
  three:
    'Usabilidad enfocada en un público entre 40-50 años. Decidimos hacer una navegación asistida.',
  four: 'Gestionar y unificar la información dada por parte de cada living lab para llegar a concensos informativos.',
};

const imgData = {
  imgURL: {
    one: "/img/icons/fluent_web-asset-20-regular.svg",
    two: "/img/icons/Ojito.svg",
    three: "/img/icons/Profile.svg",
    four: "/img/icons/fluent_calendar-today-28-regular.svg",
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
  color: 'from-purple-500 via-white to-white',
  alt: {
    one: 'Icon created by Launchy Team',
  },
};

// Header items
const items = [
  'diseño web',
  'development',
  'frontend',
  'diseño UX',
  'diseño UI',
  'prototipado',
  'iteración',
  'comunicación',
];

const HeaderAndBoxes = () => {
  return (
    <Fragment>
      <Header items={items} quantity={7}>
        <img
          src="/img/itgall/Logo ITGall.png"
          width={324}
          height={103}
          alt={'Mockup de ITGall creado por Launchy'}
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
