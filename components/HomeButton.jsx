import React from 'react';

const HomeButton = ({ title }) => {
  return (
    <button className="text-white py-2 px-3 uppercase text-sm navbar_button">
      {title}
    </button>
  );
};

export default HomeButton;
