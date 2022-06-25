import Image from 'next/image';
import InfoTarget from "../../components/pagesAtom/InfoTarget"
import ColorPalette from "../../components/pagesAtom/ColorPalette"
import FontBoxes from "../../components/pagesAtom/FontBoxes"
import Testimonial from "../../components/pagesAtom/Testimonial";
import Header from '../../components/pagesAtom/Header'
import Gallery from '../../components/pagesAtom/Infuy/Gallery';
import Pictures from '../../components/pagesAtom/Infuy/Pictures';
import Logos from '../../components/pagesAtom/Infuy/Logos'
import FadeInElement from '../../components/pagesAtom/FadeInElement'
import Footer from '../../components/Footer'
import FAQ from '../../components/pagesAtom/FAQ'
import InfuyLogo from '../../public/img/infuy/Logo Infuy.png'
import iconPic1 from '../../public/img/icons/fluent_web-asset-20-regular.svg'
import iconPic2 from '../../public/img/icons/carbon_growth.svg'
import iconPic3 from '../../public/img/icons/icon-park-outline_graphic-design.svg'
import iconPic4 from '../../public/img/icons/fluent_calendar-today-28-regular.svg'
import InfuyPaletaGIF from '../../public/img/infuy/Paleta cromatica.gif'
import InfuyAnotherGIF from '../../public/img/infuy/Logo- Colores_1.gif'

// InfoTarget props
const objetivoTexto = "Generar un Manual de marca y aplicaciones comerciales que apoyen los objetivos comerciales de la empresa así como solificar juntos la estrategia de marca de Infuy. Para ello brindaremos un Diseño aplicado con propósito y que permita escalar a la marca a largo plazo."

const desafioTexto = {
  one: 'Crear una identidad grafica sólida y consistente  que muestre a INFUY como lider y pionera en desarrollo blockchain.',
  two: 'Generar presentaciones para el área de  GROWTH hablandole gráficamente a dos mercados distintos: empresas sólidas y startups.',
  three: 'Impactar en la cultura interna de INFUY gráficamente a partir de inciativas que sumaran al equipo de People.',
  four: 'Hacer una marca que se use en el día a día.'
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
  color: 'from-indigo-400 via-white to-white',
  alt: {
    one: 'Icon created by Launchy Team'
  }
}

// ColorPalette Props
const textPalette = 'Partiamos de una marca con una necesidad clara de diferenciación pero con ya con colores prestablecidos que necesitaban perdurar para no perder el posicionamiento que han ganado. Planteamos gradientes sutiles para dar dinamismo a los elementos, así como dar un PROPÓSITO  a los mismos: una cara corporativa y otra disrruptiva, apuntada a dos públicos objetivos de Infuy.'

// Testimonial props
const textTestimonial = 'Crear e implementar un roadmap de diseño que resuelva las prioridades de cada area. Establecimos un manual de marca, realizamos presentaciones institucionales, casos de estudio a través de infografías, diseño de feed de la marca, generando así un sistema de identidad marcaria completo y accesible para los clientes.'

//Header items
const items = [
  'diseño de manual de marca',
  'banners',
  'feed',
  'presentaciones',
  'aplicaciones de marca',
  'infografías',
  'editables',
]

const Infuy = () => {
  return (
      <main className="bg-[#F1F1F1] 2xl:container 2xl:mx-auto">

          {/*********************************       Header       *********************************/}
          <Header quantity={6} items={items}>
              <Image 
                src={InfuyLogo} 
                width={220} height={111} 
                alt={'Mockup de Infuy creado por Launchy'}
              />
          </Header>

          {/**********************************  InfoTarget (Boxes) ********************************/}
          <InfoTarget 
            objetivoTexto={objetivoTexto}
            desafioTexto={desafioTexto}
            imgData={imgData}
          />

          {/***********************************  ColorPalette     *********************************/}
          <ColorPalette title='COLORES Y APLICACIÓN' text={textPalette}>
            <Image 
              src={InfuyPaletaGIF} 
              width={1439} height={140} 
              alt={'Mockup de Infuy creado por Launchy'}
              className='w-full'
            />
            
            <div className="grid grid-cols-2 md:flex w-full">
              <div className='bg-[#F5C814] col-span-1 md:w-1/4 h-12 md:h-[140px]'></div>
              <div className="bg-[#05172F] col-span-1 md:w-1/4 h-12 md:h-[140px]"></div>
              <div className="bg-[#f30b19] col-span-1 md:w-1/4 h-12 md:h-[140px]"></div>
              <div className="bg-[#f97316] col-span-1 md:w-1/4 h-12 md:h-[140px]"></div>
            </div>
          </ColorPalette>

          <FadeInElement>
            <FontBoxes
              title='Monserrat' 
              text='ABCDEFGHIJKLMNÑOPQRSTUVWXYZ
              abcdefghijklmnñopqrstuvwxyz
              1234567890'  
            />
            <hr />
            <FontBoxes 
              title='Red Hat Display' 
              text='ABCDEFGHIJKLMNÑOPQRSTUVWXYZ
              abcdefghijklmnñopqrstuvwxyz
              1234567890' 
            />
          </FadeInElement>

          <FadeInElement>
            <Logos />
            <Gallery />
          </FadeInElement>

          {/*********************************** Rest of the pictures ***************************************/}
          <Pictures />

          {/***********************************  Testimonial  *******************************/}
          <Testimonial title='SOLUCION' text={textTestimonial} />

          {/***********************************  Footer  ******************************/}
          <Footer blue />

      </main>
  )
}

export default Infuy