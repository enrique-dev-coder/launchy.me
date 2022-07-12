import HeaderAndBoxes from "../../components/pagesAtom/LigaMX/HeaderAndBoxes";
import Testimonial from "../../components/pagesAtom/Testimonial";
import ProcessOrSolution from "../../components/pagesAtom/ProcessOrSolution";
import Pictures from '../../components/pagesAtom/LigaMX/Pictures';
import Footer from '../../components/Footer'

// Testimonial props
const textTestimonial = 'Poder crear junto con un equipo técnico para que el reconocimiento facial pueda llegar a las personas a partir de procedimientos sencillos mejorando la experiencia con el usuario.'

const LigaMX = () => {
  return (
      <main className="bg-[#F1F1F1] roboto_normal">
          <HeaderAndBoxes />
          <div className="max-w-[1440px] mx-auto">
            <ProcessOrSolution title='SOLUCIÓN' paragraph={false}>
              <div className="flex flex-col lg:flex-row lg:gap-4 mb-[60px] lg:mb-[80px]">

                <video src="img/ligaMX/FAN ID (1) (1).mp4" className='shadow-2xl w-full lg:w-1/2 flex justify-center mb-[30px] lg:mb-0' controls></video>
              
                <div className="lg:w-1/2 flex roboto_normal text-[14px]">
                Ya que la aplicación aun esta en revisiones queremos compartirles una visualización de los flujos generales para que puedan ver parte de la inciativa y cómo integramos nuestra expertis de diseño a impactar en la vida de las personas.
                </div>

              </div>
            </ProcessOrSolution>
            <Pictures />
            <Testimonial text={textTestimonial} />
          </div>
          <Footer blue />
      </main>
  )
}

export default LigaMX