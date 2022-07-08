import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ path, link }) => {
  return (
    <Link href={link}>
      <div className="flex cursor-pointer text-white md:flex-col border border-white w-full md:w-[282px] md:h-[224px] mb-[30px] md:mb-[40px]">
        <div className="w-full">
            <img
              src={path}
              alt="casos de exito"
            />
        </div>
        <div className="w-full h-full">
          <div
            className={`text-[12px] md:text-[13px] w-11/12 mx-auto flex md:justify-between cursor-pointer mt-2`}
          >
            <p>Ver caso completo</p>
            <img
              src="/img/right.svg"
              className="w-[30px] md:w-[20px] h-[20px] ml-2 md:ml-0"
            ></img>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Card