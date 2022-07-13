import React from 'react';

const InfotTargetBox = ({ number, imgURL, width, height, alt, color }) => {
  return (
    <div
      className={`flex flex-col gap-2 w-full lg:w-1/4 border border-black p-8 bg-gradient-to-t ${color} rounded-[.2rem]`}
    >
      <div className={`w-[${width}px] h-[${height}px] mb-0.5`}>
        <img src={imgURL} alt={alt} />
      </div>
      <p className="roboto_normal text-[13px]">{number}</p>
    </div>
  );
};

export default InfotTargetBox;
