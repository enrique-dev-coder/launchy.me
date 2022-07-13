import React, { Fragment } from 'react';
import InfoTarget from '../InfoTarget';
import Header from '../Header';

const objetivoTexto =
  'Generar un dashboard que pueda facilitar el customer care y success. Trabajar junto con JAAK, una empresa lider en el rubro de reconocimiento facial, integrando nuestra expertis en diseño con su expertis tecnológica en busqueda de una plataforma que centralice los datos de sus clientes.';

const desafioTexto = {
  one: 'Crear una plataforma intuititva que mezclara los datos proporcionados por diferentes APIS de manera amigable. ',
  two: 'Participar en la iteración agil de la plataforma junto con el equipo de JAAK, escuchando las necesidades técnicas.',
  three:
    'Proponer secciones que faciliten el soporte al usuario y que permitan el filtro de preguntas entre técnicas y administrativas.',
  four: 'Generar un ecosistema en el que el cliente se sienta acompañado e informado de sus consumos.',
};

const imgData = {
  imgURL: {
    one: "/img/icons/fluent_web-asset-20-regular.svg",
    two: "/img/icons/Check.svg",
    three: "/img/icons/Profile.svg",
    four: "/img/icons/carbon_growth.svg",
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
  color: 'from-[#606B9D] via-white to-white',
  alt: {
    one: 'Icon created by Launchy Team',
  },
};

// Header items
const items = [
  'diseño',
  'mantenimiento',
  'diseño UX',
  'diseño UI',
  'writing',
  'prototipado',
  'iteración',
];

const HeaderAndBoxes = () => {
  return (
    <Fragment>
      <Header items={items} quantity={6}>
        <img
          src="/img/jaak/Logo JAAK.png"
          width={212}
          height={98}
          alt={'Mockup de Jaak creado por Launchy'}
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
