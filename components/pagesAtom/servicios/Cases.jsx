import Card from '../../Parte4Home/Card';
import Wrapper from '../Wrapper';
import TranslatedParagraph from '../../TranslatedParagraph';
const data = [
  {
    id: 1,
    path: '/img/casos/ITGALL2.mp4',
    desc: 'DESARROLLAMOS EL PUNTO DE ENCUENTRO VIRTUAL DE LOS LIVING LABS EN GALICIA',
    descEng:
      'WE DEVELOPE THE VIRTUAL MEETING POINT OF THE LIVING LABS IN GALICIA',
    link: '/itgall',
    video: true,
  },
  {
    id: 2,
    path: '/img/casos/app_deportiva.png',
    desc: 'DISEÑAMOS LA EXPERIENCIA EN ESTADIOS DEPORTIVOS CON EL DISEÑO DE UNA APP',
    descEng: 'WE DESIGN THE EXPERIENCE IN SPORTS STADIUMS BY DESIGNING AN APP',
    link: '/ligaMX',
    video: false,
  },
  {
    id: 3,
    path: '/img/casos/fichap.png',
    desc: 'REORGANIZAMOS EL SITE DE FICHAP PARA UNA MEJOR PERFORMANCE ',
    descEng: 'WE REORGANIZED THE FICHAP SITE TO IMPROVE THE PERFORMANCE',
    link: '/fichap',
    video: false,
  },
];

const Cases = () => {
  return (
    <Wrapper>
      <div className="px-[2%]">
        <TranslatedParagraph
          classes={'text-white text-3xl mb-[30px] uppercase'}
          textSpanish="Algunos de nuestros casos"
          textEnglish="SOME OF OUR CASES"
        />
        <div className="flex flex-wrap justify-between">
          {data.map((d, i) => (
            <Card
              key={i}
              link={d.link}
              path={d.path}
              desc={d.desc}
              descEng={d.descEng}
              video={d.video}
            />
          ))}
        </div>
      </div>
    </Wrapper>
  );
};

export default Cases;
