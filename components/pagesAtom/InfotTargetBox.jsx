import React from 'react'
import Image from 'next/image';

const InfotTargetBox = ({number, imgURL, width, height, alt, color}) => {
  return (
    <div
        className={`flex flex-col gap-2 w-full lg:w-1/4 border border-black p-8 bg-gradient-to-t ${color} rounded-lg`}
    >
        <div className={`w-[${width}px] h-[${height}px] mb-0.5`}>
            <Image
                src={imgURL}
                width={width}
                height={height}
                alt={alt}
            />
        </div>
        <p>{number}</p>
    </div>
  )
}

export default InfotTargetBox