import { useState } from 'react';
import { useMenu } from '../context/MenuContext';
const LanguageButton = () => {
  const [lang, setLang] = useState(false);
  const { english, setEnglish } = useMenu();

  const languageClick = () => {
    setEnglish(!english);
    setLang(false);
  };

  return (
    <div className="absolute  translate-y-12">
      <div className="cursor-pointer  flex items-center">
        <p className="text-white   text-sm mr-4 ">{english ? 'ENG' : 'ESP'}</p>
        <img
          src="/img/arrow_down.svg"
          alt="arrow down"
          className={`${lang && 'rotate-180'} transition-all`}
          onClick={() => setLang(!lang)}
        />
      </div>
      {lang && (
        <div
          className="cursor-pointer bg-black flex items-center justify-center w-[50px] py-1"
          onClick={languageClick}
        >
          <p className="text-white   text-sm  text-center ">
            {english ? 'ESP' : 'ENG'}
          </p>
        </div>
      )}
    </div>
  );
};

export default LanguageButton;
