import React from 'react';

const TestimonialCard = ({ desc, name, empresa, job, foto }) => {
  return (
    <div className="w-[275px] h-[186px] border flex flex-col border-white relative overflow-hidden">
      <div className="absolute bottom-0 z-0">
        <img src="/img/testimonios/card_bg.svg" />
      </div>
      <div className="text-white relative flex flex-col justify-around w-10/12 h-[90%] m-auto">
        <p className="text-[13px] roboto_normal">{desc}</p>
        <div className="flex">
          <img src={foto} className="w-[40px] h-[40px] rounded-full" />
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
