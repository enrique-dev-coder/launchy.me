import Image from 'next/image';
import InfoTarget from "../../components/pagesAtom/InfoTarget"
import Testimonial from "../../components/pagesAtom/Testimonial";
import ProcessOrSolution from "../../components/pagesAtom/ProcessOrSolution";
import Header from '../../components/pagesAtom/Header'
import LigaMXLogo from '../../public/img/ligaMX/Logo Liga MX.png'
import Flechitas from '../../public/img/Flechitas.png'
import iconPic1 from '../../public/img/fluent_web-asset-20-regular.png'
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

const LigaMX = () => {
  return (
      <main className="bg-[#F1F1F1] 2xl:container 2xl:mx-auto">

          <Header>

            <Image 
              src={LigaMXLogo} 
              width={283} height={51} 
              alt={'Mockup de LigaMX creado por Launchy'}
            />

            <div className="flex justify-center mt-14">
              <Image 
                src={Flechitas} 
                width={25} height={25} 
                alt={'Mockup de LigaMX creado por Launchy'}
              />
            </div>

          </Header>

          <InfoTarget 
            objetivoTexto={objetivoTexto}
            desafioTexto={desafioTexto}
            imgData={imgData}
          />

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
              
              <div className="lg:w-1/2 flex items-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, iusto quia fuga quos libero dolor eaque explicabo sed quasi sint, velit, reiciendis delectus? Reiciendis nemo deserunt enim corporis, cum voluptatem doloremque maiores? Inventore, quaerat dolore. Possimus magnam, adipisci accusamus laborum debitis id aut fugiat non deleniti veritatis eveniet, hic expedita temporibus nemo aspernatur consectetur reprehenderit esse, consequuntur asperiores. Quas temporibus libero, maiores sapiente esse asperiores.
              </div>

            </div>
          </ProcessOrSolution>

          <h2 className='mb-[30px] md:mb-[40px] border border-black p-2 pl-6 mx-[8%]'>OPERARIO</h2>

          <div className="flex justify-center mb-[60px] md:mb-[80px] bg-[#6BA736]">

            <Image 
              src={FirstFrameSecondParagraph} 
              width={1029} 
              height={509} 
              alt={'Mockup de LigaMX creado por Launchy'}
            />

          </div>

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

          <div className="flex justify-center mb-[60px] md:mb-[80px] bg-[#060729]">

            <Image 
              src={LastFrame} 
              width={1440} 
              height={509} 
              alt={'Mockup de LigaMX creado por Launchy'}
            />

          </div>

          <Testimonial />
      </main>
  )
}

export default LigaMX