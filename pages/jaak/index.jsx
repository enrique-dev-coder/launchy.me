import Image from 'next/image';
import Testimonial from "../../components/pagesAtom/Testimonial";
import InfoTarget from "../../components/pagesAtom/InfoTarget"
import ColorPalette from "../../components/pagesAtom/ColorPalette"
import ProcessOrSolution from "../../components/pagesAtom/ProcessOrSolution";
import Header from '../../components/pagesAtom/Header'
import Pictures from '../../components/pagesAtom/Jaak/Pictures';
import Footer from '../../components/Footer'
import JaakLogo from '../../public/img/jaak/Logo JAAK.png'
import iconPic1 from '../../public/img/icons/fluent_web-asset-20-regular.svg'
import iconPic2 from '../../public/img/icons/Check.svg'
import iconPic3 from '../../public/img/icons/Profile.svg'
import iconPic4 from '../../public/img/icons/carbon_growth.svg'


const objetivoTexto = "Generar un dashboard que pueda facilitar el customer care y success. Trabajar junto con JAAK, una empresa lider en el rubro de reconocimiento facial, integrando nuestra expertis en diseño con su expertis tecnológica en busqueda de una plataforma que centralice los datos de sus clientes."

const desafioTexto = {
  one: 'Crear una plataforma intuititva que mezclara los datos proporcionados por diferentes APIS de manera amigable. ',
  two: 'Participar en la iteración agil de la plataforma junto con el equipo de JAAK, escuchando las necesidades técnicas.',
  three: 'Proponer secciones que faciliten el soporte al usuario y que permitan el filtro de preguntas entre técnicas y administrativas.',
  four: 'Generar un ecosistema en el que el cliente se sienta acompañado e informado de sus consumos.'
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
  color: 'from-[#606B9D] via-white to-white',
  alt: {
    one: 'Icon created by Launchy Team'
  }
}

// colorPalette Props
const textPalette = 'Trabajamos con la paleta cromática del cliente aportando detalles en elementos tanto de la gráfica indicativa como con los elementos visuales que acompañarian la plataforma. Estamos en constante mejora ahora integrando nuevos datos de las aplicaciones y viendo como se alinean a la marca.'

// Solution Props
const textSolution = 'Reformulamos el dashboard de manera que tuviera un uso mas intuitvo con una plataforma amigable orientada a las necesidades del usuario y mediando con los alcances técnicos del equipo para un resultado que está en constante mejora. Es un proyecto con futura iteración para integración de más funcionalidades.'

// Testimonial Props
const textTestimonial = 'Hemos aprendido muchisimo de la experiencia técnica del equipo de JAAk así como hemos ofrecido una nueva dirección creativa a la hora de manifestar los productos y la planeación de los mismos.'

// Header items
const items = [
  'diseño de banners',
  'mantenimiento de feed',
  'diseño UX',
  'diseño UI',
  'writing',
  'prototipado',
  'iteración',
]

const Jaak = () => {
  return (
      <main className="bg-[#F1F1F1] 2xl:container 2xl:mx-auto">

          {/*********************************       Header       *********************************/}
          <Header items={items} quantity={6}>

              <div className="">
                <Image 
                  src={JaakLogo} 
                  width={212} height={98} 
                  alt={'Mockup de Jaak creado por Launchy'}
                />
              </div>       

          </Header>

          {/**********************************  InfoTarget (Boxes) ********************************/}
          <InfoTarget 
            objetivoTexto={objetivoTexto}
            desafioTexto={desafioTexto}
            imgData={imgData}
          />

          {/***********************************  ColorPalette     *********************************/}
          <ColorPalette
            text={textPalette}
          >
            <div className="grid grid-cols-2 md:flex w-full">
              <div className='bg-[#4239A7] col-span-1 md:w-1/6 h-12 md:h-[140px]'></div>
              <div className='bg-[#212A45] col-span-1 md:w-1/6 h-12 md:h-[140px]'></div>
              <div className='bg-[#3BBBC9] col-span-1 md:w-1/6 h-12 md:h-[140px]'></div>
              <div className="bg-[#5C5BA5] col-span-1 md:w-1/6 h-12 md:h-[140px]"></div>
              <div className="bg-[#655DC6] col-span-1 md:w-1/6 h-12 md:h-[140px]"></div>
              <div className="bg-[#00829B] col-span-1 md:w-1/6 h-12 md:h-[140px]"></div>
            </div>
          </ColorPalette>

          {/***********************************      Solution         *****************************/}
          <ProcessOrSolution 
            title='SOLUCIÓN'
            text={textSolution}  
          />

          {/*********************************** Rest of the pictures ***************************************/}
          <Pictures />
          
          {/***********************************  Testimonial  *******************************/}
          <Testimonial text={textTestimonial} />

          {/***********************************  Footer  ******************************/}
          <Footer />
      </main>
  )
}

export default Jaak