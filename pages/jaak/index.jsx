import HeaderAndBoxes from "../../components/pagesAtom/Jaak/HeaderAndBoxes";
import Testimonial from "../../components/pagesAtom/Testimonial";
import ColorPalette from "../../components/pagesAtom/ColorPalette"
import ProcessOrSolution from "../../components/pagesAtom/ProcessOrSolution";
import Pictures from '../../components/pagesAtom/Jaak/Pictures';
import Footer from '../../components/Footer'

// colorPalette Props
const textPalette = 'Trabajamos con la paleta cromática del cliente aportando detalles en elementos tanto de la gráfica indicativa como con los elementos visuales que acompañarian la plataforma. Estamos en constante mejora ahora integrando nuevos datos de las aplicaciones y viendo como se alinean a la marca.'

// Solution Props
const textSolution = 'Reformulamos el dashboard de manera que tuviera un uso mas intuitvo con una plataforma amigable orientada a las necesidades del usuario y mediando con los alcances técnicos del equipo para un resultado que está en constante mejora. Es un proyecto con futura iteración para integración de más funcionalidades.'

// Testimonial Props
const textTestimonial = 'Hemos aprendido muchisimo de la experiencia técnica del equipo de JAAk así como hemos ofrecido una nueva dirección creativa a la hora de manifestar los productos y la planeación de los mismos.'

const Jaak = () => {
  return (
      <main className="bg-[#F1F1F1] 2xl:container 2xl:mx-auto">
          <HeaderAndBoxes />
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
          <ProcessOrSolution 
            title='SOLUCIÓN'
            text={textSolution}  
          />
          <Pictures />
          <Testimonial text={textTestimonial} />
          <Footer blue />
      </main>
  )
}

export default Jaak