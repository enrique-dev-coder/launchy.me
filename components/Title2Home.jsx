import React from 'react';
import { useMenu } from '../context/MenuContext';

const Title2Home = ({ title, titleENG }) => {
  const { english } = useMenu();
  return (
    <p className="uppercase border border-white py-2 px-6 roboto_condesed  rounded-tr-xl text-[14px] md:text-xl mb-[30px] md:mb-[40px] text-white ">
      {english ? titleENG : title}
    </p>
  );
};

export default Title2Home;
