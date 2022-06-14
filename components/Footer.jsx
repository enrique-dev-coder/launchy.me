import React from 'react';
import HomeSectionContainer from './Wrappers/HomeSectionContainer';

const linkData = [
  { id: 1, link: 'Soluciones' },
  { id: 2, link: 'Proyectos' },
  { id: 3, link: 'Cultura' },
  { id: 4, link: 'Blog' },
  { id: 5, link: 'Free resources' },
];

const Footer = () => {
  return (
    <div className="w-full border-y border-white mt-[100px]  ">
      <div className="my-[40px] max-w-[906px] mx-auto">
        <div
          className="w-full flex flex-col justify-center"
          style={{ color: 'white' }}
        >
          <div className="h-[150px] mb-[40px]">
            <div className="flex h-full">
              <div className="basis-1/3 flex flex-col">
                <div className="flex-1">
                  <img src="/img/logo.png" />
                </div>
                <p className="text-white uppercase cursor-pointer  text-[26px] underline roboto_condesed ">
                  READY TO LAUNCH?
                </p>
                <p className="text-white uppercase cursor-pointer  text-[26px] underline roboto_condesed ">
                  CHARLEMOS {'>>'}
                </p>
              </div>
              <div className="basis-1/3 flex flex-col  justify-between">
                {linkData.map((l, i) => (
                  <p key={i} className="roboto_condesed ml-5 uppercase">
                    {l.link}
                  </p>
                ))}
              </div>
              <div className="basis-1/3 flex flex-col justify-end">
                <div className="flex ml-auto w-3/5 justify-around">
                  <img src="/img/socialMedia/insta.svg" />
                  <img src="/img/socialMedia/tiktok.svg" />
                  <img src="/img/socialMedia/twitter.svg" />
                  <img src="/img/socialMedia/linkedin.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex text-sm justify-between">
            <p className="underline">Launchy 2022. Derechos reservados.</p>
            <p className="underline">
              Trabajo inmersivo hecho en base a Tycho Magnetic Anomaly
            </p>
            <p className="underline">Políticas de Privacidad</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
