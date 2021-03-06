import React from 'react';
import Wrapper from '../Wrapper';
import Link from 'next/link';
import { useMenu } from '../../../context/MenuContext';
const ServicesText = ({
  title,
  titleEng,
  text,
  textEng,
  picture,
  id,
  options,
  optionsEng,
}) => {
  const { english } = useMenu();
  return (
    <Wrapper>
      <div
        className="flex flex-col lg:flex-row py-[3%]  gap-4 xl:gap-10 my-[60px] lg:my-[80px]"
        id={`${id}`}
      >
        <div className="flex flex-col flex-1 items-center">
          <h2 className="uppercase text-white lg:hidden text-[18px] tracking-[.125rem] mb-[30px] mr-auto font-roboto">{`WE ${
            english ? titleEng : title
          }`}</h2>

          <img
            src={picture}
            alt="services"
            className="z-20 sm:max-w-[438px] sm:max-h-[259px] mr-auto lg:ml-auto"
          />
        </div>

        <div className="flex flex-col flex-1 lg:order-first gap-5">
          <h2 className="uppercase text-white hidden lg:block text-[28px] ">{`WE ${title}`}</h2>

          <p className="text-slate-100 text-[14px] roboto_normal">
            {english ? textEng : text}
          </p>

          <ul className="flex flex-col">
            {(english ? optionsEng : options).map((o, i) => (
              <li key={i} className="text-slate-100 text-[14px]">
                {o}
              </li>
            ))}
          </ul>

          <Link href="/contact">
            <button className="text-white py-2 px-3 uppercase text-sm navbar_button mt-4 w-[134px] h-[38px]">
              {english ? 'Let´s talk' : 'Charlemos'}
            </button>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default ServicesText;
