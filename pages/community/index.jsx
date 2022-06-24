import Image from 'next/image';
import InfoTarget from "../../components/pagesAtom/InfoTarget"
import Testimonial from "../../components/pagesAtom/Testimonial";
import ProcessOrSolution from "../../components/pagesAtom/ProcessOrSolution";
import Header from '../../components/pagesAtom/Header'
import Pictures from '../../components/pagesAtom/Community/Pictures';
import Footer from '../../components/Footer'
import CommunityLogo from '../../public/img/community/Logo Community.png'
import iconPic1 from '../../public/img/icons/fluent_web-asset-20-regular.svg'
import iconPic2 from '../../public/img/icons/icon-park-outline_graphic-design.svg'
import iconPic3 from '../../public/img/icons/Ojito.svg'
import iconPic4 from '../../public/img/icons/Check.svg'

const objetivoTexto = "Relevar la documentación de Community Electricity, una empresa que se encarga de transformar, a través de un protocolo de blockchain, la energía en dinero para sus ciudadanos. Creando ecosistemas saludables."

const desafioTexto = {
  one: 'Mediar por la organización de textos documentativos, buscando un site web que pueda mostrar la iniciativa.',
  two: 'Requisitos de elementos predispuestos por el cliente.',
  three: 'Un control gráfico limitado a la guía del cliente hizo que tuvieramos que elaborar muchas propuestas.',
  four: 'Compatibilizar la gráfica con la web para que sea más ilustrativa.'
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
  color: 'from-indigo-500 via-white to-white',
  alt: {
    one: 'Icon created by Launchy Team'
  }
}

//Solution text
const solutionText = 'Decidimos trabajar con bloques debido a la iteración del proyecto y lo variante que ha sido acorde al descubrimiento de uevas aplicaciones así como también nuevas iniciativas a partir de la primera.'

// Testimonial props
const textTestimonial = 'La comunicación fue clave para poder responder a la rápida y constante iteración que va surgiendo en el proyecto. Pero ver el avance de pilotos que estan teniendo en sedes de California como en otros paises nos pone felices ya que constribuimos en la comunicación de mejores prácticas para el cuidado ambiental de la energía.'

// Header items
const items = [
  'diseño UX',
  'diseño UI',
  'prototipado',
  'iteración',
  'ilustraciones',
  'development',
  'frontend',
]

const Community = () => {
  return (
      <main className="bg-[#F1F1F1] 2xl:container 2xl:mx-auto">

          {/*********************************       Header       *********************************/}
          <Header items={items} quantity={6}>

            <div className="">
              <Image 
                src={CommunityLogo} 
                width={315} height={109} 
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
          <ProcessOrSolution title='SOLUCIÓN' text={solutionText}/>

          {/*********************************** Rest of the pictures ***************************************/}
          <Pictures />

          {/***********************************  Testimonial  *******************************/}
          <Testimonial text={textTestimonial} />

          {/***********************************  Footer  ******************************/}
          <Footer blue />
      </main>
  )
}

export default Community