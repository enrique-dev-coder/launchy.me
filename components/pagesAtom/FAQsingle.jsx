//ELi en general la logica del componente esta bien implementada pero el CSS tenia unos problemas
//sobre todo que como eran cajas absolutas tenias que dejar mucho espacio entre cada renglos
//por que cuando estaban juntas se juntaban los renglones , puse todo en un mismo contenedor para que cada renglon
// agarre su espacio

const FAQsingle = ({ text, answer, type, show, showDispatch }) => {
  return (
    <div
      className="flex border flex-col w-full text-sm md:text-base  relative  mb-[5px] rounded"
      onClick={() => {
        showDispatch({
          type,
        });
      }}
    >
      <div className=" transition-all py-[5px] w-[85%] mx-auto  ">{text}</div>

      <div
        className={`flex  pointer-events-none w-[85%] py-[15px] mx-auto ${
          show ? 'block' : 'hidden'
        } `}
      >
        {answer}
      </div>
      {/*ELi aqui cambie la flechita por un icono y solo le deje la logica con los giros*/}
      <div
        className={`  absolute right-0 translate-y-1 transition-all transform ${
          show ? 'rotate-[180deg] ' : 'rotate-[0deg] '
        } mr-[5%]`}
      >
        <img
          src="/img/ep_arrow-down.svg"
          className="w-[24.5px] h-[24.5px] cursor-pointer"
        />
      </div>
    </div>
  );
};

export default FAQsingle;
