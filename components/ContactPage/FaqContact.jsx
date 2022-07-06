import React from 'react';
import FAQ from '../pagesAtom/FAQ';
import HomeSectionContainer from '../Wrappers/HomeSectionContainer';
const FaqContact = () => {
  return (
    <HomeSectionContainer>
      <div className="w-[550px]">
        <FAQ />
      </div>
    </HomeSectionContainer>
  );
};

export default FaqContact;
