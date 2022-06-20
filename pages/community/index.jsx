import Image from 'next/image';
import InfoTarget from "../../components/pagesAtom/InfoTarget"
import Testimonial from "../../components/pagesAtom/Testimonial";
import ProcessOrSolution from "../../components/pagesAtom/ProcessOrSolution";
import Header from '../../components/pagesAtom/Header'
import FadeInElement from '../../components/pagesAtom/FadeInElement'
import Footer from '../../components/Footer'
import CommunityLogo from '../../public/img/community/Logo Community.png'
import iconPic1 from '../../public/img/icons/fluent_web-asset-20-regular.svg'
import iconPic2 from '../../public/img/icons/icon-park-outline_graphic-design.svg'
import iconPic3 from '../../public/img/icons/Ojito.svg'
import iconPic4 from '../../public/img/icons/Check.svg'
import SolutionScreen1 from '../../public/img/community/Solution screen 1.png'
import FirstInSecondParagraph from '../../public/img/community/First in second paragraph.png'
import NextInSecondParagraph from '../../public/img/community/Next in second paragraph.png'
import ThirdParagraph from '../../public/img/community/Thrid paragraph.png'
import LastParagraphFirstFrame from '../../public/img/community/Last paragraph first frame.png'
import LastParagraphSecondFrame from '../../public/img/community/Last paragraph second frame.png'


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

const Community = () => {
  return (
      <main className="bg-[#F1F1F1] 2xl:container 2xl:mx-auto">

          {/*********************************       Header       *********************************/}
          <Header>

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
          <FadeInElement>
            <div className="grid place-content-center mb-[30px] md:mb-[40px]">

            <div className="grid place-content-center h-[190px] w-[310px] sm:w-[500px] h-[300px] md:w-[650px] md:h-[400px] lg:w-[902px] lg:h-[554px]">
              <Image 
                src={SolutionScreen1}
                width={902}
                height={554}
                alt={'Mockup de Community creado por Launchy'}
              /> 
            </div>
            
            </div>
          </FadeInElement>

          <FadeInElement>
            <div className="flex relative h-[340px] sm:h-[440px] lg:h-[610px] mb-[60px] md:mb-[80px]">

              <div className="w-5/12"></div>

              <div className="w-7/12 bg-[#D9D9D9]"></div>

              <div className="right-[28%] sm:right-[35%] top-[6%] xl:right-[39%] 2xl:right-[47%] z-10 absolute w-[310px] sm:w-[400px] lg:w-[588px] lg:h-[355px]">
              <Image 
                src={FirstInSecondParagraph}
                width={588}
                height={355}
                alt={'Mockup de Community creado por Launchy'}
              />
              </div>

              <div className="right-[2%] sm:right-[12%] top-[36%] xl:right-[15%] 2xl:right-[27%] z-20 absolute w-[310px] sm:w-[400px] lg:w-[588px] lg:h-[355px]">
              <Image 
                src={NextInSecondParagraph}
                width={588}
                height={355}
                alt={'Mockup de Community creado por Launchy'}
              />
              </div>

            </div>
          </FadeInElement>

          <FadeInElement>
            <div className='mb-[30px] md:mb-[40px] px-[8%]'>
            Trabajamos con los elementos que el cliente decidió y tratando de ofrecer una guía en la distribución de información, logrando reducirla a un 60% de la original que iba a ser publicada.
            </div>

            <div className="mb-[60px] md:mb-[80px] flex justify-center">
            <Image 
              src={ThirdParagraph}
              width={1440}
              height={574}
              alt={'Mockup de Community creado por Launchy'}
            />
            </div>
          </FadeInElement>

          <FadeInElement>
            <div className='mb-[30px] md:mb-[40px] px-[8%]'>
            Trabajamos en conjunto con el equipo técnico para ir solucionando las necesidades que fue presentando el proyecto conforme va avanzando en cuanto a la construcción de la documentación así como los pilotos técnicos.
            </div>

            <div className="mb-[60px] lg:mb-[80px] flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 px-[8%] lg:px-[4%]">

            <div className="rounded-lg shadow-xl w-full lg:w-1/2 flex justify-center pt-8 border">
              <Image 
                src={LastParagraphFirstFrame}
                width={355}
                height={536}
                alt={'Mockup de Community creado por Launchy'}
              />
            </div>
            
            <div className="rounded-lg shadow-xl w-full lg:w-1/2 border flex items-center">
              <Image 
                src={LastParagraphSecondFrame}
                width={635}
                height={436}
                alt={'Mockup de Community creado por Launchy'}
              />
            </div>

            </div>
          </FadeInElement>

          {/***********************************  Testimonial  *******************************/}
          <Testimonial text={textTestimonial} />

          {/***********************************  Footer  ******************************/}
          <Footer />
      </main>
  )
}

export default Community