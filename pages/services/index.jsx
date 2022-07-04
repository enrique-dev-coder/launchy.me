import Header from '../../components/pagesAtom/Header'
import StarBackgroundCss from '../../components/Wrappers/StarBackgroundCss'
import ServicesText from '../../components/pagesAtom/servicios/ServicesText'
import Cases from '../../components/pagesAtom/servicios/Cases'
import Circle from '../../components/pagesAtom/servicios/Circle'
import StackSlider from '../../components/pagesAtom/servicios/StackSlider'
import OtherCases from '../../components/pagesAtom/servicios/OtherCases'
import Pictures from '../../components/pagesAtom/servicios/Pictures'
import HeaderSlider from '../../components/pagesAtom/HeaderSlider'
import Footer from '../../components/Footer'

// Header items
const items = [
    'PROACTIVOS',
    'ANALITICOS',
    'MAKERS',
    'PIZZA & GAME LOVERS',
    'DREAMERS',
    'ENTUSIASTAS',
    'APASIONADOS',
]

// ServicesText texts
const texts = {
  research: 'Todo parte de la empatía. No basta con suponer por el usuario, investigamos de manera cualitativa y cuantitativa. Creemos fielmente en que lo que se puede medir se puede mejorar. Buscamos los insights claves, proponemos nuevas rutas de investigación que sumen a tus objetivos. Amamos tener inciativa y poder ofrecerte:',
  design: 'Diseño con propósito e investigación. Planteamos aplicaciones y productos que sigan una linea visual clara para transmitir la propuesta de valor del cliente. Partimos de identidades creadas o de cero, co creando juntos. Vamos más allá de lo estético brindadote nuestra expertis para aconsejarte y darte opciones con criterio y en base a propósitos que se alineen con tu estrategia de marca. ',
  develop: 'Ofrecemos soluciones personalizadas adaptandonos al contexto, road map y posibilidades de nuestros clientes. Para ello combinamos metodologias agiles con un equipo multidisciplinario que permite abrir una comunicación fluida estableciendo rutas claras para impulsar tus ideas al espacio.',
  doBussiness: '¿Has desarrollado un MVP o has escalado un gran producto/servicio? Si es asi seguramente pasaste horas de investigación, desarrollo, tareas operativas y un compromiso por dar a flote tu negocio.',
}

//Words Slider
const words = [
  'INVESTIGAR',
  'PROTOTIPAR',
  'ITERAR',
  'TESTEAR',
  'MEJORAR' ,
]

//Circle
const circles = [
  {number: 1, text: 'ROAD MAP'},
  {number: 2, text: 'RECOPILACION DE DATOS'},
  {number: 3, text: 'Análisis'},
  {number: 4, text: 'TESTEO'},
  {number: 5, text: 'Iteración'}
]

const Servicios = () => {
  return (
    <main className="2xl:container 2xl:mx-auto">
        <Header items={items} quantity={6}>
            <h2 className='z-10 text-white text-xl sm:text-4xl mt-3'>SERVICIOS: ¿CÓMO EMPEZAMOS?</h2>
        </Header>

        <StarBackgroundCss>
            <ServicesText title='research' text={texts.research}>
              <ul>
                <li className='text-slate-100'>Product Discovery</li><br />
                <li className='text-slate-100'>Benchmaking</li><br />
                <li className='text-slate-100'>UX Research</li><br />
                <li className='text-slate-100'>Bussiness Model Research</li><br />
                <li className='text-slate-100'>Data Analisis Marketing</li>
              </ul>
            </ServicesText>

            <div className="px-[8%] flex justify-around flex-wrap gap-4">
            {
              circles.map(circle => <Circle key={circle.number} number={circle.number} text={circle.text} />)
            }
            </div>

            <ServicesText title='design' text={texts.design}>
              <ul>
                <li className='text-slate-100'>Diseño UX</li><br />
                <li className='text-slate-100'>Diseño UI</li><br />
                <li className='text-slate-100'>Diseño de experiencias inmersivas</li><br />
                <li className='text-slate-100'>Estrategia de marca</li><br />
                <li className='text-slate-100'>Aplicaciones de marca con especialidad coorporativa</li><br />
                <li className='text-slate-100'>Diseño de animaciones y audiovisual</li>
              </ul>
            </ServicesText>

            <HeaderSlider slidesItems={words} slidesQuantity={4} styles='max-h-[200px] flex w-full border-y z-10 text-white border-white mb-[60px] md:mb-[80px]' />

            <OtherCases />

            <ServicesText title='develop' text={texts.develop}>
              <ul>
                <li className='text-slate-100'>Website app development</li><br />
                <li className='text-slate-100'>Frontend speciality</li><br />
                <li className='text-slate-100'>3D inmersive experiences</li><br />
                <li className='text-slate-100'>Custome software development</li><br />
                <li className='text-slate-100'>Web 3.0 development</li>
              </ul>
            </ServicesText>

            <StackSlider />

            <Cases />

            <ServicesText title='do bussiness consulting' text={texts.doBussiness}>
              <ul>
                <li className='text-slate-100'>Product Discovery</li><br />
                <li className='text-slate-100'>Benchmaking</li><br />
                <li className='text-slate-100'>UX Research</li><br />
                <li className='text-slate-100'>Bussiness Model Research</li><br />
                <li className='text-slate-100'>Data Analisis Marketing</li>
              </ul>
            </ServicesText>

            <Pictures />

            <Footer />
        </StarBackgroundCss>
    </main>
  )
}

export default Servicios