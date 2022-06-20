import Image from 'next/image';
import InfoTarget from "../../components/pagesAtom/InfoTarget"
import Testimonial from "../../components/pagesAtom/Testimonial";
import ProcessOrSolution from "../../components/pagesAtom/ProcessOrSolution";
import Header from '../../components/pagesAtom/Header'
import FadeInElement from '../../components/pagesAtom/FadeInElement'
import LigaMXLogo from '../../public/img/ligaMX/Logo Liga MX.png'
import iconPic1 from '../../public/img/icons/fluent_web-asset-20-regular.svg'
import iconPic2 from '../../public/img/icons/Profile.svg'
import iconPic3 from '../../public/img/icons/Check.svg'
import iconPic4 from '../../public/img/icons/Ojito.svg'
import FirstFrame from '../../public/img/ligaMX/First Frame.png'
import FirstFrameSecondParagraph from '../../public/img/ligaMX/First Frame Second Paragraph.png'
import WhiteScreenThirdParagraph from '../../public/img/ligaMX/White Screen Thrid Paragraph.png'
import MainScreenThirdParagraph from '../../public/img/ligaMX/Main Screen Third Paragraph.png'
import ThirdParagraph1 from '../../public/img/ligaMX/Second In Third Paragraph (1).png'
import ThirdParagraph2 from '../../public/img/ligaMX/Second In Third Paragraph (2).png'
import ThirdParagraph3 from '../../public/img/ligaMX/Second In Third Paragraph (3).png'
import ThirdParagraph4 from '../../public/img/ligaMX/Second In Third Paragraph (4).png'
import ThirdParagraph5 from '../../public/img/ligaMX/Second In Third Paragraph (5).png'
import FirstFrameFourthParagraph from '../../public/img/ligaMX/First Frame in Fourth Paragraph.png'
import SecondFrameFourthParagraph1 from '../../public/img/ligaMX/Second Frame in Fourth Paragraph (1).png'
import SecondFrameFourthParagraph2 from '../../public/img/ligaMX/Second Frame in Fourth Paragraph (2).png'
import SecondFrameFourthParagraph3 from '../../public/img/ligaMX/Second Frame in Fourth Paragraph (3).png'
import TransparentScreen1 from '../../public/img/ligaMX/Second Part in Fourth Paragraph (1).png'
import TransparentScreen2 from '../../public/img/ligaMX/Second Part in Fourth Paragraph (2).png'
import TransparentScreen3 from '../../public/img/ligaMX/Second Part in Fourth Paragraph (3).png'
import TransparentScreen4 from '../../public/img/ligaMX/Second Part in Fourth Paragraph (4).png'
import TransparentScreenMain from '../../public/img/ligaMX/Second Part in Fourth Paragraph - MAIN.png'
import LastFrame from '../../public/img/ligaMX/Last Frame.png'

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
  alt: {
    one: 'Icon created by Launchy Team'
  }
}

// Testimonial props
const textTestimonial = 'Poder crear junto con un equipo técnico para que el reconocimiento facial pueda llegar a las personas a partir de procedimientos sencillos mejorando la experiencia con el usuario.'

const LigaMX = () => {
  return (
      <main className="bg-[#F1F1F1] 2xl:container 2xl:mx-auto">

          {/*********************************       Header       *********************************/}
          <Header>
            
            <div className="mb-10">
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
            <div className="flex flex-col lg:flex-row lg:gap-4 xl:gap-0 mb-[60px] lg:mb-[80px]">

              <div className="lg:w-1/2 flex justify-center mb-[30px] lg:mb-0">

                <Image 
                  src={FirstFrame} 
                  width={473} 
                  height={269} 
                  alt={'Mockup de LigaMX creado por Launchy'}
                />

              </div>
              
              <div className="lg:w-1/2 flex">
              Ya que la aplicación aun esta en revisiones queremos compartirles una visualización de los flujos generales para que puedan ver parte de la inciativa y cómo integramos nuestra expertis de diseño a impactar en la vida de las personas.
              </div>

            </div>
          </ProcessOrSolution>

          {/*********************************** Rest of the pictures ***************************************/}
          <FadeInElement>
            <h2 className='mb-[30px] md:mb-[40px] border border-black p-2 pl-6 mx-[8%]'>OPERARIO</h2>

            <div className="flex justify-center mb-[60px] md:mb-[80px] bg-[#6BA736]">

              <Image 
                src={FirstFrameSecondParagraph} 
                width={1029} 
                height={509} 
                alt={'Mockup de LigaMX creado por Launchy'}
              />

            </div>
          </FadeInElement>
          
          <FadeInElement>
            <div className="flex flex-col justify-center mb-[60px] md:mb-[80px]">

              <div className="flex first-section justify-center">

                <div className="hidden lg:block">
                  <Image
                    src={WhiteScreenThirdParagraph}
                    width={283}
                    height={550}
                    alt={'Mockup de LigaMX creado por Launchy'}
                  />
                </div>

                <Image
                  src={WhiteScreenThirdParagraph}
                  width={283}
                  height={550}
                  alt={'Mockup de LigaMX creado por Launchy'}
                />

                <Image
                  src={MainScreenThirdParagraph}
                  width={283}
                  height={550}
                  alt={'Mockup de LigaMX creado por Launchy'}
                />

                <Image
                  src={WhiteScreenThirdParagraph}
                  width={283}
                  height={550}
                  alt={'Mockup de LigaMX creado por Launchy'}
                />

                <div className='hidden lg:block'>
                  <Image
                    src={WhiteScreenThirdParagraph}
                    width={283}
                    height={550}
                    alt={'Mockup de LigaMX creado por Launchy'}
                  />
                </div>

              </div>

              <div className="flex second-section justify-center">
                <Image
                  src={ThirdParagraph1}
                  width={283}
                  height={550}
                  alt={'Mockup de LigaMX creado por Launchy'}
                />

                <Image
                  src={ThirdParagraph2}
                  width={283}
                  height={550}
                  alt={'Mockup de LigaMX creado por Launchy'}
                />

                <Image
                  src={ThirdParagraph3}
                  width={283}
                  height={550}
                  alt={'Mockup de LigaMX creado por Launchy'}
                />

                <Image
                  src={ThirdParagraph4}
                  width={283}
                  height={550}
                  alt={'Mockup de LigaMX creado por Launchy'}
                />

                <Image
                  src={ThirdParagraph5}
                  width={283}
                  height={550}
                  alt={'Mockup de LigaMX creado por Launchy'}
                />
              </div>

            </div>
          </FadeInElement>
          
          <FadeInElement>
            <h2 className='mb-[30px] md:mb-[40px] border border-black p-2 pl-6 mx-[8%]'>CLIENTE</h2>

            <div className="flex flex-col lg:flex-row px-[8%] gap-4 mb-[30px] md:mb-[40px]">

              <div className="border flex justify-center shadow-xl lg:w-1/2">

              <Image 
                src={FirstFrameFourthParagraph} 
                width={355} 
                height={536} 
                alt={'Mockup de LigaMX creado por Launchy'}
              />

              </div>

              <div className="border flex justify-center items-center shadow-xl relative h-[410px] lg:h-auto lg:w-1/2">

                <div className="absolute right-[15%] top-[14%] sm:top-[20%] md:right-[29%] lg:right-[19%] xl:right-[25%]">
                <Image 
                  src={SecondFrameFourthParagraph3} 
                  width={402} 
                  height={297} 
                  alt={'Mockup de LigaMX creado por Launchy'}
                />
                </div>
              
              <div className="absolute right-[4%] sm:right-[16%] md:right-[29%] lg:right-[19%] xl:right-[25%]">
                <Image 
                  src={SecondFrameFourthParagraph2} 
                  width={336} 
                  height={325} 
                  alt={'Mockup de LigaMX creado por Launchy'}
                />
              </div>

              <div className="absolute right-[5%] sm:right-[15%] md:right-[28%] lg:right-[18%] xl:right-[24%]">
                <Image 
                  src={SecondFrameFourthParagraph1} 
                  width={251} 
                  height={393} 
                  alt={'Mockup de LigaMX creado por Launchy'}
                />
              </div>

              </div>

            </div>
          </FadeInElement>

          <FadeInElement>
            <div className="flex mb-[60px] md:mb-[80px] justify-center">

              <Image
                src={TransparentScreen1}
                width={287}
                height={556}
                alt={'Mockup de LigaMX creado por Launchy'}
               />

              <Image
                src={TransparentScreen2}
                width={287}
                height={556}
                alt={'Mockup de LigaMX creado por Launchy'}
              />

              <Image
                src={TransparentScreenMain}
                width={287}
                height={556}
                alt={'Mockup de LigaMX creado por Launchy'}
              />

              <Image
                src={TransparentScreen3}
                width={287}
                height={556}
                alt={'Mockup de LigaMX creado por Launchy'}
              />

              <Image
                src={TransparentScreen4}
                width={287}
                height={556}
                alt={'Mockup de LigaMX creado por Launchy'}
              />

            </div>
          </FadeInElement>

          <FadeInElement>
            <div className="flex justify-center mb-[60px] md:mb-[80px] bg-[#060729]">

              <Image 
                src={LastFrame} 
                width={1440} 
                height={509} 
                alt={'Mockup de LigaMX creado por Launchy'}
              />

            </div>
          </FadeInElement>

          {/***********************************  Testimonial  *******************************/}
          <Testimonial text={textTestimonial} />
      </main>
  )
}

export default LigaMX