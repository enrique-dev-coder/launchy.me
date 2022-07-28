import Header from '../../components/pagesAtom/Header';
import StarBackgroundCss from '../../components/Wrappers/StarBackgroundCss';
import ServicesText from '../../components/pagesAtom/servicios/ServicesText';
import Cases from '../../components/pagesAtom/servicios/Cases';
import Circle from '../../components/pagesAtom/servicios/Circle';
import StackSlider from '../../components/pagesAtom/servicios/StackSlider';
import OtherCases from '../../components/pagesAtom/servicios/OtherCases';
import Pictures from '../../components/pagesAtom/servicios/Pictures';
import CJMPicture from '../../components/pagesAtom/servicios/CJMPicture';
import HeaderSlider from '../../components/pagesAtom/HeaderSlider';
import FlippingCard from '../../components/pagesAtom/servicios/FlippingCard';
import Footer from '../../components/Footer';
import { texts } from '../../public/Data';
import TranslatedParagraph from '../../components/TranslatedParagraph';
import { useMenu } from '../../context/MenuContext';

// Header items
const items = [
  'PROACTIVOS',
  'ANALITICOS',
  'MAKERS',
  'PIZZA',
  'DREAMERS',
  'ENTUSIASTAS',
  'APASIONADOS',
];

//Words Slider
const words = ['INVESTIGAR', 'PROTOTIPAR', 'ITERAR', 'TESTEAR', 'MEJORAR'];
//Words Slider ingles
const wordsIngles = ['RESEARCH', 'PROTOTYPE', 'ITERATE', 'TESTING', 'IMPROVE'];
//Circle
const circles = [
  { number: 1, text: 'ROAD MAP' },
  { number: 2, text: 'RECOPILACION DE DATOS' },
  { number: 3, text: 'Análisis' },
  { number: 4, text: 'TESTEO' },
  { number: 5, text: 'Iteración' },
];

//Flipping Cards
const flipping = [
  {
    number: 1,
    src: '/img/team/Research.mp4',
    title: 'research',
    titleEng: 'research',
    video: true,
  },
  {
    number: 2,
    src: '/img/team/Diseño.png',
    title: 'diseño',
    titleEng: 'desing',
    video: false,
  },
  {
    number: 3,
    src: '/img/team/Desarrollo.png',
    title: 'desarrollo',
    titleEng: 'development',
    video: false,
  },
  {
    number: 4,
    src: '/img/team/Bussiness-consulting.png',
    title: 'bussiness consulting',
    titleEng: 'bussiness consulting',
    video: false,
  },
];

//destructuring de la data
//esto se hace para que no sea tantos datos en esta pagina
const { research, design, develop, Bussiness } = texts;

const Servicios = () => {
  const { english } = useMenu();

  return (
    <main className="roboto_normal">
      <Header items={items} quantity={6}>
        <TranslatedParagraph
          textSpanish={'SERVICIOS: ¿CÓMO EMPEZAMOS?'}
          textEnglish={'SERVICES: HOW DO WE BEGIN?'}
          classes={'z-10 text-white text-xl sm:text-4xl mt-3'}
        />
      </Header>

      <StarBackgroundCss>
        <div className="max-w-[1440px] mx-auto">
          <div className="flex items-center lg:justify-center overflow-x-auto scrollbar py-[1rem] px-[6%] gap-6 mt-[60px]">
            {flipping.map((card) => (
              <FlippingCard
                key={card.number}
                picture={card.src}
                title={card.title}
                titleEng={card.titleEng}
                link={card.title}
                video={card.video}
              />
            ))}
          </div>
          <ServicesText
            title={research.title}
            titleEng={research.titleEng}
            text={research.text}
            textEng={research.textEng}
            picture={research.picture}
            id={research.id}
            options={research.listItems}
            optionsEng={research.listItemsEng}
          />
          <div className="px-[8%] py-[4%] flex justify-start md:justify-center overflow-x-auto scrollbar">
            {circles.map((circle) => (
              <Circle
                key={circle.number}
                number={circle.number}
                text={circle.text}
              />
            ))}
          </div>
          <ServicesText
            title={design.title}
            titleEng={design.titleEng}
            text={design.text}
            textEng={design.textEng}
            picture={design.picture}
            id={design.id}
            options={design.listItems}
            optionsEng={design.listItemsEng}
          />
          <HeaderSlider
            slidesItems={english ? wordsIngles : words}
            slidesQuantity={2}
            slidesMobiles={1}
            styles="max-h-[200px] flex w-full z-10 tracking-wider text-[50px] sm:text-[70px] mb-[60px] md:mb-[80px] resource_text"
          />

          <OtherCases />
          <ServicesText
            title={develop.title}
            titleEng={develop.titleEng}
            text={develop.text}
            textEng={develop.textEng}
            picture={develop.picture}
            id={develop.id}
            options={develop.listItems}
            optionsEng={develop.listItemsEng}
          />
          <StackSlider />
          <Cases />
          <ServicesText
            title={Bussiness.title}
            titleEng={Bussiness.titleEng}
            text={Bussiness.text}
            textEng={Bussiness.textEng}
            picture={Bussiness.picture}
            id={Bussiness.id}
            options={Bussiness.listItems}
            optionsEng={Bussiness.listItemsEng}
          />
          <Pictures />
          <CJMPicture />
        </div>

        <Footer />
      </StarBackgroundCss>
    </main>
  );
};

export default Servicios;
