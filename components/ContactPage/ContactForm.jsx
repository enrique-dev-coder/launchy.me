import React from 'react';
import HomeSectionContainer from '../../components/Wrappers/HomeSectionContainer';

const InputContactForm = ({ title, type, placeholder }) => {
  return (
    <div className="flex flex-col w-[45%]">
      <label className="text-white font-normal text-base roboto_normal mb-[10px] ">
        {title}
      </label>
      <input
        type={type}
        className=" bg-transparent border border-white   rounded text-white/70 roboto_normal p-2"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

const ContactForm = () => {
  return (
    <HomeSectionContainer>
      <div className="w-[550px]">
        <h2 className=" text-white font-medium uppercase text-[28px] mb-[30px]">
          Ready to Launch?
        </h2>
        <form className="w-full">
          <div className="flex justify-between">
            <InputContactForm
              type={'text'}
              title={'¿Cómo te llamas? *'}
              placeholder="Nicolas Tesla"
            />
            <InputContactForm
              type={'mail'}
              title={'Tu Mail *'}
              placeholder="nicolas@empresacool.com"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white font-normal text-base roboto_normal mb-[10px] ">
              Cuéntanos cómo podemos impulsarte...
            </label>
            <textarea
              className=" bg-transparent border border-white mb-[20px]   rounded text-white/70 roboto_normal p-2"
              maxLength={300}
              rows={4}
              placeholder="Vamos a romper el hielo empezando por acá"
            />
          </div>
          <button
            type="submit"
            className="roboto_normal text-white  py-2 px-3 uppercase text-sm navbar_button"
          >
            Charlemos
          </button>
        </form>
      </div>
    </HomeSectionContainer>
  );
};

export default ContactForm;
