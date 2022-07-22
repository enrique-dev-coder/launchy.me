import Link from 'next/link';
import { useMenu } from '../context/MenuContext';
import TranslatedParagraph from './TranslatedParagraph';
import HomeButton from './HomeButton';
const Links = [
  {
    title: 'soluciones',
    titleEng: 'services',
    src: '/services',
  },
  {
    title: 'proyectos',
    titleEng: 'projects',
    src: '/#proyectos',
  },
  {
    title: 'cultura',
    titleEng: 'culture',
    src: '/culture',
  },
  {
    title: 'blog',
    titleEng: 'blog',
    src: '/homeblog',
  },
  {
    title: 'free resources',
    titleEng: 'free resources',
    src: '/#free-resources',
  },
];

const Navbar = () => {
  const { setisOpen } = useMenu();
  return (
    <>
      <nav className="w-full h-[70px] absolute top-10 md:top-5 z-20">
        <div className="max-w-[1420px] w-10/12  h-full mx-auto flex justify-between items-center">
          {/*image container*/}
          <Link href={'/'}>
            <div className=" cursor-pointer ">
              <img
                src="/img/logo.png"
                alt="Launchy Logo"
                width="140px"
                height="40px"
              />
            </div>
          </Link>
          {/*links container*/}
          <div className="md:flex space-x-4 hidden  ">
            {Links.map((l) => (
              <a href={l.src}>
                <Link href={l.src} key={l.title}>
                  <TranslatedParagraph
                    key={l.title}
                    textEnglish={l.titleEng}
                    textSpanish={l.title}
                    classes="text-white uppercase text-sm cursor-pointer"
                  />
                </Link>
              </a>
            ))}
          </div>
          {/*button */}
          <HomeButton
            link={'/contact'}
            title="Charlemos"
            titleEng={'Contact Us'}
          />
          {/*mobile menu Icon*/}
          <div className="md:hidden">
            <img
              src="/img/menuicon.svg"
              alt="menu icon"
              onClick={() => setisOpen(true)}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
