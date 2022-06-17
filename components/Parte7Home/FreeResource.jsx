import { useEffect, useState } from 'react';

const ResourceCard = ({ img, title, renderOnMobile }) => {
  return (
    renderOnMobile && (
      <div
        className={`w-full mb-[30px] md:mb-0 md:w-[275px] h-[138px] ${
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
                <p className="text-white  text-[10px] mr-4 uppercase">
                  ACCEDER
                </p>
                <img src="/img/right.svg" />
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};
const FreeResource = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    window.innerWidth > 426 ? setMobile(true) : setMobile(false);
  }, []);

  //la data la tuve que poner aqui para que se pueda usar el mobile, el mobile depende del tamaño de la pantalla

  const resourceData = [
    {
      img: '/img/team/customer.png',
      title: 'Plantilla para hacer tu customer journey map 🚀 ',
      renderOnMobile: true,
    },
    {
      img: '/img/team/autodiagnostico.png',
      title: 'Autodiagnóstico para conocer el estado de tu empresa',
      renderOnMobile: true,
    },
    {
      img: '',
      title: null,
      renderOnMobile: mobile,
    },
  ];
  //console.log(mobile);
  return (
    <div>
      <div className="flex mb-[30px] md:mb-[40px] ">
        <h2 className="text-white uppercase text-xl  letter_spacing">
          FREE RESOURCES
        </h2>
        <img src="/img/right.svg" alt="arrow" className="ml-4" />
      </div>
      <div className="flex flex-col md:flex-row  justify-between">
        {resourceData.map((r, i) => (
          //NOTE: si el titulo es true y hay un valor en mobile entonces renderiza la tarjeta
          //esto es para que no renderice la tarjeta en blacno

          <ResourceCard
            key={i}
            img={r.img}
            title={r.title}
            renderOnMobile={r.renderOnMobile}
          />
        ))}
      </div>
    </div>
  );
};

export default FreeResource;