import React from 'react';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';
import Blog from './Blog';
import FreeResources from './FreeResource';
const index = () => {
  return (
    <HomeSectionContainer>
      <div className="w-full h-full">
        <h2 className="text-white text-center   font-medium mb-[40px] uppercase ">
          ¡GRACIAS POR LLEGAR HASTA ACÁ! TEN ESTOS:
        </h2>
        <div>
          <h2 className="text-black uppercase  text-center mb-[40px] roboto_condesed flex flex-col md:flex-row  justify-between text-[40px] md:text-[105px]  resource_text">
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
