import MobileHome from '../../../public/img/itgall/mobile home.png';
import MobileBlank from '../../../public/img/itgall/mobile blank space.png';
import MobileContact from '../../../public/img/itgall/mobile contact us.png';
import MobileIn4aha from '../../../public/img/itgall/mobile in4aha.png';
import MobileParticipation from '../../../public/img/itgall/mobile participation.png';

const MobilePictures = () => {
  return (
    <div className="flex flex-col justify-center mb-[60px] md:mb-[80px]">
      <div className="flex first-section justify-center">
        <div className="hidden lg:block">
          <img
            src="/img/itgall/mobile blank space.png"
            width={283}
            height={550}
            alt={'Mockup de Itgall creado por Launchy'}
            className="w-1/2 md:w-full"
          />
        </div>

        <img
          src="/img/itgall/mobile blank space.png"
          width={283}
          height={550}
          alt={'Mockup de Itgall creado por Launchy'}
          className="w-1/3 md:w-full"
        />

        <img
          src="/img/itgall/mobile home.png"
          width={283}
          height={550}
          alt={'Mockup de Itgall creado por Launchy'}
          className="w-1/3 md:w-full"
        />

        <img
          src="/img/itgall/mobile blank space.png"
          width={283}
          height={550}
          alt={'Mockup de Itgall creado por Launchy'}
          className="w-1/3 md:w-full"
        />

        <div className="hidden lg:block">
          <img
            src="/img/itgall/mobile blank space.png"
            width={283}
            height={550}
            alt={'Mockup de Itgall creado por Launchy'}
            className="w-1/2 md:w-full"
          />
        </div>
      </div>

      <div className="flex second-section justify-center">
        <img
          src="/img/itgall/mobile participation.png"
          width={283}
          height={550}
          alt={'Mockup de Itgall creado por Launchy'}
          className="w-1/3 md:w-full"
        />

        <img
          src="/img/itgall/mobile in4aha.png"
          width={283}
          height={550}
          alt={'Mockup de Itgall creado por Launchy'}
          className="w-1/3 md:w-full"
        />

        <img
          src="/img/itgall/mobile contact us.png"
          width={283}
          height={550}
          alt={'Mockup de Itgall creado por Launchy'}
          className="w-1/3 md:w-full"
        />
      </div>
    </div>
  );
};

export default MobilePictures;
