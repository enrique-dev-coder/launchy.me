import React from 'react';
import Wrapper from '../Wrapper';
import Lottie from 'react-lottie';
import TranslatedParagraph from '../../TranslatedParagraph';
import { listData } from '../../../public/Data';
import { useMenu } from '../../../context/MenuContext';
import { circulo } from '../../../public/animation.json';

const CJMPicture = () => {
  const { english } = useMenu();
  const LottieOptions = {
    loop: true,
    autoplay: true,
    animationData: circulo,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <Wrapper>
      <div className="mb-[40px] md:mb-[60px] relative ">
        <div className="bg-[url(/img/Fondo.png)] bg-cover flex flex-col lg:flex-row lg:items-center p-[20px] gap-4 max-w-full">
          <div>
            <Lottie options={LottieOptions} height={300} width={300} />
          </div>
          <div className="">
            <TranslatedParagraph
              classes={
                'text-[#211539] text-left relative z-20 text-[14px] lg:text-[12px] lg:font-medium mb-[6px]'
              }
              textEnglish="That is why at Launchy we identify every aspect of your CJM (Customer Journey Map). Involving from your value proposition, buyer person, competitors, partners, inbound and outbound marketing area, commercial area and the most underated area 'Customer success'. In order to find those actionable, tactics or strategies that can give a 180° turn to your Revenue & Profit indicators. "
              textSpanish="Es por eso que desde Launchy identificamos cada aspecto de tu CJM
            (Customer Journey Map). Involucrando desde tu propuesta de valor,
            buyer persona, competencias, partners, marketing inbound area,
            marketing outbound area, area comercial y el area mas Underrated
            “Customer success area”. Con el fin de encontrar esos accionables,
            tácticas o estrategias que puedan dar un giro 180° a tus
            indicadores de Revenue &amp; Profit."
            />
            <TranslatedParagraph
              classes={
                'font-bold text-2xl text-left text-[#211539] relative z-20 lg:text-[18px] mb-[6px]'
              }
              textSpanish="Nuestras consultorias principales son:"
              textEnglish={'Our main consultancies are:'}
            />
            <ul className="flex flex-col items-start relative z-20">
              {listData.map((l) => (
                <li
                  key={l.id}
                  className="text-[#211539] text-[14px] lg:text-[12px] lg:font-medium"
                >
                  {english ? l.textEng : l.textEsp}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="team-background w-full h-full absolute z-10 top-0 left-0 bottom-0"></div>
      </div>
    </Wrapper>
  );
};

export default CJMPicture;
