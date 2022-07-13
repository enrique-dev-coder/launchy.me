import InfuyMocukp from '../../../public/img/infuy/Mockup.png';
import InfuyPic1 from '../../../public/img/infuy/60 1.png';
import InfuyPic2 from '../../../public/img/infuy/60 2.png';
import InfuyPic3 from '../../../public/img/infuy/60 5.png';
import InfuyPic4 from '../../../public/img/infuy/60 6.png';
import InfuyPic5 from '../../../public/img/infuy/60 7.png';
import InfuyPic6 from '../../../public/img/infuy/60 8.png';
import InfuyPic7 from '../../../public/img/infuy/60 9.png';
import InfuyPic8 from '../../../public/img/infuy/60 10.png';
import InfuyPic9 from '../../../public/img/infuy/60 11.png';
import InfuyPic10 from '../../../public/img/infuy/60 12.png';
import InfuyPic11 from '../../../public/img/infuy/60 13.png';
import InfuyPic12 from '../../../public/img/infuy/60 14.png';

const Gallery = () => {
  return (
    <div className="flex flex-col mb-[60px] md:mb-[80px] lg:flex-row gap-4">
      <div className="mb-[30px] flex justify-center md:mb-[60px] lg:mb-0 lg:w-1/3">
        <img
          src={InfuyMocukp}
          width={576}
          height={463}
          alt={'Mockup de Infuy creado por Launchy'}
          className="w-full"
        />
      </div>

      {/* Gallery of 12 pictures that are shown in horizontal when there is a desktop view and it´s shown in vertical when it is a mobile view */}
      <div className="grid grid-cols-2 gap-8 md:place-items-center px-[8%] lg:w-2/3 lg:px-0 lg:grid-cols-4 lg:gap-2">
        <img
          src={InfuyPic1}
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src={InfuyPic2}
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src={InfuyPic5}
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src={InfuyPic7}
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src={InfuyPic9}
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src={InfuyPic11}
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src={InfuyPic3}
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src={InfuyPic4}
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src={InfuyPic6}
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src={InfuyPic8}
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src={InfuyPic10}
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />

        <img
          src={InfuyPic12}
          width={250}
          height={145}
          alt={'Mockup de Infuy creado por Launchy'}
          className="col-span-1"
        />
      </div>
    </div>
  );
};

export default Gallery;
