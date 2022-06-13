import Image from 'next/image';
import Testimonial from "../../components/pagesAtom/Testimonial";
import InfoTarget from "../../components/pagesAtom/InfoTarget"
import ColorPalette from "../../components/pagesAtom/ColorPalette"
import ProcessOrSolution from "../../components/pagesAtom/ProcessOrSolution";
import Header from '../../components/pagesAtom/Header'
import ITGallLogo from '../../public/img/itgall/Logo ITGall.png'
import Flechitas from '../../public/img/Flechitas.png'
import iconPic1 from '../../public/img/fluent_web-asset-20-regular.png'
import ItgallProcess from "../../public/img/itgall/Proceso.png"
import MobileHome from '../../public/img/itgall/mobile home.png'
import MobileBlank from '../../public/img/itgall/mobile blank space.png'
import MobileContact from '../../public/img/itgall/mobile contact us.png'
import MobileIn4aha from '../../public/img/itgall/mobile in4aha.png'
import MobileParticipation from '../../public/img/itgall/mobile participation.png'
import DesktopFrame from '../../public/img/itgall/Rectangle 39388.png'
import Projects from '../../public/img/itgall/Projects.png'
import Partners from '../../public/img/itgall/Partners.png'
import Map from '../../public/img/itgall/Map.png'

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

const Itgall = () => {
  return (
      <main className="bg-[#F1F1F1] 2xl:container 2xl:mx-auto">

            <Header>

              <Image 
                src={ITGallLogo} 
                width={324} height={103} 
                alt={'Mockup de ITGall creado por Launchy'}
              />

              <div className="flex justify-center mt-14">
                <Image 
                  src={Flechitas} 
                  width={25} height={25} 
                  alt={'Mockup de ITGall creado por Launchy'}
                />
              </div>

            </Header>

          <InfoTarget 
            objetivoTexto={objetivoTexto}
            desafioTexto={desafioTexto}
            imgData={imgData}
          />

          {/* Paleta crómatica */}
          <ColorPalette>
            <div className="grid grid-cols-2 md:flex w-full">
              <div className='bg-[#B75F9F] col-span-2 md:w-1/5 h-16'></div>
              <div className='bg-[#8C1D82] col-span-1 md:w-1/5 h-16'></div>
              <div className="bg-[#63257E] col-span-1 md:w-1/5 h-16"></div>
              <div className="bg-[#37044E] col-span-1 md:w-1/5 h-16"></div>
              <div className="bg-[#FFD000] col-span-1 md:w-1/5 h-16"></div>
            </div>
          </ColorPalette>

          {/* Process */}
          <ProcessOrSolution title='PROCESO'/>

          <div className="flex md:justify-center mb-[60px] md:mb-[80px]">
            <Image 
              src={ItgallProcess} 
              width={903} height={329} 
              alt={'Mockup de Itgall creado por Launchy'}
              className='w-full'
            />
          </div>

          {/* Solution */}
          <ProcessOrSolution title='SOLUCIÓN'>

          <div className="flex flex-col justify-center mb-[60px] md:mb-[80px]">

            <div className="flex first-section justify-center">

              <div className='hidden lg:block'>
                <Image
                  src={MobileBlank}
                  width={283}
                  height={550}
                  alt={'Mockup de Itgall creado por Launchy'}
                />
              </div>

              <Image
                src={MobileBlank}
                width={283}
                height={550}
                alt={'Mockup de Itgall creado por Launchy'}
              />

              <Image
                src={MobileHome}
                width={283}
                height={550}
                alt={'Mockup de Itgall creado por Launchy'}
              />

              <Image
                src={MobileBlank}
                width={283}
                height={550}
                alt={'Mockup de Itgall creado por Launchy'}
              />

              <div className='hidden lg:block'>
                <Image
                  src={MobileBlank}
                  width={283}
                  height={550}
                  alt={'Mockup de Itgall creado por Launchy'}
                />
              </div>

            </div>

            <div className="flex second-section justify-center">
              <Image
                src={MobileParticipation}
                width={283}
                height={550}
                alt={'Mockup de Itgall creado por Launchy'}
              />

              <Image
                src={MobileIn4aha}
                width={283}
                height={550}
                alt={'Mockup de Itgall creado por Launchy'}
              />

              <Image
                src={MobileContact}
                width={283}
                height={550}
                alt={'Mockup de Itgall creado por Launchy'}
              />
            </div>

          </div>

          </ProcessOrSolution>

          <div className="flex mb-[60px] md:mb-[80px] relative h-[250px] sm:h-[350px] lg:h-[600px]">

            <div className="w-7/12 bg-[#D9D9D9]"></div>

            <div className="w-5/12"></div>

            <div className="h-[195px] w-[315px] absolute right-[3%] top-[12%] sm:h-[295px] sm:w-[450px] sm:right-[20%] lg:h-[564px] lg:w-[800px] lg:top-[10%] xl:w-[936px] xl:top-[8%]">
              <Image 
                src={DesktopFrame}
                width={936}
                height={564}
                alt={'Mockup de Itgall creado por Launchy'}
              />
            </div>

          </div>

          <div className="flex flex-col md:flex-row md:justify-center gap-4 mb-[30px] md:mb-[40px] px-[8%]">

            <div className='border p-4 pb-0'>
              <Image 
                src={Projects} 
                width={349} height={488} 
                alt={'Mockup de Itgall creado por Launchy'}
              />
            </div>   

            <div className="border p-4 pr-0">
              <Image 
                src={Partners} 
                width={670} height={506} 
                alt={'Mockup de Itgall creado por Launchy'}
              />
            </div>         

          </div>

          <div className="mb-[60px] md:mb-[80px] px-[8%]">

            <div className="border p-4 pb-0">
              <Image 
                src={Map} 
                width={1139} height={521} 
                alt={'Mockup de Itgall creado por Launchy'}
              />
            </div>

          </div>

          <Testimonial />
      </main>
  )
}

export default Itgall