import React from 'react';
import { useMenu } from '../context/MenuContext';

const Title1Home = ({ title, titleENG }) => {
  const { english } = useMenu();

  return (
    <div className="text-center uppercase text-[16px] md:text-xl mb-[30px] md:mb-[40px] roboto_condesed text-white">
      {english ? titleENG : title}
    </div>
  );
};

export default Title1Home;
