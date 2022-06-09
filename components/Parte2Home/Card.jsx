import React from 'react';
import Image from 'next/image';

const Card = ({ title, path, desc }) => {
  return (
    <div className="flex flex-col items-center">
      <Image src={path} alt="servicios" width="96px" height="96px" />
      <p className="text-white w-[180px] text-center mt-[20px]">{desc}</p>
    </div>
  );
};

export default Card;
