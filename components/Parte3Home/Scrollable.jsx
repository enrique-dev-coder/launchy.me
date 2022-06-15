import { useRef, useLayoutEffect, useEffect } from 'react';

const Scrollable = ({ id, title, options, onClick, actual }) => {
  const areaRef = useRef();
  const ref = useRef();

  return (
    <div ref={areaRef} className="flex flex-col text-white mb-5">
      <div
        className="flex items-center space-x-3 cursor-pointer"
        onClick={onClick}
      >
        <div
          className={`w-[15px] h-[15px] rounded-full transition-all duration-1000 border  border-white ${
            id === actual && 'bg-white'
          } `}
        ></div>
<<<<<<< HEAD
        <h2 ref={ref} className="uppercase text-lg">
=======
        <h2 ref={ref} className="uppercase text-[14px]  md:text-lg">
>>>>>>> main
          {title}
        </h2>
        <img src="/img/right.svg" alt="right" />
      </div>
      {id === actual && (
        <div className="">
          {options.map((o, i) => (
            <div className="flex items-center space-x-3" key={i}>
              <div className="w-[15px] h-[15px] rounded-full border border-black "></div>
<<<<<<< HEAD
              <p>{o}</p>
=======
              <p className="text-[14px]  md:text-lg">{o}</p>
>>>>>>> main
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Scrollable;
