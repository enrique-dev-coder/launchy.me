import Header from '../../components/pagesAtom/Header'
import StarBackgroundCss from '../../components/Wrappers/StarBackgroundCss'
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

const Servicios = () => {
  return (
    <main className="2xl:container 2xl:mx-auto">
        <Header items={items} quantity={6}>
            <h2 className='z-10 text-white text-4xl mt-3'>SERVICIOS: ¿CÓMO EMPEZAMOS?</h2>
        </Header>

        <StarBackgroundCss>
            <Footer />
        </StarBackgroundCss>
    </main>
  )
}

export default Servicios