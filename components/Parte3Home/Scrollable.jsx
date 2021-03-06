import { useRef } from 'react';
import Link from 'next/link';
import { useMenu } from '../../context/MenuContext';
const Scrollable = ({
  id,
  title,
  options,
  onClick,
  actual,
  titleEng,
  optionsEng,
}) => {
  const areaRef = useRef();
  const ref = useRef();
  const { english } = useMenu();
  return (
    <>
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
          <h2 ref={ref} className="uppercase text-[14px]  md:text-lg">
            {english ? titleEng : title}
          </h2>
          <img src="/img/right.svg" alt="right" />
        </div>
        {id === actual && (
          <div className="">
            {
              //trukzo para  hace run map condicional
              (english ? optionsEng : options).map((o, i) => (
                <Link href={'/services'}>
                  <div
                    className="flex items-center space-x-3 cursor-pointer"
                    key={i}
                  >
                    <div className="w-[15px] h-[15px] rounded-full border border-black "></div>
                    <p className="text-[14px]  md:text-lg">{o}</p>
                  </div>
                </Link>
              ))
            }
          </div>
        )}
      </div>
    </>
  );
};

export default Scrollable;
