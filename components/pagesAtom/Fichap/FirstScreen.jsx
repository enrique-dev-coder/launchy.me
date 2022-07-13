const FirstScreen = () => {
  return (
    <div className="grid grid-cols-5 mb-[60px] md:mb-[80px] px-[2%] gap-3 border shadow-xl">
      {/* one picture */}
      <div className="col-span-1 flex items-center justify-center ">
        <img
          src="/img/fichap/1.png"
          width={144}
          height={313}
          alt={'Mockup de Fichap creado por Launchy'}
          className="w-full h-full"
        />
      </div>

      {/* two-pictures */}
      <div className="col-span-1 flex flex-col items-center justify-center gap-4">
        <img
          src="/img/fichap/1 (2).png"
          width={144}
          height={230}
          alt={'Mockup de Fichap creado por Launchy'}
        />

        <img
          src="/img/fichap/2 (2).png"
          width={144}
          height={291}
          alt={'Mockup de Fichap creado por Launchy'}
        />
      </div>

      {/* three-pictures */}
      <div className="col-span-1 flex flex-col items-center justify-center gap-4">
        <img
          src="/img/fichap/1 (3).png"
          width={144}
          height={57}
          alt={'Mockup de Fichap creado por Launchy'}
        />

        <img
          src="/img/fichap/2 (3).png"
          width={144}
          height={312}
          alt={'Mockup de Fichap creado por Launchy'}
        />

        <img
          src="/img/fichap/3 (3).png"
          width={144}
          height={136}
          alt={'Mockup de Fichap creado por Launchy'}
        />
      </div>

      {/* two-pictures */}
      <div className="col-span-1 flex flex-col items-center justify-center gap-4">
        <img
          src="/img/fichap/1 (4).png"
          width={145}
          height={230}
          alt={'Mockup de Fichap creado por Launchy'}
        />

        <img
          src="/img/fichap/2 (4).png"
          width={145}
          height={291}
          alt={'Mockup de Fichap creado por Launchy'}
        />
      </div>

      {/* one-picture */}
      <div className="col-span-1 flex flex-col flex items-center justify-center">
        <img
          src="/img/fichap/1 (5).png"
          width={145}
          height={312}
          alt={'Mockup de Fichap creado por Launchy'}
        />
      </div>
    </div>
  );
};

export default FirstScreen;
