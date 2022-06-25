import Image from 'next/image';
import FirstMiniScrenn from '../../../public/img/fichap/1.png'
import SecondMiniScrenn from '../../../public/img/fichap/1 (2).png'
import ThirdMiniScrenn from '../../../public/img/fichap/2 (2).png'
import FourthMiniScrenn from '../../../public/img/fichap/1 (3).png'
import FifthMiniScrenn from '../../../public/img/fichap/2 (3).png'
import SixthMiniScrenn from '../../../public/img/fichap/3 (3).png'
import SeventhMiniScrenn from '../../../public/img/fichap/1 (4).png'
import EighthMiniScrenn from '../../../public/img/fichap/2 (4).png'
import NinthMiniScrenn from '../../../public/img/fichap/1 (5).png'

const FirstScreen = () => {
  return (
    <div className="grid grid-cols-5 mb-[60px] md:mb-[80px] px-[2%] gap-3 border shadow-xl">

              {/* one picture */}
              <div className="col-span-1 flex items-center justify-center ">

                  <Image 
                    src={FirstMiniScrenn} 
                    width={144} 
                    height={313} 
                    alt={'Mockup de Fichap creado por Launchy'}
                    className='w-full h-full'
                  />
                
              </div>
              
              {/* two-pictures */}
              <div className="col-span-1 flex flex-col items-center justify-center gap-4">

                  <Image 
                    src={SecondMiniScrenn} 
                    width={144} 
                    height={230} 
                    alt={'Mockup de Fichap creado por Launchy'}
                  />

                  <Image 
                    src={ThirdMiniScrenn} 
                    width={144} 
                    height={291} 
                    alt={'Mockup de Fichap creado por Launchy'}
                  />

              </div>

              {/* three-pictures */}
              <div className="col-span-1 flex flex-col items-center justify-center gap-4">

                  <Image 
                    src={FourthMiniScrenn} 
                    width={144} 
                    height={57} 
                    alt={'Mockup de Fichap creado por Launchy'}
                  />

                  <Image 
                    src={FifthMiniScrenn} 
                    width={144} 
                    height={312} 
                    alt={'Mockup de Fichap creado por Launchy'}
                  />

                  <Image 
                    src={SixthMiniScrenn} 
                    width={144} 
                    height={136} 
                    alt={'Mockup de Fichap creado por Launchy'}
                  />

              </div>

              {/* two-pictures */}
              <div className="col-span-1 flex flex-col items-center justify-center gap-4">
                
                  <Image 
                    src={SeventhMiniScrenn} 
                    width={145} 
                    height={230} 
                    alt={'Mockup de Fichap creado por Launchy'}
                  />

                  <Image 
                    src={EighthMiniScrenn} 
                    width={145} 
                    height={291} 
                    alt={'Mockup de Fichap creado por Launchy'}
                  />

              </div>

              {/* one-picture */}
              <div className="col-span-1 flex flex-col flex items-center justify-center">

                  <Image 
                    src={NinthMiniScrenn} 
                    width={145} 
                    height={312} 
                    alt={'Mockup de Fichap creado por Launchy'}
                  />

              </div>
              
    </div>
  )
}

export default FirstScreen