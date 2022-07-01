import React from 'react'
import Header from '../../components/pagesAtom/Header'
import StarBackgroundCss from '../../components/Wrappers/StarBackgroundCss'
import Footer from '../../components/Footer'

const index = () => {
  return (
    <main className="2xl:container 2xl:mx-auto">
            <Header show={false}>
                <h2>Politicas de privacidad | CO</h2>
            </Header>

            <StarBackgroundCss>
                <Footer />
            </StarBackgroundCss>
    </main>
  )
}

export default index