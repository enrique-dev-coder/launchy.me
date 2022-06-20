import Image from 'next/image';
import InfoTarget from '../../components/pagesAtom/InfoTarget';
import ColorPalette from '../../components/pagesAtom/ColorPalette';
import FontBoxes from '../../components/pagesAtom/FontBoxes';
import Testimonial from '../../components/pagesAtom/Testimonial';
import Header from '../../components/pagesAtom/Header';
import FadeInElement from '../../components/pagesAtom/FadeInElement';
import FAQ from '../../components/pagesAtom/FAQ';
import InfuyLogo from '../../public/img/infuy/Logo Infuy.png';
import iconPic1 from '../../public/img/icons/fluent_web-asset-20-regular.svg';
import iconPic2 from '../../public/img/icons/carbon_growth.svg';
import iconPic3 from '../../public/img/icons/icon-park-outline_graphic-design.svg';
import iconPic4 from '../../public/img/icons/fluent_calendar-today-28-regular.svg';
import InfuyLogo1 from '../../public/img/infuy/Construccion logo.png';
import InfuyLogo2 from '../../public/img/infuy/Variantes de color logo.png';
import InfuyMocukp from '../../public/img/infuy/Mockup.png';
import InfuyPic1 from '../../public/img/infuy/60 1.png';
import InfuyPic2 from '../../public/img/infuy/60 2.png';
import InfuyPic3 from '../../public/img/infuy/60 5.png';
import InfuyPic4 from '../../public/img/infuy/60 6.png';
import InfuyPic5 from '../../public/img/infuy/60 7.png';
import InfuyPic6 from '../../public/img/infuy/60 8.png';
import InfuyPic7 from '../../public/img/infuy/60 9.png';
import InfuyPic8 from '../../public/img/infuy/60 10.png';
import InfuyPic9 from '../../public/img/infuy/60 11.png';
import InfuyPic10 from '../../public/img/infuy/60 12.png';
import InfuyPic11 from '../../public/img/infuy/60 13.png';
import InfuyPic12 from '../../public/img/infuy/60 14.png';
import InfuyOnePage from '../../public/img/infuy/ONE PAGE - CASOS DE EXITO 3 1.png';
import InfuyOtherPic1 from '../../public/img/infuy/iOS IG Grid Mock 1.png';
import InfuyOtherPic2 from '../../public/img/infuy/Group 4 8095914.png';
import InfuyOtherPic3 from '../../public/img/infuy/Portadas.png';
import InfuyPaletaGIF from '../../public/img/infuy/Paleta cromatica.gif';
import InfuyAnotherGIF from '../../public/img/infuy/Logo- Colores_1.gif';
import Footer from '../../components/Footer';
// InfoTarget props
const objetivoTexto =
  'Generar un Manual de marca y aplicaciones comerciales que apoyen los objetivos comerciales de la empresa así como solificar juntos la estrategia de marca de Infuy. Para ello brindaremos un Diseño aplicado con propósito y que permita escalar a la marca a largo plazo.';

const desafioTexto = {
  one: 'Crear una identidad grafica sólida y consistente  que muestre a INFUY como lider y pionera en desarrollo blockchain.',
  two: 'Generar presentaciones para el área de  GROWTH hablandole gráficamente a dos mercados distintos: empresas sólidas y startups.',
  three:
    'Impactar en la cultura interna de INFUY gráficamente a partir de inciativas que sumaran al equipo de People.',
  four: 'Hacer una marca que se use en el día a día.',
};

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
    four: 32,
  },
  width: {
    one: 32,
    two: 32,
    three: 32,
    four: 32,
  },
  alt: {
    one: 'Icon created by Launchy Team',
  },
};

// ColorPalette Props
const textPalette =
  'Partiamos de una marca con una necesidad clara de diferenciación pero con ya con colores prestablecidos que necesitaban perdurar para no perder el posicionamiento que han ganado. Planteamos gradientes sutiles para dar dinamismo a los elementos, así como dar un PROPÓSITO  a los mismos: una cara corporativa y otra disrruptiva, apuntada a dos públicos objetivos de Infuy.';

// Testimonial props
const textTestimonial =
  'Crear e implementarun roadmap de diseño que resuelva las prioridades de cada area. Establecimos un manual de marca, realizamos presentaciones institucionales, casos de estudio a través de infografías, diseño de feed de la marca, generando así un sistema de identidad marcaria completo y accesible para los clientes.';

const Infuy = () => {
  return (
    <main className="bg-[#F1F1F1] 2xl:container 2xl:mx-auto">
      {/*********************************       Header       *********************************/}
      <Header>
        <div className="">
          <Image
            src={InfuyLogo}
            width={220}
            height={111}
            alt={'Mockup de Infuy creado por Launchy'}
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
      <ColorPalette title="COLORES Y APLICACIÓN" text={textPalette}>
        <Image
          src={InfuyPaletaGIF}
          width={1439}
          height={140}
          alt={'Mockup de Infuy creado por Launchy'}
          className="w-full"
        />
        <div className="grid grid-cols-2 md:flex w-full">
          <div className="bg-[#F5C814] col-span-1 md:w-1/4 h-16"></div>
          <div className="bg-[#05172F] col-span-1 md:w-1/4 h-16"></div>
          <div className="bg-[#f30b19] col-span-1 md:w-1/4 h-16"></div>
          <div className="bg-[#f97316] col-span-1 md:w-1/4 h-16"></div>
        </div>
      </ColorPalette>

      {/***********************************  Font Boxes (Slider) *******************************/}
      <FadeInElement>
        {/* Fuentes  */}
        <FontBoxes
          title="Monserrat"
          text="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ
              abcdefghijklmnñopqrstuvwxyz
              1234567890"
        />
        <hr />
        <FontBoxes
          title="Red Hat Display"
          text="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ
              abcdefghijklmnñopqrstuvwxyz
              1234567890"
        />
      </FadeInElement>

      {/***********************************   Logo and gallery *****************************************/}
      <FadeInElement>
        <div className="px-[8%]">
          <h2 className="mb-[30px] md:mb-[40px] border border-black p-2 pl-6">
            OBJETIVO
          </h2>

          {/* Two Infuy logo pics */}
          <div className="flex flex-col gap-6 w-full items-center lg:flex-row px-[8%] mb-[60px] md:mb-[80px]">
            <div className="w-[300px] h-[160px] md:w-[437px] md:h-[227px] mb-4 lg:mb-0">
              <Image
                src={InfuyLogo1}
                width={437}
                height={227}
                alt={'Logotipo de Infuy creado por Launchy'}
              />
            </div>

            <div className="w-[300px] h-[160px] md:w-[437px] md:h-[227px] mb-4 lg:mb-0">
              <Image
                src={InfuyLogo2}
                width={437}
                height={227}
                alt={'Logotipo de Infuy creado por Launchy'}
              />
            </div>
          </div>
        </div>

        {/* Gallery (Grid) */}
        <div className="flex flex-col mb-[60px] md:mb-[80px] lg:flex-row gap-4">
          <div className="mb-[30px] flex justify-center md:mb-[60px] lg:mb-0 lg:w-1/3">
            <Image
              src={InfuyMocukp}
              width={576}
              height={463}
              alt={'Mockup de Infuy creado por Launchy'}
              className="w-full"
            />
          </div>

          <div className="grid grid-cols-2 gap-8 md:place-items-center px-[8%] lg:w-2/3 lg:px-0 lg:grid-cols-4 lg:gap-2">
            <Image
              src={InfuyPic1}
              width={250}
              height={145}
              alt={'Mockup de Infuy creado por Launchy'}
              className="col-span-1"
            />

            <Image
              src={InfuyPic2}
              width={250}
              height={145}
              alt={'Mockup de Infuy creado por Launchy'}
              className="col-span-1"
            />

            <Image
              src={InfuyPic5}
              width={250}
              height={145}
              alt={'Mockup de Infuy creado por Launchy'}
              className="col-span-1"
            />

            <Image
              src={InfuyPic7}
              width={250}
              height={145}
              alt={'Mockup de Infuy creado por Launchy'}
              className="col-span-1"
            />

            <Image
              src={InfuyPic9}
              width={250}
              height={145}
              alt={'Mockup de Infuy creado por Launchy'}
              className="col-span-1"
            />

            <Image
              src={InfuyPic11}
              width={250}
              height={145}
              alt={'Mockup de Infuy creado por Launchy'}
              className="col-span-1"
            />

            <Image
              src={InfuyPic3}
              width={250}
              height={145}
              alt={'Mockup de Infuy creado por Launchy'}
              className="col-span-1"
            />

            <Image
              src={InfuyPic4}
              width={250}
              height={145}
              alt={'Mockup de Infuy creado por Launchy'}
              className="col-span-1"
            />

            <Image
              src={InfuyPic6}
              width={250}
              height={145}
              alt={'Mockup de Infuy creado por Launchy'}
              className="col-span-1"
            />

            <Image
              src={InfuyPic8}
              width={250}
              height={145}
              alt={'Mockup de Infuy creado por Launchy'}
              className="col-span-1"
            />

            <Image
              src={InfuyPic10}
              width={250}
              height={145}
              alt={'Mockup de Infuy creado por Launchy'}
              className="col-span-1"
            />

            <Image
              src={InfuyPic12}
              width={250}
              height={145}
              alt={'Mockup de Infuy creado por Launchy'}
              className="col-span-1"
            />
          </div>
        </div>
      </FadeInElement>

      {/*********************************** Rest of the pictures ***************************************/}
      <div className="flex flex-col mb-[60px] md:mb-[80px]">
        <FadeInElement>
          <div className="mb-[60px] md:mb-[80px] px-[8%] lg:px-0 lg:grid lg:place-content-center">
            <Image
              src={InfuyOnePage}
              width={977}
              height={580}
              alt={'Mockup de Infuy creado por Launchy'}
              className="w-full"
            />
          </div>
        </FadeInElement>

        <FadeInElement>
          <div className="flex flex-col lg:flex-row lg:pr-[12%] lg:mb-[80px] xl:pl-[7%] xl:pr-[17%]">
            <div className="px-[8%] mb-[30px] md:mb-0 flex justify-center lg:px-0 lg:w-1/2 lg:h-[665px] lg:justify-end">
              <Image
                src={InfuyOtherPic1}
                width={414}
                height={723}
                alt={'Mockup de Infuy creado por Launchy'}
                className="w-full"
              />
            </div>

            <div className="px-[8%] mb-[30px] md:mb-0 flex justify-center lg:px-0 lg:w-1/2 lg:h-[665px]">
              <Image
                src={InfuyOtherPic2}
                width={538}
                height={665}
                alt={'Mockup de Infuy creado por Launchy'}
                className="w-full"
              />
            </div>
          </div>
        </FadeInElement>

        <FadeInElement>
          <Image
            src={InfuyOtherPic3}
            width={1440}
            height={582}
            alt={'Mockup de Infuy creado por Launchy'}
            className="w-full"
          />
        </FadeInElement>
      </div>

      {/***********************************  Testimonial  *******************************/}
      <Testimonial title="SOLUCION" text={textTestimonial} />

      {/***********************************  Footer  ******************************/}
      <Footer blue />
    </main>
  );
};

export default Infuy;
