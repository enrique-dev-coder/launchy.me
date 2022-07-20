import Wrapper from '../Wrapper';

const Pictures = () => {
  return (
    <Wrapper
      style={
        'max-w-[640px] lg:max-w-[906px] mx-auto px-[4%] sm:px-[2%] lg:px-0 relative'
      }
    >
      <div className="mb-[40px] md:mb-[60px] overflow-x-auto">
        <div className="border pl-4 py-[3%] mb-[30px] md:mb-[40px] w-[800px] flex justify-center shrink-0 scrollbar lg:w-full">
          <img
            width={776}
            height={393}
            src="/img/Grafico-final.png"
            alt="gafico final"
            className="w-full"
          />
        </div>
      </div>

      <img
        src="/img/team/generando-leads.png"
        alt="generando leads"
        className="w-[118px] h-[118px] absolute z-10 right-[-6%] top-[-12%] hidden lg:block"
      />
    </Wrapper>
  );
};

export default Pictures;
