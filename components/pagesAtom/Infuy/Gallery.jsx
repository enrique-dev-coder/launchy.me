const Gallery = () => {
  return (
    <div className="flex flex-col mb-[60px] md:mb-[80px] lg:flex-row gap-4">
      <div className="mb-[30px] flex justify-center md:mb-[60px] lg:mb-0 lg:w-1/3">
        <img
          src="/img/infuy/Mockup.png"
          width={576}
          height={463}
          alt={'Mockup de Infuy creado por Launchy'}
          className="w-full"
        />
      </div>

      {/* Gallery of 12 pictures that are shown in horizontal when there is a desktop view and it´s shown in vertical when it is a mobile view */}
      <div className="grid grid-cols-2 gap-8 md:place-items-center px-[8%] lg:w-2/3 lg:px-0 lg:grid-cols-4 lg:gap-2">
        <img
          src="/img/infuy/60 1.png"
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src="/img/infuy/60 2.png"
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src="/img/infuy/60 7.png"
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src="/img/infuy/60 9.png"
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src="/img/infuy/60 11.png"
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src="/img/infuy/60 13.png"
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src="/img/infuy/60 5.png"
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src="/img/infuy/60 6.png"
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src="/img/infuy/60 8.png"
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src="/img/infuy/60 10.png"
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src="/img/infuy/60 12.png"
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src="/img/infuy/60 14.png"
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />
      </div>
    </div>
  );
};

export default Gallery;
