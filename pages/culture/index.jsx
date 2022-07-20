import Header from '../../components/pagesAtom/Header';
import Mission from '../../components/pagesAtom/Culture/Mission';
import Cards from '../../components/pagesAtom/Culture/Cards';
import TeamPictures from '../../components/pagesAtom/Culture/TeamPictures';
import Together from '../../components/pagesAtom/Culture/Together';
import StarBackgroundCss from '../../components/Wrappers/StarBackgroundCss';
import Wrapper from '../../components/pagesAtom/Wrapper';
import Footer from '../../components/Footer';

const Culture = () => {
  return (
    <main className="roboto_normal">
      <Header show={false}>
        <h1 className="z-10 text-white tracking-widest uppercase mt-5 text-[30px] lg:text-[40px] roboto_normal">
          Culture
        </h1>
      </Header>

      <StarBackgroundCss>
        <section className="max-w-[1440px] mx-auto">
          <Cards />
          <TeamPictures />
          <Wrapper>
            <Mission />
            <Together />
          </Wrapper>
          <Footer />
        </section>
      </StarBackgroundCss>
    </main>
  );
};

export default Culture;
