import { Fragment } from 'react';
import InfoTarget from '../InfoTarget';
import Header from '../Header';
import iconPic1 from '../../../public/img/icons/Profile.svg';
import iconPic2 from '../../../public/img/icons/Ojito.svg';
import iconPic3 from '../../../public/img/icons/carbon_growth.svg';
import iconPic4 from '../../../public/img/icons/fluent_calendar-today-28-regular.svg';
import FichapLogo from '../../../public/img/fichap/Logo Fichap.png';

const objetivoTexto =
  'Generar una reorganización en la navegabilidad del sitio favoreciendo a una mayor conversión de formularios de contacto así como del entendimiento de la propuesta de valor del site.';

const desafioTexto = {
  one: 'Investigar los puntos de calor del site así como los más frios para entender que conservar.',
  two: 'Investigar a través de competidores los sectores de valor que el cliente estaba buscando.',
  three:
    'Generar un nuevo formulario con pasos secuenciales simples para mejorar la conversión.',
  four: 'Impulsar al equipo de marketing a partir del research y ejecución de iniciaivas.',
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
  color: 'from-green-400 via-white to-white',
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
  'development',
  'frontend',
  'pixel',
  'rediseño',
];

const HeaderAndBoxes = () => {
  return (
    <Fragment>
      <Header items={items} quantity={7}>
        <div className="mb-5">
          <img
            src={FichapLogo}
            width={262}
            height={51}
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
