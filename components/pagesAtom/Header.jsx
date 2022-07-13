import HeaderSlider from './HeaderSlider';
import FadeInElement from './FadeInElement';
import AlienSlider from '../Parte6Home/AlienSlider';

const Header = ({ children, quantity, items, show = true }) => {
  return (
    <FadeInElement>
      <div className="flex flex-col items-center w-full overflow-hidden relative z-10">
        <div className="bg-[url(/img/Fondo.png)] bg-cover w-full h-[500px] absolute z-0"></div>
        <div className="team-background w-full h-[500px] absolute z-10"></div>
        <div className="flex flex-col mt-20 mb-16 pt-14 relative">
          {children}
          <div className="flex justify-center mt-8">
            <img
              src="/img/Flechitas.png"
              alt={'Mockup de ITGall creado por Launchy'}
            />
          </div>
        </div>

        {show ? (
          <HeaderSlider slidesQuantity={quantity} slidesItems={items} />
        ) : (
          <div className="w-full flex justify-between max-w-[1440px] z-10">
            <AlienSlider />
          </div>
        )}
      </div>
    </FadeInElement>
  );
};

export default Header;
