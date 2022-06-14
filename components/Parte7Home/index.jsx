import React from 'react';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';

const index = () => {
  return (
    <HomeSectionContainer>
      <div className="w-full h-full">
        <h2 className="text-white text-center  font-medium mb-[40px] uppercase ">
          ¡GRACIAS POR LLEGAR HASTA ACÁ! TEN ESTOS:{' '}
        </h2>
        <div>
          <h2 className="text-black uppercase  text-center mb-[40px] roboto_condesed flex justify-between text-[95px]  resource_text">
            <span>Free</span> <span>Resources</span>
          </h2>
        </div>
      </div>
    </HomeSectionContainer>
  );
};

export default index;
