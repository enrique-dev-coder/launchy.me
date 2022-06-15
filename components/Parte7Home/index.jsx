import React from 'react';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';
<<<<<<< HEAD

=======
import Blog from './Blog';
import FreeResources from './FreeResource';
>>>>>>> main
const index = () => {
  return (
    <HomeSectionContainer>
      <div className="w-full h-full">
<<<<<<< HEAD
        <h2 className="text-white text-center  font-medium mb-[40px] uppercase ">
          ¡GRACIAS POR LLEGAR HASTA ACÁ! TEN ESTOS:{' '}
        </h2>
        <div>
          <h2 className="text-black uppercase  text-center mb-[40px] roboto_condesed flex justify-between text-[95px]  resource_text">
            <span>Free</span> <span>Resources</span>
          </h2>
        </div>
=======
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
>>>>>>> main
      </div>
    </HomeSectionContainer>
  );
};

export default index;
