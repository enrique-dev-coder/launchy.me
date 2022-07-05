import React, { Fragment } from 'react';
import Image from 'next/image';
import InfoTarget from '../InfoTarget';
import Header from '../Header';
import JaakLogo from '../../../public/img/jaak/Logo JAAK.png';
import iconPic1 from '../../../public/img/icons/fluent_web-asset-20-regular.svg';
import iconPic2 from '../../../public/img/icons/Check.svg';
import iconPic3 from '../../../public/img/icons/Profile.svg';
import iconPic4 from '../../../public/img/icons/carbon_growth.svg';

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
    one: iconPic1,
    two: iconPic2,
    three: iconPic3,
    four: iconPic4,
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
  'diseño de banners',
  'mantenimiento de feed',
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
        <Image
          src={JaakLogo}
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
