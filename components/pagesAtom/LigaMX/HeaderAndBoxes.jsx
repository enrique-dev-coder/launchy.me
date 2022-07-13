import { Fragment } from 'react';
import InfoTarget from '../InfoTarget';
import Header from '../Header';
const objetivoTexto =
  'Crear una propuesta de Fan ID para el uso de reconocimiento facial en los estadios de México, en pos de mejorar la experiencia y agilidad del proceso de entrada. Preservando la seguridad y la eficiencia a través de una aplicación con dos versiones.';

const desafioTexto = {
  one: 'Crear una aplicación distintiva con dos usuarios distintos: El fan y el operario.',
  two: 'Construir flujos accesibles para la carga de data por parte del fan: para el mismo y para menores de edad.',
  three:
    'Crear procedicimientos agiles e intuitivos para un onboarding facil para los operarios.',
  four: 'Un prototipo en constante mejora acorde a las necesidades del usuario y equipo técnico.',
};

const imgData = {
  imgURL: {
    one: '/img/icons/fluent_web-asset-20-regular.svg',
    two: '/img/icons/Profile.svg',
    three: '/img/icons/Check.svg',
    four: '/img/icons/Ojito.svg',
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
  color: 'from-lime-500 via-white to-white',
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
  'diseño',
  'writing',
];

const HeaderAndBoxes = () => {
  return (
    <Fragment>
      <Header items={items} quantity={5}>
        <div className="mb-5">
          <img
            src="/img/ligaMX/Logo Liga MX.png"
            alt={'Mockup de LigaMX creado por Launchy'}
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
