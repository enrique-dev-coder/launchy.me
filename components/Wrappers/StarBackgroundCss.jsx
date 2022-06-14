import React from 'react';

const StarBackgroundCss = ({ children }) => {
  return (
    <div className="starbg relative">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      {children}
    </div>
  );
};

export default StarBackgroundCss;
