import Image from 'next/image';
import Testimonial from "../../components/pagesAtom/Testimonial";
import InfoTarget from "../../components/pagesAtom/InfoTarget"
import ColorPalette from "../../components/pagesAtom/ColorPalette"
import ProcessOrSolution from "../../components/pagesAtom/ProcessOrSolution";
import Header from '../../components/pagesAtom/Header'
import FadeInElement from '../../components/pagesAtom/FadeInElement'
import Footer from '../../components/Footer'
import JaakLogo from '../../public/img/jaak/Logo JAAK.png'
import iconPic1 from '../../public/img/icons/fluent_web-asset-20-regular.svg'
import iconPic2 from '../../public/img/icons/Check.svg'
import iconPic3 from '../../public/img/icons/Profile.svg'
import iconPic4 from '../../public/img/icons/carbon_growth.svg'
import JaakHome from '../../public/img/jaak/jaak home.png'
import JaakStatistics1 from '../../public/img/jaak/JaakStatistics1.png'
import JaakStatistics2 from '../../public/img/jaak/JaakStatistics2.png'
import Wallet1 from '../../public/img/jaak/Wallet1.png'
import Wallet2 from '../../public/img/jaak/Wallet2.png'
import Wallet3 from '../../public/img/jaak/Wallet3.png'
import Wallet4 from '../../public/img/jaak/Wallet4.png'
import Wallet5 from '../../public/img/jaak/Wallet5.png'
import Wallet6 from '../../public/img/jaak/Wallet6.png'
import Wallet7 from '../../public/img/jaak/Wallet7.png'
import DesktopWhite1 from '../../public/img/jaak/Desktop-white (2) 2.png'
import DesktopWhite2 from '../../public/img/jaak/Screen.png'

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

const Jaak = () => {
  return (
      <main className="bg-[#F1F1F1] 2xl:container 2xl:mx-auto">

          {/*********************************       Header       *********************************/}
          <Header>

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
          <FadeInElement>
            <div className="flex md:justify-center mb-[30px] md:mb-[40px] bg-[#606B9D] py-6">
              <Image 
                src={JaakHome} 
                width={822} height={510} 
                alt={'Mockup de Jaak creado por Launchy'}
                className='w-full'
              />
            </div>
          </FadeInElement>
          
          <FadeInElement>
            <div className="flex flex-col items-center lg:flex-row lg:justify-center mb-[30px] md:mb-[40px] px-[8%] sm:gap-4">

              <div className="w-[320px] sm:w-[555px] h-[267px] flex items-end lg:items-center">
                <Image 
                  src={JaakStatistics1} 
                  width={555} height={267} 
                  alt={'Mockup de Jaak creado por Launchy'}
                />
              </div>

              <div className="w-[320px] sm:w-[555px] h-[267px] flex items-center">
                <Image 
                  src={JaakStatistics2} 
                  width={555} height={267} 
                  alt={'Mockup de Jaak creado por Launchy'}
                />
              </div>

            </div>
          </FadeInElement>
          
          <FadeInElement>
            <div className="flex flex-col px-[8%] mb-[60px] md:mb-[80px]">

              <div className="flex w-full gap-4 py-[1.5rem]">

                <div className="w-[244px] lg:h-[251px]">
                  <Image 
                    src={Wallet1} 
                    width={244} height={251} 
                    alt={'Mockup de Jaak creado por Launchy'}
                    className='w-full'
                  />
                </div>

                <div className="w-[446px] lg:h-[251px]">
                  <Image 
                    src={Wallet2} 
                    width={446} height={251} 
                    alt={'Mockup de Jaak creado por Launchy'}
                    className='w-full'
                  />
                </div>

                <div className="w-[446px] lg:h-[251px]">
                  <Image 
                    src={Wallet3} 
                    width={446} height={251} 
                    alt={'Mockup de Jaak creado por Launchy'}
                    className='w-full'
                  />
                </div>

                <div className="w-[244px] lg:h-[251px]">
                  <Image 
                    src={Wallet4} 
                    width={244} height={251} 
                    alt={'Mockup de Jaak creado por Launchy'}
                    className='w-full'
                  />
                </div>

              </div>

              <div className="flex w-full gap-4 py-[1.5rem]">
  
                <div className="w-[446px] lg:h-[251px]">
                  <Image 
                    src={Wallet5} 
                    width={446} height={251} 
                    alt={'Mockup de Jaak creado por Launchy'}
                    className='w-full'
                  />
                </div>

                <div className="w-[446px] lg:h-[251px]">
                  <Image 
                    src={Wallet6} 
                    width={446} height={251} 
                    alt={'Mockup de Jaak creado por Launchy'}
                    className='w-full'
                  />
                </div>

                <div className="w-[446px] lg:h-[251px]">
                  <Image 
                    src={Wallet7} 
                    width={446} height={251} 
                    alt={'Mockup de Jaak creado por Launchy'}
                    className='w-full'
                  />
                </div>

              </div>

            </div>
          </FadeInElement>
          
          <FadeInElement>
            <div className="flex justify-center mb-[60px] md:mb-[80px] relative h-[250px] sm:h-[400px] lg:h-[450px]">

              <div className="w-1/2 md:w-2/3 lg:w-7/12 xl:w-1/2 bg-[#D9D9D9]"></div>

              <div className="w-1/2 md:w-1/3 lg:w-5/12 xl:w-1/2"></div>

              <div className="right-[15%] lg:right-[24%] xl:right-[35%] top-[6%] z-10 absolute w-[300px] h-[220px] sm:w-[500px] sm:h-[300px] md:w-[547px] md:h-[339px]">
                <Image 
                  src={DesktopWhite1}  
                  width={547} 
                  height={339}  
                  alt={'Mockup de Itgall creado por Launchy'}
                />
              </div>

              <div className="right-[5%] lg:right-[10%] xl:right-[25%] top-[38%] z-20 absolute w-[280px] h-[180px] sm:w-[460px] sm:h-[241px] lg:w-[507px]">
                <Image 
                  src={DesktopWhite2}
                  width={507}
                  height={241}
                  alt={'Mockup de Itgall creado por Launchy'}
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

export default Jaak