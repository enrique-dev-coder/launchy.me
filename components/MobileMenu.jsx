import { useEffect } from 'react';
import HomeButton from './HomeButton';
import { useMenu } from '../context/MenuContext';
import Link from 'next/link';
const menuData = [
  {
    id: 1,
    link: '/services',
    title: 'soluciones',
  },
  {
    id: 2,
    link: '#proyectos',
    title: 'proyectos',
  },

  {
    id: 3,
    link: '/culture',
    title: 'cultura',
  },
  {
    id: 4,
    link: '/',
    title: 'blog',
  },
  {
    id: 5,
    link: '#free-resources',
    title: 'free resources',
  },
];

const MobileMenu = ({ isOpen }) => {
  const { setisOpen, lineAnimation, setLineAnimation } = useMenu();
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
          <p className="text-white uppercase">EN</p>
          <p className="text-white uppercase" onClick={() => setisOpen(false)}>
            Cerrar
          </p>
        </div>
        <div className="w-10/12 mx-auto h-[450px] mb-[30px] flex flex-col justify-around">
          {menuData.map((m) => (
            <Link href={m.link} key={m.title}>
              <div className="relative" onClick={() => setisOpen(false)}>
                <p
                  key={m.id}
                  className="uppercase text-white mb-[30px] text-[20px]"
                >
                  {m.title}
                </p>
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
          <HomeButton link={'/contact'} title={'charlemos'} />
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
