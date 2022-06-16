import React from 'react';
import Image from 'next/image';

const Card = ({ title, path, desc }) => {
  return (
    <div className="flex flex-col justify-center space-x-10 md:space-x-0 items-center">
      <div className="flex justify-center w-[220px]">
        <Image src={path} alt="servicios" width="96px" height="96px" />
      </div>
      <div
        className="text-white roboto_normal ml-0  text-[14px] w-[180px] h-[100px] text-center mt-[20px]"
        style={{ marginLeft: '0px' }}
      >
        <p className="w-11/12 mx-auto">{desc}</p>
      </div>
    </div>
  );
};

export default Card;
