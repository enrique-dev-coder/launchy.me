import { useEffect } from 'react';
import HomeButton from './HomeButton';
import { useMenu } from '../context/MenuContext';
import TranslatedParagraph from './TranslatedParagraph';
import Link from 'next/link';
const menuData = [
  {
    id: 1,
    link: '/services',
    title: 'soluciones',
    titleEng: 'services',
  },
  {
    id: 2,
    link: '/#proyectos',
    title: 'proyectos',
    titleEng: 'projects',
  },

  {
    id: 3,
    link: '/culture',
    title: 'cultura',
    titleEng: 'culture',
  },
  {
    id: 4,
    link: '/',
    title: 'blog',
    titleEng: 'blog',
  },
  {
    id: 5,
    link: '/#free-resources',
    title: 'free resources',
    titleEng: 'free resources',
  },
];

const MobileMenu = ({ isOpen }) => {
  const { setisOpen, lineAnimation, setLineAnimation, english, setEnglish } =
    useMenu();
  useEffect(() => {
    //NOTE esto es para que cuando se abra el menu se espere 1 segundos y luego entre la animacion de la barrita
    //NOTE Cuando cambia a falso el estado de la aniamcion cambia a falso tambien
    isOpen
      ? setTimeout(() => {
          setLineAnimation(true);
        }, 500)
      : setLineAnimation(false);
  }, [isOpen]);

  return (
    <div
      className={`w-full h-screen fixed z-30 flex flex-col  justify-center  transition-all duration-500 bg-black ${
        isOpen ? 'left-0' : 'left-[100%]'
      }`}
    >
      <div className="w-full flex flex-col h-[80%]">
        <div className="w-10/12 mx-auto flex justify-between mb-[30px]">
          <p
            className="text-white uppercase"
            onClick={() => setEnglish(!english)}
          >
            {english ? 'ESP' : 'EN'}
          </p>
          <p className="text-white uppercase" onClick={() => setisOpen(false)}>
            {english ? 'Close' : 'Cerrar'}
          </p>
        </div>
        <div className="w-10/12 mx-auto h-[450px] mb-[30px] flex flex-col justify-around">
          {menuData.map((m) => (
            <Link href={m.link} key={m.title}>
              <div className="relative" onClick={() => setisOpen(false)}>
                <TranslatedParagraph
                  textSpanish={m.title}
                  textEnglish={m.titleEng}
                  classes={'uppercase text-white mb-[30px] text-[20px]'}
                />
                <div
                  className={`bg-white w-full transition-all duration-500  h-[1.5px] absolute   ${
                    lineAnimation ? 'left-0' : 'left-[100%]'
                  }`}
                ></div>
              </div>
            </Link>
          ))}
        </div>
        <div className="w-10/12 mx-auto" onClick={() => setisOpen(false)}>
          <HomeButton
            link={'/contact'}
            title={'charlemos'}
            titleEng={'contact us'}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
