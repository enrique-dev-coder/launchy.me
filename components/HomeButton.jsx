import React from 'react';
import Link from 'next/link';
import { useMenu } from '../context/MenuContext';
const HomeButton = ({ title, titleEng, link }) => {
  const { english } = useMenu();
  return (
    <Link href={link}>
      <button className="text-white py-2 px-3 uppercase text-sm navbar_button">
        {english ? titleEng : title}
      </button>
    </Link>
  );
};

export default HomeButton;
