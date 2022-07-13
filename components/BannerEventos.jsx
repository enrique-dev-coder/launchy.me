import React from "react";
import HomeSectionContainer from "./Wrappers/HomeSectionContainer";

const BannerEventos = () => {
  return (
    <HomeSectionContainer>
      <div className="w-full flex flex-col md:flex-row h-auto md:h-[205px]">
        <div className=" basis-1/2 flex flex-col">
          <div className="flex mb-[30px] md:mb-[40px] ">
            <h2 className="text-white uppercase text-[14px]  md:text-lg  letter_spacing">
              ¡ÚNETE A NUESTROS EVENTOS!
            </h2>
            <img src="/img/right.svg" alt="arrow" className="" />
          </div>
          <div className="flex flex-col  flex-1">
            <h2 className="gradient_text_banner mb-[30px] md:mb-0 roboto_condesed font-bold">
              LA CIENCIA DETRAS DEL CUSTOMER JOURNEY MAP
            </h2>
          </div>
          <div className="flex mb-[30px] md:mb-0">
            <a href="/contact">
              <button className="text-white py-2 px-3 uppercase text-sm navbar_button">
                Reserva tu entrada
              </button>
            </a>
          </div>
        </div>
        <div className="flex basis-1/2 bg-[url(/img/banner_eventos.png)] h-[200px] md:h-full bg-center  bg-no-repeat bg-cover">
          <div className="w-[50%]"></div>
          <div className="w-[50%]">
            <div className="h-full md:h-[50%] flex flex-col w-10/12 mx-auto  justify-end">
              <p className="masterclass">Masterclass</p>
              <p
                className=" text-right  "
                style={{ color: "#211539", borderBottom: "1px solid #211539" }}
              >
                4 de Agosto - 18 pm ARG
              </p>
            </div>
          </div>
        </div>
      </div>
    </HomeSectionContainer>
  );
};

export default BannerEventos;
