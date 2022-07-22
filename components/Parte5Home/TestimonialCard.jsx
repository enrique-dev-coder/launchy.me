import React from 'react';
import TranslatedParagraph from '../TranslatedParagraph';
const TestimonialCard = ({ desc, name, empresa, job, foto, descEng }) => {
  return (
    <div className="w-[275px] h-[186px] border flex flex-col border-white relative overflow-hidden">
      <div className="absolute bottom-0 z-0">
        <img src="/img/testimonios/card_bg.svg" alt="testimonios" />
      </div>
      <div className="text-white relative flex flex-col justify-around w-10/12 h-[90%] m-auto">
        <TranslatedParagraph
          textEnglish={descEng}
          textSpanish={desc}
          classes={'text-[13px] roboto_normal flex-1'}
        />

        <div className="flex">
          <img
            src={foto}
            className="w-[40px] h-[40px] rounded-full"
            alt="foto"
          />
          <div className="flex-col ml-2">
            <p className="font-bold text-sm">{empresa}</p>
            <p className="text-sm">
              {job} - {name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
