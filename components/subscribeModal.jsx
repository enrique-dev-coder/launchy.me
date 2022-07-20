import React from 'react';
import Lottie from 'react-lottie';
import { tite, flor } from '../public/animation.json';
import HomeButton from './HomeButton';
const subscribeModal = ({ background, closeModal }) => {
  const LottieOptions = {
    loop: true,
    autoplay: true,
    animationData: flor,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className="w-full flex items-center justify-center h-screen fixed z-40 inset-0 bg-black/75">
      <div
        className="bg-white w-4/5 h-[80vh] md:h-[450px] flex relative max-w-[910px] border border-white overflow-hidden"
        style={{ background }}
      >
        <img
          src="/img/close.svg"
          alt="close"
          className="absolute  right-0 cursor-pointer -translate-x-4 translate-y-5"
          onClick={() => closeModal()}
        />
        <div className="absolute bottom-0 translate-y-[100px] md:translate-y-[55px]">
          <Lottie options={LottieOptions} height={400} width={400} />
        </div>
        <div className="w-[40%] hidden md:block"></div>
        <div className="w-full md:w-[60%] h-full flex justify-center items-center">
          <div className="text-white">
            <h2 className="uppercase text-center md:text-left text-[30px] mb-[10px]">
              ¡Gracias por suscribirte!
            </h2>
            <p className="uppercase text-center md:text-left text-lg mb-[20px]">
              tu suscripción fue realizada correctamente
            </p>
            <div className="flex justify-center md:justify-start">
              <HomeButton
                link={'/#free-resources'}
                title={'explora nuestros free resources'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default subscribeModal;
