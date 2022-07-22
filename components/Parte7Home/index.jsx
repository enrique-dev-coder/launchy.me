import React from 'react';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';
import Blog from './Blog';
import FreeResources from './FreeResource';
import TranslatedParagraph from '../TranslatedParagraph';
const index = () => {
  return (
    <HomeSectionContainer>
      <div className="w-full h-full" id="free-resources">
        <TranslatedParagraph
          textSpanish={'¡GRACIAS POR LLEGAR HASTA ACÁ! TEN ESTOS:'}
          textEnglish={'THANKS FOR READING UP UNTIL NOW! YOU CAN HAVE THESE:'}
          classes={'text-white text-center   font-medium mb-[30px] uppercase'}
        />
        <div>
          <h2 className="text-black uppercase  text-center mt-[-40px] mb-[30px] md:mb-[40px] roboto_condesed flex flex-col md:flex-row  justify-between text-[40px] md:text-[105px]  resource_text">
            <span>Free</span> <span>Resources</span>
          </h2>
        </div>
        <Blog />
        <FreeResources />
      </div>
    </HomeSectionContainer>
  );
};

export default index;
