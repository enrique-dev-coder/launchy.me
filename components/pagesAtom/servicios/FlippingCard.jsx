import { useState } from 'react';
import { useMenu } from '../../../context/MenuContext';
const FlippingCard = ({ picture, title, link, video, titleEng }) => {
  const [flip, setFlip] = useState(false);

  const handleFlipping = () => {
    setFlip(true);
  };

  const stopFlipping = () => {
    setFlip(false);
  };
  const { english } = useMenu();
  return (
    <div
      className={`border border-white flex flex-col w-[200px] shrink-0 ${
        flip && 'animate-flip'
      }`}
      onMouseOver={handleFlipping}
      onMouseOut={stopFlipping}
    >
      <a href={`#${link}`}>
        {video ? (
          <video
            className="z-20 relative"
            src={picture}
            autoPlay
            loop
            muted
          ></video>
        ) : (
          <img src={picture} alt="image" className="z-20 relative" />
        )}
      </a>
      <h3 className="font-roboto border-t border-white text-white text-center text-[18px] uppercase py-[4%]">
        {english ? titleEng : title}
      </h3>
    </div>
  );
};

export default FlippingCard;
