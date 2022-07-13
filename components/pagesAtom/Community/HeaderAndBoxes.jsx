import React, { Fragment } from 'react';
import InfoTarget from '../InfoTarget';
import Header from '../Header';

const objetivoTexto =
  'Relevar la documentación de Community Electricity, una empresa que se encarga de transformar, a través de un protocolo de blockchain, la energía en dinero para sus ciudadanos. Creando ecosistemas saludables.';

const desafioTexto = {
  one: 'Mediar por la organización de textos documentativos, buscando un site web que pueda mostrar la iniciativa.',
  two: 'Requisitos de elementos predispuestos por el cliente.',
  three:
    'Un control gráfico limitado a la guía del cliente hizo que tuvieramos que elaborar muchas propuestas.',
  four: 'Compatibilizar la gráfica con la web para que sea más ilustrativa.',
};

const imgData = {
  imgURL: {
    one: "/img/icons/fluent_web-asset-20-regular.svg",
    two: "/img/icons/icon-park-outline_graphic-design.svg",
    three: "/img/icons/Ojito.svg",
    four: "/img/icons/Check.svg",
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
  color: 'from-indigo-500 via-white to-white',
  alt: {
    one: 'Icon created by Launchy Team',
  },
};

// Header items
const items = [
  'diseño UX',
  'diseño UI',
  'prototipado',
  'iteración',
  'ilustraciones',
  'development',
  'frontend',
];

const HeaderAndBoxes = () => {
  return (
    <Fragment>
      <Header items={items} quantity={6}>
        <div className="">
          <img
            src="/img/community/Logo Community.png"
            width={315}
            height={109}
            alt={'Mockup de Fichap creado por Launchy'}
          />
        </div>
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
