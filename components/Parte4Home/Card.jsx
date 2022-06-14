import React from 'react';
import Image from 'next/image';
const Card = ({ path, desc, video }) => {
  return (
    <div className="flex text-white flex-col border border-white w-[279px] h-[339px] mb-[40px]">
      <div className="w-full ">
        {video ? (
          <video
            src={path}
            autoPlay
            loop
            muted
            playsInline={true}
            className="w-[280px] h-[262px] image_border"
          />
        ) : (
          <Image
            src={path}
            width="280px"
            height="262px"
            className="image_border"
          />
        )}
      </div>
      <div className="h-full">
        <div className="h-[40px] flex-col items-center image_border ">
          <p className="uppercase text-[11px] w-11/12 mx-auto ">{desc}</p>
        </div>
        <div className="text-[11px] h-full w-11/12 mx-auto flex justify-between cursor-pointer  mt-2">
          <p>Mirá el proyecto</p>
          <img src="/img/right.svg" className="w-[20px] h-[20px]"></img>
        </div>
      </div>
    </div>
  );
};

export default Card;
