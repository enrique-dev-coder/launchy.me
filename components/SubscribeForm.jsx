import HomeSectionContainer from './Wrappers/HomeSectionContainer';

import React from 'react';

const Input = ({ labelName, type }) => {
  return (
    <div className="flex w-full mb-[30px] md:mb-0 md:w-[50%] flex-col">
      <label className="text-white mb-2">
        {labelName} <span className=" text-red-500">*</span>
      </label>
      <input
        type={type}
        className="bg-transparent border border-white w-[90%] text-white caret-white px-3 py-2"
      />
    </div>
  );
};

const SubscribeForm = () => {
  return (
    <HomeSectionContainer>
      <div className="w-full relative">
        <img
          src="/img/planet.png"
          className="absolute right-0 z-0 translate-x-[150px] -translate-y-[110px]  md:-translate-y-[170px]"
        />
        <p className="uppercase font-bold relative   text-white md:text-[22px] roboto_condesed mb-[30px] md:mb-[40px] ">
          SUSCRIBITE A NUESTRA NAVE!
        </p>
        <p className="text-white text-[14px] relative md:text-base mb-2 ">
          Te enviaremos recursos gratuitos y novedades que AMARAS e impulsarán
          tu empresa. NO SPAM, I SWEAR.
        </p>
        <form className="relative">
          <div className="flex flex-col md:flex-row w-full md:w-[80%]">
            <Input labelName={'Name'} type="text" />
            <Input labelName={'Mail'} type="mail" />
          </div>
          <button
            type="submit"
            className="text-white py-2 px-3 uppercase text-sm navbar_button md:mt-[40px]"
          >
            me uno a la nave
          </button>
          <p className="mt-[20px] text-sm" style={{ color: '#DCDCDC' }}>
            Acepto las{' '}
            <span className="underline">Politicas de Privacidad </span> al
            suscribirme.
          </p>
        </form>
      </div>
    </HomeSectionContainer>
  );
};

export default SubscribeForm;
