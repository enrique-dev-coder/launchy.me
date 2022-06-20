import Image from 'next/image';
import Testimonial from '../../components/pagesAtom/Testimonial';
import InfoTarget from '../../components/pagesAtom/InfoTarget';
import ColorPalette from '../../components/pagesAtom/ColorPalette';
import ProcessOrSolution from '../../components/pagesAtom/ProcessOrSolution';
import Header from '../../components/pagesAtom/Header';
import FadeInElement from '../../components/pagesAtom/FadeInElement';
import Footer from '../../components/Footer';
import ITGallLogo from '../../public/img/itgall/Logo ITGall.png';
import iconPic1 from '../../public/img/icons/fluent_web-asset-20-regular.svg';
import iconPic2 from '../../public/img/icons/Ojito.svg';
import iconPic3 from '../../public/img/icons/Profile.svg';
import iconPic4 from '../../public/img/icons/fluent_calendar-today-28-regular.svg';
import ItgallProcess from '../../public/img/itgall/Proceso.png';
import MobileHome from '../../public/img/itgall/mobile home.png';
import MobileBlank from '../../public/img/itgall/mobile blank space.png';
import MobileContact from '../../public/img/itgall/mobile contact us.png';
import MobileIn4aha from '../../public/img/itgall/mobile in4aha.png';
import MobileParticipation from '../../public/img/itgall/mobile participation.png';
import DesktopFrame from '../../public/img/itgall/Rectangle 39388.png';
import Projects from '../../public/img/itgall/Projects.png';
import Partners from '../../public/img/itgall/Partners.png';
import Map from '../../public/img/itgall/Map.png';

const objetivoTexto =
  'Generar un Manual de marca y aplicaciones comerciales que apoyen los objetivos comerciales de la empresa así como solificar juntos la estrategia de marca de Infuy. Para ello brindaremos un Diseño aplicado con propósito y que permita escalar a la marca a largo plazo.';

const desafioTexto = {
  one: 'Centralizar los living labs desde la web localizandolos geográficamente desde una visión macro del ecosistema de salud.',
  two: 'Transmitir la propuesta de valor de ITGALL con una gráfica testada a través de diversas propuestas.',
  three:
    'Usabilidad enfocada en un público entre 40-50 años. Decidimos hacer una navegación asistida.',
  four: 'Gestionar y unificar la información dada por parte de cada living lab para llegar a concensos informativos.',
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
  color: 'from-purple-500 via-white to-white',
  alt: {
    one: 'Icon created by Launchy Team',
  },
};

// ColorPalette Props
const textPalette =
  'Los colores del manual de marca de ITGALL tienen alto contraste por lo cual juntos sin colores de transición o neutralizantes llega a ser confuso para el cliente objetivo, en nuestras pruebas de usuario. Por lo que elegimos tener estos porcentajes de colores donde prevalece la identidad de manera amigable.';

// Proccess Props
const textProccess =
  'Lo primero es probar, y probar bastante. El cliente buscaba que el logo tuviera rotación y aconsejamos que fuera un elemento no tan contrastante y llamativo ya que el usuario no llegaba a entenderlo. Después de mediaciones llegamos a un resultado donde los stakeholders quedaron conformes. Se hicieron en tptal 55 variaciones.';

// Solution Props
const textSolution =
  'Pese a que las barras de navegación no están en lugares convencionales, el buyer persona pudo tener una navegación asistida con los puntos que evitaban la incertidumbre del scroll interminable. La mayoria de usuarios interesados vienen de desktop pero no por ello dejamos de hacer un diseño adaptativo.';

// Testimonial props
const textTestimonial =
  'Nos encantó ser parte de esta experiencia, poder conectar necesidades mutuas entre distintas organizaciones para dar a luz este proyecto que tiene como objetivo ser un punto de encuentro con un interés en común: LAS PERSONAS.';

// Header items
const items = [
  'diseño web',
  'development',
  'frontend',
  'diseño UX',
  'diseño UI',
  'prototipado',
  'iteración',
  'comunicación',
];

const Itgall = () => {
  return (
    <main className="bg-[#F1F1F1] 2xl:container 2xl:mx-auto">
      {/*********************************       Header       *********************************/}
      <Header items={items} quantity={7}>
        <div className="">
          <Image
            src={ITGallLogo}
            width={324}
            height={103}
            alt={'Mockup de ITGall creado por Launchy'}
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
      <ColorPalette title="APLICACION CROMÁTICA" text={textPalette}>
        <div className="grid grid-cols-2 md:flex w-full">
          <div className="bg-[#B75F9F] col-span-2 md:w-1/5 h-12 md:h-[140px]"></div>
          <div className="bg-[#8C1D82] col-span-1 md:w-1/5 h-12 md:h-[140px]"></div>
          <div className="bg-[#63257E] col-span-1 md:w-1/5 h-12 md:h-[140px]"></div>
          <div className="bg-[#37044E] col-span-1 md:w-1/5 h-12 md:h-[140px]"></div>
          <div className="bg-[#FFD000] col-span-1 md:w-1/5 h-12 md:h-[140px]"></div>
        </div>
      </ColorPalette>

      {/***********************************      Process          *****************************/}
      <ProcessOrSolution title="PROCESO" text={textProccess} />

      <FadeInElement>
        <div className="flex md:justify-center mb-[60px] md:mb-[80px]">
          <Image
            src={ItgallProcess}
            width={903}
            height={329}
            alt={'Mockup de Itgall creado por Launchy'}
            className="w-full"
          />
        </div>
      </FadeInElement>

      {/***********************************      Solution         *****************************/}
      <ProcessOrSolution title="SOLUCIÓN" text={textSolution}>
        <div className="flex flex-col justify-center mb-[60px] md:mb-[80px]">
          <div className="flex first-section justify-center">
            <div className="hidden lg:block">
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

            <div className="hidden lg:block">
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

      {/*********************************** Rest of the pictures ***************************************/}
      <FadeInElement>
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
      </FadeInElement>

      <FadeInElement>
        <div className="flex flex-col md:flex-row md:justify-center gap-4 mb-[30px] md:mb-[40px] px-[8%]">
          <div className="border p-4 pb-0">
            <Image
              src={Projects}
              width={349}
              height={488}
              alt={'Mockup de Itgall creado por Launchy'}
            />
          </div>

          <div className="border p-4 pr-0">
            <Image
              src={Partners}
              width={670}
              height={506}
              alt={'Mockup de Itgall creado por Launchy'}
            />
          </div>
        </div>
      </FadeInElement>

      <FadeInElement>
        <div className="mb-[60px] md:mb-[80px] px-[8%]">
          <div className="border p-4 pb-0">
            <Image
              src={Map}
              width={1139}
              height={521}
              alt={'Mockup de Itgall creado por Launchy'}
            />
          </div>
        </div>
      </FadeInElement>

      {/***********************************  Testimonial  *******************************/}
      <Testimonial title="EL RESULTADO" text={textTestimonial} />

      {/***********************************  Footer  ******************************/}
      <Footer blue />
    </main>
  );
};

export default Itgall;
