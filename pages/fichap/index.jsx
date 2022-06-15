import Image from 'next/image';
import Testimonial from "../../components/pagesAtom/Testimonial";
import InfoTarget from "../../components/pagesAtom/InfoTarget"
import ProcessOrSolution from "../../components/pagesAtom/ProcessOrSolution";
import Header from '../../components/pagesAtom/Header'
import FadeInElement from '../../components/pagesAtom/FadeInElement'
import FichapLogo from '../../public/img/fichap/Logo Fichap.png'
import iconPic1 from '../../public/img/fluent_web-asset-20-regular.png'
import FirstScreen from '../../public/img/fichap/First Frame.png'
import FirstFrameSecondParagraph from '../../public/img/fichap/First Frame (2).png'
import SecondFrameSecondParagraph from '../../public/img/fichap/Second Frame (2).png'
import FirstFrameThirdParagraph from '../../public/img/fichap/First Frame (3).png'
import FirstFrameFourthParagraph from '../../public/img/fichap/First Frame (4).png'
import SecondFrameFourthParagraph from '../../public/img/fichap/Second Frame (4).png'
import FirstBanner from '../../public/img/fichap/Banner (1).png'
import SecondBanner from '../../public/img/fichap/Banner (2).png'


const objetivoTexto = "Generar un Manual de marca y aplicaciones comerciales que apoyen los objetivos comerciales de la empresa así como solificar juntos la estrategia de marca de Infuy. Para ello brindaremos un Diseño aplicado con propósito y que permita escalar a la marca a largo plazo."

const desafioTexto = {
  one: 'Crear un espacio virtual de concentracion para los living labs de Galicia - España.',
  two: 'Transmitir',
  three: 'Impactar en la cultura interna de INFUY gráficamente a partir de inciativas que sumaran al equipo de People.',
  four: 'Hacer una marca que se use en el día a día.'
} 

const imgData = {
  imgURL: {
    one: iconPic1,
    two: iconPic1,
    three: iconPic1,
    four: iconPic1,
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

const Fichap = () => {
  return (
      <main className="bg-[#F1F1F1] 2xl:container 2xl:mx-auto">

          {/*********************************       Header       *********************************/}
          <Header>

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
          <ProcessOrSolution title='SOLUCIÓN'>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at omnis impedit accusantium repudiandae unde, accusamus facere. Dolorum eveniet nisi sapiente, consequatur accusamus libero cumque in ipsam aliquam reprehenderit quas unde perferendis corrupti. Esse quis perferendis accusantium reiciendis magni, fugit nisi illo quo modi perspiciatis assumenda alias voluptatibus! Vero dicta quasi itaque sint, veniam consectetur blanditiis! Exercitationem quaerat quo accusantium pariatur! Commodi reiciendis culpa quod.
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

          <ProcessOrSolution title='SOLUCIÓN'/>

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
          <Testimonial />
      </main>
  )
}

export default Fichap