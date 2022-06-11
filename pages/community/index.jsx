import Image from 'next/image';
import InfoTarget from "../../components/pagesAtom/InfoTarget"
import Testimonial from "../../components/pagesAtom/Testimonial";
import ProcessOrSolution from "../../components/pagesAtom/ProcessOrSolution";
import iconPic1 from '../../public/img/fluent_web-asset-20-regular.png'
import SolutionScreen1 from '../../public/img/community/Solution screen 1.png'
import FirstInSecondParagraph from '../../public/img/community/First in second paragraph.png'
import NextInSecondParagraph from '../../public/img/community/Next in second paragraph.png'
import ThirdParagraph from '../../public/img/community/Thrid paragraph.png'
import LastParagraphFirstFrame from '../../public/img/community/Last paragraph first frame.png'
import LastParagraphSecondFrame from '../../public/img/community/Last paragraph second frame.png'


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

const Community = () => {
  return (
      <main className="bg-[#F1F1F1] 2xl:container 2xl:mx-auto">
          <InfoTarget 
            objetivoTexto={objetivoTexto}
            desafioTexto={desafioTexto}
            imgData={imgData}
          />

          {/* Solution */}
          <ProcessOrSolution title='SOLUCIÓN' />

          {/* Starts with pictures */}
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

          <div className='mb-[30px] md:mb-[40px] px-[8%]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at omnis impedit accusantium repudiandae unde, accusamus facere. Dolorum eveniet nisi sapiente, consequatur accusamus libero cumque in ipsam aliquam reprehenderit quas unde perferendis corrupti. Esse quis perferendis accusantium reiciendis magni, fugit nisi illo quo modi perspiciatis assumenda alias voluptatibus! Vero dicta quasi itaque sint, veniam consectetur blanditiis! Exercitationem quaerat quo accusantium pariatur! Commodi reiciendis culpa quod.
          </div>

          <div className="mb-[60px] md:mb-[80px] flex justify-center">
            <Image 
              src={ThirdParagraph}
              width={1440}
              height={574}
              alt={'Mockup de Community creado por Launchy'}
            />
          </div>

          <div className='mb-[30px] md:mb-[40px] px-[8%]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt at omnis impedit accusantium repudiandae unde, accusamus facere. Dolorum eveniet nisi sapiente, consequatur accusamus libero cumque in ipsam aliquam reprehenderit quas unde perferendis corrupti. Esse quis perferendis accusantium reiciendis magni, fugit nisi illo quo modi perspiciatis assumenda alias voluptatibus! Vero dicta quasi itaque sint, veniam consectetur blanditiis! Exercitationem quaerat quo accusantium pariatur! Commodi reiciendis culpa quod.
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

          <Testimonial />
      </main>
  )
}

export default Community