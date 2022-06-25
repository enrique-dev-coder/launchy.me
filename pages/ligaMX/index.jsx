import Image from 'next/image';
import InfoTarget from "../../components/pagesAtom/InfoTarget"
import Testimonial from "../../components/pagesAtom/Testimonial";
import ProcessOrSolution from "../../components/pagesAtom/ProcessOrSolution";
import Header from '../../components/pagesAtom/Header'
import Pictures from '../../components/pagesAtom/LigaMX/Pictures';
import Footer from '../../components/Footer'
import LigaMXLogo from '../../public/img/ligaMX/Logo Liga MX.png'
import iconPic1 from '../../public/img/icons/fluent_web-asset-20-regular.svg'
import iconPic2 from '../../public/img/icons/Profile.svg'
import iconPic3 from '../../public/img/icons/Check.svg'
import iconPic4 from '../../public/img/icons/Ojito.svg'


const objetivoTexto = "Crear una propuesta de Fan ID para el uso de reconocimiento facial en los estadios de México, en pos de mejorar la experiencia y agilidad del proceso de entrada. Preservando la seguridad y la eficiencia a través de una aplicación con dos versiones."

const desafioTexto = {
  one: 'Crear una aplicación distintiva con dos usuarios distintos: El fan y el operario.',
  two: 'Construir flujos accesibles para la carga de data por parte del fan: para el mismo y para menores de edad.',
  three: 'Crear procedicimientos agiles e intuitivos para un onboarding facil para los operarios.',
  four: 'Un prototipo en constante mejora acorde a las necesidades del usuario y equipo técnico.'
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
  color: 'from-lime-500 via-white to-white',
  alt: {
    one: 'Icon created by Launchy Team'
  }
}

// Testimonial props
const textTestimonial = 'Poder crear junto con un equipo técnico para que el reconocimiento facial pueda llegar a las personas a partir de procedimientos sencillos mejorando la experiencia con el usuario.'

// Header items
const items = [
  'diseño UX',
  'diseño UI',
  'prototipado',
  'iteración',
  'diseño para diferentes públicos',
  'writing',
]

const LigaMX = () => {
  return (
      <main className="bg-[#F1F1F1] 2xl:container 2xl:mx-auto">

          {/*********************************       Header       *********************************/}
          <Header items={items} quantity={5}>
            
            <div className="mb-5">
              <Image 
                src={LigaMXLogo} 
                width={283} height={51} 
                alt={'Mockup de LigaMX creado por Launchy'}
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
          <ProcessOrSolution title='SOLUCIÓN' paragraph={false}>
            <div className="flex flex-col lg:flex-row lg:gap-4 mb-[60px] lg:mb-[80px]">

              <video src="img/ligaMX/FAN ID (1) (1).mp4" className='shadow-2xl w-full lg:w-1/2 flex justify-center mb-[30px] lg:mb-0' autoPlay controls></video>
              
              <div className="lg:w-1/2 flex">
              Ya que la aplicación aun esta en revisiones queremos compartirles una visualización de los flujos generales para que puedan ver parte de la inciativa y cómo integramos nuestra expertis de diseño a impactar en la vida de las personas.
              </div>

            </div>
          </ProcessOrSolution>

          {/*********************************** Rest of the pictures ***************************************/}
          <Pictures />

          {/***********************************  Testimonial  *******************************/}
          <Testimonial text={textTestimonial} />

          {/***********************************  Footer  ******************************/}
          <Footer blue />
      </main>
  )
}

export default LigaMX