import Image from 'next/image';
import Testimonial from "../../components/pagesAtom/Testimonial";
import InfoTarget from "../../components/pagesAtom/InfoTarget"
import ProcessOrSolution from "../../components/pagesAtom/ProcessOrSolution";
import Header from '../../components/pagesAtom/Header'
import FadeInElement from '../../components/pagesAtom/FadeInElement'
import Footer from '../../components/Footer'
import FichapLogo from '../../public/img/fichap/Logo Fichap.png'
import iconPic1 from '../../public/img/icons/Profile.svg'
import iconPic2 from '../../public/img/icons/Ojito.svg'
import iconPic3 from '../../public/img/icons/carbon_growth.svg'
import iconPic4 from '../../public/img/icons/fluent_calendar-today-28-regular.svg'
import FirstScreen from '../../public/img/fichap/First Frame.png'
import FirstFrameSecondParagraph from '../../public/img/fichap/First Frame (2).png'
import SecondFrameSecondParagraph from '../../public/img/fichap/Second Frame (2).png'
import FirstFrameThirdParagraph from '../../public/img/fichap/First Frame (3).png'
import FirstFrameFourthParagraph from '../../public/img/fichap/First Frame (4).png'
import SecondFrameFourthParagraph from '../../public/img/fichap/Second Frame (4).png'
import FirstBanner from '../../public/img/fichap/Banner (1).png'
import SecondBanner from '../../public/img/fichap/Banner (2).png'


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

//AportandoValor text
const aportandoValor = 'Parte del trabajo se trasladó a generar una guía para los potenciales clientes de Fichap la cual trabajamos en conjunto y la cual se dinfundió de manera orgánica de manera exitosa. Seguimos colaborando con su equipo interno, en búsquedas de constantes mejoras.'

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
            <div className="flex justify-center mb-[60px] md:mb-[80px]">
              <Image 
                src={FirstScreen} 
                width={933} 
                height={540} 
                alt={'Mockup de Fichap creado por Launchy'}
              />
            </div>
          </ProcessOrSolution>

          {/*********************************** Rest of the pictures ***************************************/}
          <FadeInElement>
            <div className="px-[8%]">
            
              <div className='mb-[30px] md:mb-[40px]'>
              Reformular puntos claves de contenido para la audiencia así como dar un rediseño a la página apegado al manual de marca que tienen ha sido una gran experiencia enriquecedora para ambos equipos. Fuimos mas allá de la web para colaborar con las estrategias digitales para el customer journey map del cliente.
              </div>

              <div className="flex flex-col md:flex-row items-center xl:justify-center mb-[30px] md:mb-[40px]">

              <div className="flex justify-center">
                <Image 
                  src={FirstFrameSecondParagraph} 
                  width={511} 
                  height={338} 
                  alt={'Mockup de Fichap creado por Launchy'}
                />
              </div>

              <div className="flex justify-center">
                <Image 
                  src={SecondFrameSecondParagraph} 
                  width={511} 
                  height={338} 
                  alt={'Mockup de Fichap creado por Launchy'}
                />
              </div>

              </div>
              
            </div>
          </FadeInElement>

          <FadeInElement>
            <div className="relative h-[320px] md:h-[420px] lg:h-[620px] xl:h-[640px] mb-[60px] md:mb-[80px] flex justify-center">

              <div className="hidden sm:block absolute z-10 bg-[#C9F8DC] w-2/3 h-[50%] right-0 bottom-[2%] lg:bottom-[7%] xl:bottom-0"></div>

              <div className="absolute z-20 top-[0%] h-[200px] w-[300px] sm:w-[500px] sm:h-[300px] md:w-[650px] md:h-[400px] lg:w-[900px] lg:h-[600px] xl:w-[982px] xl:h-[621px]">
                <Image 
                  src={FirstFrameThirdParagraph} 
                  width={982} 
                  height={621} 
                  alt={'Mockup de Fichap creado por Launchy'}
                />
              </div>
              
            </div>
          </FadeInElement>

          <ProcessOrSolution title='APORTANDO VALOR...' text={aportandoValor}/>

          <FadeInElement>
            <div className="flex justify-center gap-4 mb-[30px] md:mb-[40px] bg-[#E6E6E6] py-2">

              <div className="w-[115px] sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[425px]">
                <Image 
                  src={FirstFrameFourthParagraph} 
                  width={425} 
                  height={467} 
                  alt={'Mockup de Fichap creado por Launchy'}
                />
              </div>
                
              <div className="w-[180px] sm:w-[280px] md:w-[450px] lg:w-[550px] xl:w-[611] flex">
                <Image 
                  src={SecondFrameFourthParagraph} 
                  width={611} 
                  height={450} 
                  alt={'Mockup de Fichap creado por Launchy'}
                />
              </div>

            </div>
          </FadeInElement>

          <FadeInElement>
            <div className="flex flex-col gap-2 lg:flex-row justify-center px-[8%] lg:px-0 mb-[60px] md:mb-[80px]">

            <div className="flex justify-center">
                <Image 
                  src={FirstBanner} 
                  width={540} 
                  height={213} 
                  alt={'Mockup de Fichap creado por Launchy'}
                />
            </div>

            <div className="flex justify-center">
                <Image 
                  src={SecondBanner} 
                  width={540} 
                  height={213} 
                  alt={'Mockup de Fichap creado por Launchy'}
                />
            </div>

            </div>
          </FadeInElement>

          {/***********************************  Testimonial  *******************************/}
          <Testimonial text={testimonialText} />

          {/***********************************  Footer  ******************************/}
          <Footer />
      </main>
  )
}

export default Fichap