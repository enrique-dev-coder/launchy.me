import Header from '../../components/pagesAtom/Header'
import StarBackgroundCss from '../../components/Wrappers/StarBackgroundCss'
import ServicesText from '../../components/pagesAtom/servicios/ServicesText'
import Cases from '../../components/pagesAtom/servicios/Cases'
import Circle from '../../components/pagesAtom/servicios/Circle'
import StackSlider from '../../components/pagesAtom/servicios/StackSlider'
import OtherCases from '../../components/pagesAtom/servicios/OtherCases'
import Pictures from '../../components/pagesAtom/servicios/Pictures'
import CJMPicture from '../../components/pagesAtom/servicios/CJMPicture'
import HeaderSlider from '../../components/pagesAtom/HeaderSlider'
import FlippingCard from '../../components/pagesAtom/servicios/FlippingCard'
import Wrapper from '../../components/pagesAtom/Wrapper'
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
  'MEJORAR',
]

//Circle
const circles = [
  {number: 1, text: 'ROAD MAP'},
  {number: 2, text: 'RECOPILACION DE DATOS'},
  {number: 3, text: 'Análisis'},
  {number: 4, text: 'TESTEO'},
  {number: 5, text: 'Iteración'}
]

//Flipping Cards
const flipping = [
  {number: 1, src: '/img/team/Research.mp4', title: 'research', video: true},
  {number: 2, src: '/img/team/Diseño.png', title: 'diseño', video: false},
  {number: 3, src: '/img/team/Desarrollo.png', title: 'desarrollo', video: false},
  {number: 4, src: '/img/team/Bussiness-consulting.png', title: 'bussiness consulting', video: false},
]

const Servicios = () => {
  return (
    <main className="roboto_normal">
        <Header items={items} quantity={6}>
            <h2 className='z-10 text-white text-xl sm:text-4xl mt-3'>SERVICIOS: ¿CÓMO EMPEZAMOS?</h2>
        </Header>

        <StarBackgroundCss>
          <div className='max-w-[1440px] mx-auto'>

                <div className="flex items-center lg:justify-center overflow-x-auto scrollbar py-[1rem] px-[6%] gap-6 mt-[60px]">
                {
                flipping.map(card => <FlippingCard key={card.number} picture={card.src} title={card.title} link={card.title} video={card.video} />)
                }
                </div>

                <ServicesText title='research' text={texts.research} picture='/img/team/We-research.png' id='research'>
                  <ul className='flex flex-col'>
                    <li className='text-slate-100'>Product Discovery</li>
                    <li className='text-slate-100'>Benchmaking</li>
                    <li className='text-slate-100'>UX Research</li>
                    <li className='text-slate-100'>Bussiness Model Research</li>
                    <li className='text-slate-100'>Data Analisis Marketing</li>
                  </ul>
                </ServicesText>

                <div className="px-[8%] flex justify-center flex-wrap">
                {
                circles.map(circle => <Circle key={circle.number} number={circle.number} text={circle.text} />)
                }
                </div>

                <ServicesText title='design' text={texts.design} picture='/img/team/We-design.png' id='diseño'>
                  <ul className='flex flex-col'>
                    <li className='text-slate-100'>Diseño UX</li>
                    <li className='text-slate-100'>Diseño UI</li>
                    <li className='text-slate-100'>Diseño de experiencias inmersivas</li>
                    <li className='text-slate-100'>Estrategia de marca</li>
                    <li className='text-slate-100'>Aplicaciones de marca con especialidad coorporativa</li>
                    <li className='text-slate-100'>Diseño de animaciones y audiovisual</li>
                  </ul>
                </ServicesText>

                <HeaderSlider slidesItems={words} slidesQuantity={2} slidesMobiles={1} styles='max-h-[200px] flex w-full z-10 tracking-wider text-[50px] sm:text-[70px] mb-[60px] md:mb-[80px] resource_text' />

                <OtherCases />

                <ServicesText title='develop' text={texts.develop} picture='/img/team/We-develop.png' id='desarrollo'>
                  <ul className='flex flex-col'>
                    <li className='text-slate-100'>Website app development</li>
                    <li className='text-slate-100'>Frontend speciality</li>
                    <li className='text-slate-100'>3D inmersive experiences</li>
                    <li className='text-slate-100'>Custome software development</li>
                    <li className='text-slate-100'>Web 3.0 development</li>
                  </ul>
                </ServicesText>

                <StackSlider />

                <Cases />

                <ServicesText title='do bussiness consulting' text={texts.doBussiness} picture='/img/team/We-do-bussiness.png' id='bussiness consulting'>
                  <ul className='flex flex-col'>
                    <li className='text-slate-100'>Product Discovery</li>
                    <li className='text-slate-100'>Benchmaking</li>
                    <li className='text-slate-100'>UX Research</li>
                    <li className='text-slate-100'>Bussiness Model Research</li>
                    <li className='text-slate-100'>Data Analisis Marketing</li>
                  </ul>
                </ServicesText>

                <Pictures />

                <CJMPicture />

            </div>

            <Footer />
        </StarBackgroundCss>
    </main>
  )
}

export default Servicios