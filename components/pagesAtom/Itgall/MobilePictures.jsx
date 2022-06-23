import Image from 'next/image';
import MobileHome from '../../../public/img/itgall/mobile home.png'
import MobileBlank from '../../../public/img/itgall/mobile blank space.png'
import MobileContact from '../../../public/img/itgall/mobile contact us.png'
import MobileIn4aha from '../../../public/img/itgall/mobile in4aha.png'
import MobileParticipation from '../../../public/img/itgall/mobile participation.png'

const MobilePictures = () => {
  return (
    <div className="flex flex-col justify-center mb-[60px] md:mb-[80px]">

        <div className="flex first-section justify-center">

              <div className='hidden lg:block'>
                <Image
                  src={MobileBlank}
                  width={283}
                  height={550}
                  alt={'Mockup de Itgall creado por Launchy'}
                />
              </div>

              <Image
                src={MobileBlank}
                width={283}
                height={550}
                alt={'Mockup de Itgall creado por Launchy'}
              />

              <Image
                src={MobileHome}
                width={283}
                height={550}
                alt={'Mockup de Itgall creado por Launchy'}
              />

              <Image
                src={MobileBlank}
                width={283}
                height={550}
                alt={'Mockup de Itgall creado por Launchy'}
              />

              <div className='hidden lg:block'>
                <Image
                  src={MobileBlank}
                  width={283}
                  height={550}
                  alt={'Mockup de Itgall creado por Launchy'}
                />
              </div>

        </div>

        <div className="flex second-section justify-center">
              <Image
                src={MobileParticipation}
                width={283}
                height={550}
                alt={'Mockup de Itgall creado por Launchy'}
              />

              <Image
                src={MobileIn4aha}
                width={283}
                height={550}
                alt={'Mockup de Itgall creado por Launchy'}
              />

              <Image
                src={MobileContact}
                width={283}
                height={550}
                alt={'Mockup de Itgall creado por Launchy'}
              />
        </div>

    </div>
  )
}

export default MobilePictures