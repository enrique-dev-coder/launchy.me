import HeaderAndBoxes from "../../components/pagesAtom/Fichap/HeaderAndBoxes";
import Testimonial from "../../components/pagesAtom/Testimonial";
import ProcessOrSolution from "../../components/pagesAtom/ProcessOrSolution";
import Pictures from '../../components/pagesAtom/Fichap/Pictures';
import FirstScreen from '../../components/pagesAtom/Fichap/FirstScreen';
import Footer from '../../components/Footer'

//Solution Text
const solutionText = 'Generamos una investigación sobre webs de competencias de Fichap y encontramos que uno de los puntos claves eran los formularios y quitando carruseles para dar pase a la información de una manera más simple e intuitiva. Organizando el flujo del potencial cliente a través de la web. Asi cómo cooperamos en la optimización de las campañas y estrategias. '

//Testimonial Props
const testimonialText = 'Hemos aprendido mutuamente integrando metodologías y puntos de vistas en conjunto. Fichap es una empresa que tiene como misión digitalizar los recursos humanos de las empresas. Y nos sentimos más que motivados a ayudarlos que esto sea así.'

const Fichap = () => {
  return (
      <main className="bg-[#F1F1F1] roboto_normal">
          <HeaderAndBoxes />
          <div className="max-w-[1440px] mx-auto">
            <ProcessOrSolution title='SOLUCIÓN' text={solutionText}>
              <FirstScreen />
            </ProcessOrSolution>
            <Pictures />
            <Testimonial text={testimonialText} />
          </div>
          <Footer blue />
      </main>
  )
}

export default Fichap