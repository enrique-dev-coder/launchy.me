import Image from 'next/image';
import Testimonial from "../../components/pagesAtom/Testimonial";
import InfoTarget from "../../components/pagesAtom/InfoTarget"
import ProcessOrSolution from "../../components/pagesAtom/ProcessOrSolution";
import Header from '../../components/pagesAtom/Header'
import Pictures from '../../components/pagesAtom/Fichap/Pictures';
import Footer from '../../components/Footer'
import FichapLogo from '../../public/img/fichap/Logo Fichap.png'
import iconPic1 from '../../public/img/icons/Profile.svg'
import iconPic2 from '../../public/img/icons/Ojito.svg'
import iconPic3 from '../../public/img/icons/carbon_growth.svg'
import iconPic4 from '../../public/img/icons/fluent_calendar-today-28-regular.svg'
import FirstMiniScrenn from '../../public/img/fichap/1.png'
import SecondMiniScrenn from '../../public/img/fichap/1 (2).png'
import ThirdMiniScrenn from '../../public/img/fichap/2 (2).png'
import FourthMiniScrenn from '../../public/img/fichap/1 (3).png'
import FifthMiniScrenn from '../../public/img/fichap/2 (3).png'
import SixthMiniScrenn from '../../public/img/fichap/3 (3).png'
import SeventhMiniScrenn from '../../public/img/fichap/1 (4).png'
import EighthMiniScrenn from '../../public/img/fichap/2 (4).png'
import NinthMiniScrenn from '../../public/img/fichap/1 (5).png'

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

            <div className="mb-10">
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
            <div className="grid grid-cols-5 mb-[60px] md:mb-[80px] px-[2%] gap-3 border shadow-xl">

              {/* one picture */}
              <div className="col-span-1 flex items-center justify-center ">

                  <Image 
                    src={FirstMiniScrenn} 
                    width={144} 
                    height={313} 
                    alt={'Mockup de Fichap creado por Launchy'}
                    className='w-full h-full'
                  />
                
              </div>
              
              {/* two-pictures */}
              <div className="col-span-1 flex flex-col items-center justify-center gap-4">

                  <Image 
                    src={SecondMiniScrenn} 
                    width={144} 
                    height={230} 
                    alt={'Mockup de Fichap creado por Launchy'}
                  />

                  <Image 
                    src={ThirdMiniScrenn} 
                    width={144} 
                    height={291} 
                    alt={'Mockup de Fichap creado por Launchy'}
                  />

              </div>

              {/* three-pictures */}
              <div className="col-span-1 flex flex-col items-center justify-center gap-4">

                  <Image 
                    src={FourthMiniScrenn} 
                    width={144} 
                    height={57} 
                    alt={'Mockup de Fichap creado por Launchy'}
                  />

                  <Image 
                    src={FifthMiniScrenn} 
                    width={144} 
                    height={312} 
                    alt={'Mockup de Fichap creado por Launchy'}
                  />

                  <Image 
                    src={SixthMiniScrenn} 
                    width={144} 
                    height={136} 
                    alt={'Mockup de Fichap creado por Launchy'}
                  />

              </div>

              {/* two-pictures */}
              <div className="col-span-1 flex flex-col items-center justify-center gap-4">
                
                  <Image 
                    src={SeventhMiniScrenn} 
                    width={145} 
                    height={230} 
                    alt={'Mockup de Fichap creado por Launchy'}
                  />

                  <Image 
                    src={EighthMiniScrenn} 
                    width={145} 
                    height={291} 
                    alt={'Mockup de Fichap creado por Launchy'}
                  />

              </div>

              {/* one-picture */}
              <div className="col-span-1 flex flex-col flex items-center justify-center">

                  <Image 
                    src={NinthMiniScrenn} 
                    width={145} 
                    height={312} 
                    alt={'Mockup de Fichap creado por Launchy'}
                  />

              </div>
              
            </div>
          </ProcessOrSolution>

          {/*********************************** Rest of the pictures ***************************************/}
          <Pictures />

          {/***********************************  Testimonial  *******************************/}
          <Testimonial text={testimonialText} />

          {/***********************************  Footer  ******************************/}
          <Footer />
      </main>
  )
}

export default Fichap