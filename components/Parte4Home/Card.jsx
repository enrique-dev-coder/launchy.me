import React from 'react';
import Link from 'next/link';
import TranslatedParagraph from '../TranslatedParagraph';
const Card = ({ path, desc, video, link, descEng }) => {
  return (
    <a href={link}>
      <Link href={link}>
        <div className="flex cursor-pointer text-white md:flex-col  border border-white w-full md:w-[279px] md:h-[339px] mb-[30px] md:mb-[40px]">
          <div className="w-full   md:h-[266px]">
            {video ? (
              <video
                src={path}
                autoPlay
                loop
                muted
                playsInline={true}
                className="w-[158.5px] md:w-[280px] md:h-[262px] image_border"
              />
            ) : (
              <img
                src={path}
                className="image_border image_dimensions"
                alt="casos de exito"
              />
            )}
          </div>
          <div className="w-full h-full">
            <div
              className={`${
                video && 'mt-[4px]'
              } h-[100px] md:h-[40px] flex flex-col items-center justify-center image_border`}
            >
              <TranslatedParagraph
                textSpanish={desc}
                textEnglish={descEng}
                classes={
                  'uppercase text-[12px] md:text-[11px] w-11/12 mx-auto '
                }
              />
            </div>
            <div
              className={`text-[12px] md:text-[13px]    w-11/12 mx-auto flex md:justify-between cursor-pointer  mt-2`}
            >
              <TranslatedParagraph
                textSpanish={'Mirá el proyecto'}
                textEnglish={'Look the project'}
              />
              <p></p>
              <img
                src="/img/right.svg"
                alt="right"
                className="w-[30px] md:w-[20px] h-[20px] ml-2 md:ml-0"
              ></img>
            </div>
          </div>
        </div>
      </Link>
    </a>
  );
};

export default Card;
