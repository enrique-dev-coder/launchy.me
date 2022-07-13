import HeaderAndBoxes from '../../components/pagesAtom/Itgall/HeaderAndBoxes';
import Testimonial from '../../components/pagesAtom/Testimonial';
import ColorPalette from '../../components/pagesAtom/ColorPalette';
import ProcessOrSolution from '../../components/pagesAtom/ProcessOrSolution';
import Pictures from '../../components/pagesAtom/Itgall/Pictures';
import FadeInElement from '../../components/pagesAtom/FadeInElement';
import Footer from '../../components/Footer';
import ItgallProcess from '../../public/img/itgall/Proceso.png';
import MobilePictures from '../../components/pagesAtom/Itgall/MobilePictures';

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

const Itgall = () => {
  return (
    <main className="bg-[#F1F1F1] roboto_normal">
      <HeaderAndBoxes />
      <div className="max-w-[1440px] mx-auto">
        <ColorPalette title="APLICACION CROMÁTICA" text={textPalette}>
          <div className="grid grid-cols-2 md:flex w-full">
            <div className="bg-[#B75F9F] col-span-2 md:w-1/5 h-12 md:h-[140px]"></div>
            <div className="bg-[#8C1D82] col-span-1 md:w-1/5 h-12 md:h-[140px]"></div>
            <div className="bg-[#63257E] col-span-1 md:w-1/5 h-12 md:h-[140px]"></div>
            <div className="bg-[#37044E] col-span-1 md:w-1/5 h-12 md:h-[140px]"></div>
            <div className="bg-[#FFD000] col-span-1 md:w-1/5 h-12 md:h-[140px]"></div>
          </div>
        </ColorPalette>
        <ProcessOrSolution title="PROCESO" text={textProccess} />
        <FadeInElement>
          <div className="flex md:justify-center mb-[60px] md:mb-[80px]">
            <img
              src={ItgallProcess}
              width={903}
              height={329}
              alt={'Mockup de Itgall creado por Launchy'}
              className="w-full"
            />
          </div>
        </FadeInElement>
        <ProcessOrSolution title="SOLUCIÓN" text={textSolution}>
          <MobilePictures />
        </ProcessOrSolution>
        <Pictures />
        <Testimonial title="EL RESULTADO" text={textTestimonial} />
      </div>
      <Footer blue />
    </main>
  );
};

export default Itgall;
