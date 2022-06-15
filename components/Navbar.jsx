import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import Logo from '../public/img/logo.png';
const Links = [
  {
    title: 'soluciones',
    src: '/',
  },
  {
    title: 'proyectos',
    src: '/',
  },
  {
    title: 'cultura',
    src: '/',
  },
  {
    title: 'blog',
    src: '/',
  },
  {
    title: 'free resources',
    src: '/',
  },
];

const Navbar = () => {
  return (
    <nav className="w-full h-[70px] absolute top-10 md:top-5 z-20">
      <div className="max-w-[1420px] w-10/12  h-full mx-auto flex justify-between items-center">
        {/*image container*/}
        <div className=" cursor-pointer ">
          <Image
            src="/img/logo.png"
            alt="Launchy Logo"
            width="140px"
            height="40px"
          />
        </div>
        {/*links container*/}
        <div className="md:flex space-x-4 hidden  ">
          {Links.map((l) => (
            <p
              className="text-white uppercase text-sm cursor-pointer"
              key={l.title}
            >
              {l.title}
            </p>
          ))}
        </div>
        {/*button */}
        <div className="hidden md:block">
          <button className="text-white py-2 px-3 uppercase text-sm navbar_button">
            Charlemos
          </button>
        </div>
        {/*mobile menu Icon*/}
        <div className="md:hidden">
          <img src="/img/menuicon.svg" alt="menu icon" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
