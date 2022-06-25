import Header from '../../components/pagesAtom/Header'
import Mission from '../../components/pagesAtom/Culture/Mission'
import Cards from '../../components/pagesAtom/culture/Cards'
import StarBackgroundCss from '../../components/Wrappers/StarBackgroundCss'
import Footer from '../../components/Footer'

// Header items
const items = [
    'diseño UX',
    'diseño UI',
    'prototipado',
    'iteración',
    'development',
    'frontend',
    'pixel perfect',
    'rediseño',
]

const Culture = () => {
  return (
    <main className="2xl:container 2xl:mx-auto">
        <Header items={items} quantity={7} show={false}>
            <h2 className='z-10 text-white text-4xl tracking-wider uppercase'>Culture</h2>
        </Header>

        <StarBackgroundCss>
            <Mission />
            <Cards />
            <Footer />
        </StarBackgroundCss>
    </main>
  )
}

export default Culture