import FadeInElement from '../FadeInElement';

const Pictures = () => {
  return (
    <div className="flex flex-col mb-[60px] md:mb-[80px]">
      <FadeInElement>
        <div className="mb-[60px] md:mb-[80px] px-[8%] lg:px-0 lg:grid lg:place-content-center">
          <img
            src="/img/infuy/ONE PAGE - CASOS DE EXITO 3 1.png"
            width={977}
            height={580}
            alt={'Mockup de Infuy creado por Launchy'}
            className="w-full"
          />
        </div>
      </FadeInElement>

      <FadeInElement>
        <div className="flex flex-col lg:flex-row lg:pr-[12%] lg:mb-[80px] xl:pl-[7%] xl:pr-[17%]">
          <div className="px-[8%] mb-[30px] md:mb-0 flex justify-center lg:px-0 lg:w-1/2 lg:h-[665px] lg:justify-end">
            <img
              src="/img/infuy/iOS IG Grid Mock 1.png"
              width={414}
              height={723}
              alt={'Mockup de Infuy creado por Launchy'}
              className="w-full"
            />
          </div>

          <div className="px-[8%] mb-[30px] md:mb-0 flex justify-center lg:px-0 lg:w-1/2 lg:h-[665px]">
            <img
              src="/img/infuy/Group 4 8095914.png"
              width={538}
              height={665}
              alt={'Mockup de Infuy creado por Launchy'}
              className="w-full"
            />
          </div>
        </div>
      </FadeInElement>

      <FadeInElement>
        <img
          src="/img/infuy/Portadas.png"
          width={1440}
          height={582}
          alt={'Mockup de Infuy creado por Launchy'}
          className="w-full"
        />
      </FadeInElement>
    </div>
  );
};

export default Pictures;
