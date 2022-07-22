import { useEffect, useState } from 'react';
import TranslatedParagraph from '../TranslatedParagraph';
const ResourceCard = ({ img, title, renderOnMobile, link, titleEng }) => {
  return (
    renderOnMobile && (
      <a href={link} target="_blank" rel="noopener noreferrer ">
        <div
          className={`w-full mb-[30px] md:mb-0 md:w-[275px] md:mr-[40px] h-[138px] cursor-pointer ${
            title === null && ' border-none'
          } flex  border border-white`}
        >
          <img src={img} alt="free resource" />
          <div
            className={`flex-1 border-l ${
              title === null && ' border-none'
            } border-white flex flex-col justify-center`}
          >
            <div className="w-[80%] h-[80%] flex flex-col  mx-auto">
              <TranslatedParagraph
                textSpanish={title}
                textEnglish={titleEng}
                classes={'text-white flex-1  text-sm roboto_normal '}
              />
              {title && (
                <div className="flex mb-[10px]">
                  <TranslatedParagraph
                    textEnglish={'find more'}
                    textSpanish={'ACCEDER'}
                    classes={
                      'text-white  text-[10px] mr-4 uppercase roboto_normal'
                    }
                  />
                  <img src="/img/right.svg" alt="right" />
                </div>
              )}
            </div>
          </div>
        </div>
      </a>
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
      titleEng: 'Template for  your own customer journey map 🚀',
      renderOnMobile: true,
      link: 'https://launchy-21017130.hubspotpagebuilder.com/customer-journey-map',
    },
    {
      img: '/img/checklist-ux-ui.png',
      title: 'Check list UX/UI  para webs-apps',
      titleEng: 'UX/UI checklist for web-apps',
      renderOnMobile: true,
      link: 'https://launchy-21017130.hubspotpagebuilder.com/checklist-ux-ui',
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
      <div className="flex flex-col md:flex-row  ">
        {resourceData.map((r, i) => (
          //NOTE: si el titulo es true y hay un valor en mobile entonces renderiza la tarjeta
          //esto es para que no renderice la tarjeta en blacno

          <ResourceCard
            link={r.link}
            key={i}
            img={r.img}
            title={r.title}
            titleEng={r.titleEng}
            renderOnMobile={r.renderOnMobile}
          />
        ))}
      </div>
    </div>
  );
};

export default FreeResource;
