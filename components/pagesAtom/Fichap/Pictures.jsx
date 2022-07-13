import React, { Fragment } from 'react';
import ProcessOrSolution from '../ProcessOrSolution';
import FadeInElement from '../FadeInElement';
import FirstFrameSecondParagraph from '../../../public/img/fichap/First Frame (2).png';
import SecondFrameSecondParagraph from '../../../public/img/fichap/Second Frame (2).png';
import FirstFrameThirdParagraph from '../../../public/img/fichap/First Frame (3).png';
import FirstFrameFourthParagraph from '../../../public/img/fichap/First Frame (4).png';
import SecondFrameFourthParagraph from '../../../public/img/fichap/Second Frame (4).png';
import FirstBanner from '../../../public/img/fichap/Banner (1).png';
import SecondBanner from '../../../public/img/fichap/Banner (2).png';
import Wrapper from '../Wrapper';

//AportandoValor text
const aportandoValor =
  'Parte del trabajo se trasladó a generar una guía para los potenciales clientes de Fichap la cual trabajamos en conjunto y la cual se dinfundió de manera orgánica de manera exitosa. Seguimos colaborando con su equipo interno, en búsquedas de constantes mejoras.';

const Pictures = () => {
  return (
    <Fragment>
      <FadeInElement>
        <Wrapper>
          <div className="mb-[30px] md:mb-[40px] roboto_normal text-[14px]">
            Reformular puntos claves de contenido para la audiencia así como dar
            un rediseño a la página apegado al manual de marca que tienen ha
            sido una gran experiencia enriquecedora para ambos equipos. Fuimos
            mas allá de la web para colaborar con las estrategias digitales para
            el customer journey map del cliente.
          </div>

          <div className="flex gap-6 flex-col md:flex-row items-center xl:justify-center mb-[30px] md:mb-[40px]">
            <div className="flex justify-center">
              <img
                src={FirstFrameSecondParagraph}
                width={421}
                height={244}
                alt={'Mockup de Fichap creado por Launchy'}
              />
            </div>

            <div className="flex justify-center">
              <img
                src={SecondFrameSecondParagraph}
                width={421}
                height={244}
                alt={'Mockup de Fichap creado por Launchy'}
              />
            </div>
          </div>
        </Wrapper>
      </FadeInElement>

      <FadeInElement>
        <div className="relative h-[220px] sm:h-[320px] lg:h-[600px] mb-[30px] md:mb-[40px] flex justify-center px-[8%]">
          <div className="hidden sm:block absolute z-10 bg-[#C9F8DC] w-2/3 h-[50%] right-0 bottom-[2%] lg:bottom-[7%]"></div>

          <div className="absolute z-20 top-[0%] h-[200px] w-[300px] sm:w-[500px] sm:h-[300px] lg:w-[871px] lg:h-[506px]">
            <img
              src={FirstFrameThirdParagraph}
              width={871}
              height={506}
              alt={'Mockup de Fichap creado por Launchy'}
            />
          </div>
        </div>
      </FadeInElement>

      <ProcessOrSolution title="APORTANDO VALOR..." text={aportandoValor} />

      <FadeInElement>
        <div className="flex justify-center gap-4 mb-[30px] md:mb-[40px] bg-[#E6E6E6] py-2">
          <div className="w-[115px] sm:w-[200px] md:w-[300px] lg:w-[400px] xl:w-[425px]">
            <img
              src={FirstFrameFourthParagraph}
              width={425}
              height={467}
              alt={'Mockup de Fichap creado por Launchy'}
            />
          </div>

          <div className="w-[180px] sm:w-[280px] md:w-[450px] flex">
            <img
              src={SecondFrameFourthParagraph}
              width={611}
              height={450}
              className="w-full h-full"
              alt={'Mockup de Fichap creado por Launchy'}
            />
          </div>
        </div>
      </FadeInElement>

      <FadeInElement>
        <div className="flex flex-col gap-2 lg:flex-row justify-center px-[8%] lg:px-0 mb-[60px] md:mb-[80px]">
          <div className="flex justify-center">
            <img
              src={FirstBanner}
              width={540}
              height={213}
              alt={'Mockup de Fichap creado por Launchy'}
            />
          </div>

          <div className="flex justify-center">
            <img
              src={SecondBanner}
              width={540}
              height={213}
              alt={'Mockup de Fichap creado por Launchy'}
            />
          </div>
        </div>
      </FadeInElement>
    </Fragment>
  );
};

export default Pictures;
