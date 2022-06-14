import React from 'react';
const resourceData = [
  {
    img: '/img/team/customer.png',
    title: 'Plantilla para hacer tu customer journey map 🚀 ',
  },
  {
    img: '/img/team/autodiagnostico.png',
    title: 'Autodiagnóstico para conocer el estado de tu empresa',
  },
  {
    img: '',
    title: null,
  },
];
const ResourceCard = ({ img, title }) => {
  return (
    <div
      className={`w-[275px] h-[138px] ${
        title === null && ' border-none'
      } flex  border border-white`}
    >
      <img src={img} />
      <div
        className={`flex-1 border-l ${
          title === null && ' border-none'
        } border-white flex flex-col justify-center`}
      >
        <div className="w-[80%] h-[80%] flex flex-col  mx-auto">
          <p className="text-white flex-1  text-sm ">{title}</p>
          {title && (
            <div className="flex mb-[10px]">
              <p className="text-white  text-[10px] mr-4 uppercase">ACCEDER</p>
              <img src="/img/right.svg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
const FreeResource = () => {
  return (
    <div>
      <div className="flex mb-[40px] ">
        <h2 className="text-white uppercase text-xl  letter_spacing">
          FREE RESOURCES
        </h2>
        <img src="/img/right.svg" alt="arrow" className="ml-4" />
      </div>
      <div className="flex justify-between">
        {resourceData.map((r) => (
          <ResourceCard img={r.img} title={r.title} />
        ))}
      </div>
    </div>
  );
};

export default FreeResource;
