import Image from 'next/image';
import HeaderSlider from "./HeaderSlider"
import Flechitas from '../../public/img/Flechitas.png'
import FadeInElement from "./FadeInElement"

const Header = ({children}) => {
  return (
    <FadeInElement>
      <div className='flex flex-col items-center justify-center w-full overflow-hidden relative'>
        <div className="bg-[url(/img/Fondo.png)] bg-cover w-full h-[416px] absolute z-0">
        </div>
        <div className="flex flex-col mt-14 mb-16 pt-14">
            {children}
            <div className="flex justify-center mt-8">
              <Image 
                src={Flechitas} 
                width={25} height={25} 
                alt={'Mockup de ITGall creado por Launchy'}
              />
            </div>
        </div>
        <HeaderSlider />
      </div>
    </FadeInElement>
    
  )
}

export default Header