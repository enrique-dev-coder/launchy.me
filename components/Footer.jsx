import React from 'react';
import Link from 'next/link';
import TranslatedParagraph from './TranslatedParagraph';
const linkData = [
  { id: 1, link: 'Soluciones', linkEng: 'Services', src: '/services' },
  { id: 2, link: 'Proyectos', linkEng: 'Projects', src: '#proyectos' },
  { id: 3, link: 'Cultura', linkEng: 'Culture', src: '/culture' },
  { id: 4, link: 'Blog', linkEng: 'Blog', src: '/homeblog' },
  {
    id: 5,
    link: 'Free resources',
    linkEng: 'Free resources',
    src: '#free-resources',
  },
];

const whiteIcons = [
  {
    src: 'https://www.instagram.com/launchy.me/',
    path: '/img/socialMedia/insta.svg',
  },
  {
    src: 'https://www.tiktok.com/@launchy.me',
    path: '/img/socialMedia/tiktok.svg',
  },
  {
    src: 'https://twitter.com/Launchy_me',
    path: '/img/socialMedia/twitter.svg',
  },
  {
    src: 'https://www.linkedin.com/company/launchy-me/',
    path: '/img/socialMedia/linkedin.svg',
  },
];
const blueIcons = [
  {
    src: 'https://www.instagram.com/launchy.me/',
    path: '/img/socialMedia/insta_blue.svg',
  },
  {
    src: 'https://www.tiktok.com/@launchy.me',
    path: '/img/socialMedia/tiktok_blue.svg',
  },
  {
    src: 'https://twitter.com/Launchy_me',
    path: '/img/socialMedia/twitter_blue.svg',
  },
  {
    src: 'https://www.linkedin.com/company/launchy-me/',
    path: '/img/socialMedia/linkedin_blue.svg',
  },
];

const Footer = ({ blue }) => {
  return (
    <div
      className={`w-full border-y ${
        blue ? 'border-[#211539]' : 'border-white'
      }   md:mt-[100px]`}
    >
      <div className="my-[40px] w-4/5 max-w-[906px] mx-auto">
        <div
          className="w-full flex flex-col justify-center"
          style={{ color: `${blue ? '#211539' : 'white'}` }}
        >
          <div className="h-auto md:h-[150px] mb-[40px]">
            <div className="flex flex-col md:flex-row h-full">
              <div className="basis-1/3 flex flex-col mb-[60px] md:mb-0">
                <div className="flex-1 mb-[30px] md:mb-0">
                  {blue ? (
                    <img src="/img/logo_blue.png" alt="logo blue" />
                  ) : (
                    <img src="/img/logo.png" alt="logo blue" />
                  )}
                </div>
                <p className=" uppercase cursor-pointer text-[22px] gradient_text_banner  md:text-[26px] underline roboto_condesed ">
                  READY TO LAUNCH?
                </p>
                <a href="/contact">
                  <Link href={'/contact'}>
                    <TranslatedParagraph
                      textEnglish={'Contact us'}
                      textSpanish="CHARLEMOS"
                      classes={
                        'uppercase cursor-pointer text-[22px]  md:text-[26px] underline roboto_condesed '
                      }
                    />
                  </Link>
                </a>
              </div>
              <div className="basis-1/3 flex flex-col mb-[30px] md:mb-0  justify-between">
                {linkData.map((l, i) => (
                  <a href={l.src}>
                    <Link href={l.src}>
                      <TranslatedParagraph
                        key={i}
                        textSpanish={l.link}
                        textEnglish={l.linkEng}
                        classes="roboto_condesed mb-[10px] md:mb-0  md:ml-5 uppercase cursor-pointer"
                      />
                    </Link>
                  </a>
                ))}
              </div>
              <div className="basis-1/3 md:flex flex-col   justify-end">
                <div className="flex md:ml-auto w-3/5 justify-between md:justify-around">
                  {blue
                    ? blueIcons.map((w) => (
                        <a
                          target="_blank"
                          rel="noopener noreferrer "
                          href={w.src}
                        >
                          <img
                            src={w.path}
                            alt="logo"
                            className="w-[25px] h-[25px] cursor-pointer"
                          />
                        </a>
                      ))
                    : whiteIcons.map((w) => (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          href={w.src}
                        >
                          <img
                            src={w.path}
                            alt="logo"
                            className="w-[25px] h-[25px] cursor-pointer"
                          />
                        </a>
                      ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col md:flex-row text-sm justify-between">
            <TranslatedParagraph
              textSpanish={'Launchy 2022. Derechos reservados.'}
              textEnglish="Launchy 2022. All rights reserved"
              classes={'underline mb-5 md:mb-0'}
            />
            <TranslatedParagraph
              textSpanish={
                'Trabajo inmersivo hecho en base a Tycho Magnetic Anomaly'
              }
              textEnglish={'Immersive work based on a Tycho Magnetic Anomaly'}
              classes="underline mb-5 md:mb-0"
            />
            <a href="/privacy">
              <Link href={'/privacy'}>
                <TranslatedParagraph
                  textSpanish={'Políticas de Privacidad'}
                  textEnglish={'Privacy Ploicies'}
                  classes="underline mb-5 md:mb-0 cursor-pointer"
                />
              </Link>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
