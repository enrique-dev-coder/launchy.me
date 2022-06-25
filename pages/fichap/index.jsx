import Image from 'next/image';
import Testimonial from "../../components/pagesAtom/Testimonial";
import InfoTarget from "../../components/pagesAtom/InfoTarget"
import ProcessOrSolution from "../../components/pagesAtom/ProcessOrSolution";
import Header from '../../components/pagesAtom/Header'
import Pictures from '../../components/pagesAtom/Fichap/Pictures';
import FirstScreen from '../../components/pagesAtom/Fichap/FirstScreen';
import Footer from '../../components/Footer'
import FichapLogo from '../../public/img/fichap/Logo Fichap.png'
import iconPic1 from '../../public/img/icons/Profile.svg'
import iconPic2 from '../../public/img/icons/Ojito.svg'
import iconPic3 from '../../public/img/icons/carbon_growth.svg'
import iconPic4 from '../../public/img/icons/fluent_calendar-today-28-regular.svg'

const objetivoTexto = "Generar una reorganización en la navegabilidad del sitio favoreciendo a una mayor conversión de formularios de contacto así como del entendimiento de la propuesta de valor del site."

const desafioTexto = {
  one: 'Investigar los puntos de calor del site así como los más frios para entender que conservar.',
  two: 'Investigar a través de competidores los sectores de valor que el cliente estaba buscando.',
  three: 'Generar un nuevo formulario con pasos secuenciales simples para mejorar la conversión.',
  four: 'Impulsar al equipo de marketing a partir del research y ejecución de iniciaivas.'
} 

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
    four: 32
  },
  width: {
    one: 32,
    two: 32,
    three: 32,
    four: 32
  },
  color: 'from-green-400 via-white to-white',
  alt: {
    one: 'Icon created by Launchy Team'
  }
}

//Solution Text
const solutionText = 'Generamos una investigación sobre webs de competencias de Fichap y encontramos que uno de los puntos claves eran los formularios y quitando carruseles para dar pase a la información de una manera más simple e intuitiva. Organizando el flujo del potencial cliente a través de la web. Asi cómo cooperamos en la optimización de las campañas y estrategias. '

//Testimonial Props
const testimonialText = 'Hemos aprendido mutuamente integrando metodologías y puntos de vistas en conjunto. Fichap es una empresa que tiene como misión digitalizar los recursos humanos de las empresas. Y nos sentimos más que motivados a ayudarlos que esto sea así.'

// Header items
const items = [
  'diseño UX',
  'diseño UI',
  'prototipado',
  'iteración',
  'development',
  'frontend',
  'pixel perfect',
  'rediseño',
]

const Fichap = () => {
  return (
      <main className="bg-[#F1F1F1] 2xl:container 2xl:mx-auto">

          {/*********************************       Header       *********************************/}
          <Header items={items} quantity={7}>
            <div className="mb-5">
              <Image 
                src={FichapLogo} 
                width={262} height={51} 
                alt={'Mockup de Fichap creado por Launchy'}
              />
            </div>
          </Header>

          {/**********************************  InfoTarget (Boxes) ********************************/}
          <InfoTarget 
            objetivoTexto={objetivoTexto}
            desafioTexto={desafioTexto}
            imgData={imgData}
          />

          {/***********************************      Solution         *****************************/}
          <ProcessOrSolution title='SOLUCIÓN' text={solutionText}>
            <FirstScreen />
          </ProcessOrSolution>

          {/*********************************** Rest of the pictures ***************************************/}
          <Pictures />

          {/***********************************  Testimonial  *******************************/}
          <Testimonial text={testimonialText} />

          {/***********************************  Footer  ******************************/}
          <Footer blue />
      </main>
  )
}

export default Fichap