import HeaderAndBoxes from "../../components/pagesAtom/Community/HeaderAndBoxes";
import Testimonial from "../../components/pagesAtom/Testimonial";
import ProcessOrSolution from "../../components/pagesAtom/ProcessOrSolution";
import Pictures from '../../components/pagesAtom/Community/Pictures';
import Footer from '../../components/Footer'

//Solution text
const solutionText = 'Decidimos trabajar con bloques debido a la iteración del proyecto y lo variante que ha sido acorde al descubrimiento de uevas aplicaciones así como también nuevas iniciativas a partir de la primera.'

// Testimonial props
const textTestimonial = 'La comunicación fue clave para poder responder a la rápida y constante iteración que va surgiendo en el proyecto. Pero ver el avance de pilotos que estan teniendo en sedes de California como en otros paises nos pone felices ya que constribuimos en la comunicación de mejores prácticas para el cuidado ambiental de la energía.'

const Community = () => {
  return (
      <main className="bg-[#F1F1F1] roboto_normal">
          <HeaderAndBoxes />
          <div className="max-w-[1440px] mx-auto">
            <ProcessOrSolution title='SOLUCIÓN' text={solutionText}/>
            <Pictures />
            <Testimonial text={textTestimonial} />
          </div>
          <Footer blue />
      </main>
  )
}

export default Community