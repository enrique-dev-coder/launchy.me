import HeaderAndBoxes from '../../components/pagesAtom/Infuy/HeaderAndBoxes';
import ColorPalette from '../../components/pagesAtom/ColorPalette';
import FontBoxes from '../../components/pagesAtom/FontBoxes';
import Testimonial from '../../components/pagesAtom/Testimonial';
import Gallery from '../../components/pagesAtom/Infuy/Gallery';
import Pictures from '../../components/pagesAtom/Infuy/Pictures';
import Logos from '../../components/pagesAtom/Infuy/Logos';
import FadeInElement from '../../components/pagesAtom/FadeInElement';
import Footer from '../../components/Footer';
import { Fragment } from 'react';

// ColorPalette Props
const textPalette =
  'Partiamos de una marca con una necesidad clara de diferenciación pero con ya con colores prestablecidos que necesitaban perdurar para no perder el posicionamiento que han ganado. Planteamos gradientes sutiles para dar dinamismo a los elementos, así como dar un PROPÓSITO  a los mismos: una cara corporativa y otra disrruptiva, apuntada a dos públicos objetivos de Infuy.';

// Testimonial props
const textTestimonial =
  'Crear e implementar un roadmap de diseño que resuelva las prioridades de cada area. Establecimos un manual de marca, realizamos presentaciones institucionales, casos de estudio a través de infografías, diseño de feed de la marca, generando así un sistema de identidad marcaria completo y accesible para los clientes.';

const Infuy = () => {
  return (
    <main className="bg-[#F1F1F1] roboto_normal">
      <HeaderAndBoxes />
      <div className="max-w-[1440px] mx-auto">
        <ColorPalette title="COLORES Y APLICACIÓN" text={textPalette}>
          <img
            src="/img/infuy/Paleta cromatica.gif"
            width={1439}
            height={140}
            alt={'Mockup de Infuy creado por Launchy'}
            className="w-full"
          />

          <div className="grid grid-cols-2 md:flex w-full">
            <div className="bg-[#F5C814] col-span-1 md:w-1/4 h-12 md:h-[140px]"></div>
            <div className="bg-[#05172F] col-span-1 md:w-1/4 h-12 md:h-[140px]"></div>
            <div className="bg-[#f30b19] col-span-1 md:w-1/4 h-12 md:h-[140px]"></div>
            <div className="bg-[#f97316] col-span-1 md:w-1/4 h-12 md:h-[140px]"></div>
          </div>
        </ColorPalette>
        <FadeInElement>
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
        <FadeInElement>
          <Logos />
          <Gallery />
        </FadeInElement>
        <Pictures />
        <Testimonial title="SOLUCIÓN" text={textTestimonial} />
        <Footer blue />
      </div>
    </main>
  );
};

export default Infuy;
