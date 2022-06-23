import Image from 'next/image';
import DesktopFrame from '../../../public/img/itgall/Rectangle 39388.png'
import Projects from '../../../public/img/itgall/Projects.png'
import Partners from '../../../public/img/itgall/Partners.png'
import Map from '../../../public/img/itgall/Map.png'
import FadeInElement from '../FadeInElement'
import { Fragment } from 'react'

const Pictures = () => {
  return (
    <Fragment>

        <FadeInElement>
            <div className="flex mb-[60px] md:mb-[80px] relative h-[250px] sm:h-[350px] lg:h-[600px]">

              <div className="w-7/12 bg-[#D9D9D9]"></div>

              <div className="w-5/12"></div>

              <div className="h-[195px] w-[315px] absolute right-[3%] top-[12%] sm:h-[295px] sm:w-[450px] sm:right-[20%] lg:h-[564px] lg:w-[800px] lg:top-[10%] xl:w-[936px] xl:top-[8%]">
                <Image 
                  src={DesktopFrame}
                  width={936}
                  height={564}
                  alt={'Mockup de Itgall creado por Launchy'}
                />
              </div>

            </div>
        </FadeInElement>
          
        <FadeInElement>
            <div className="flex flex-col md:flex-row md:justify-center gap-4 mb-[30px] md:mb-[40px] px-[8%]">

              <div className='border p-4 pb-0'>
                <Image 
                  src={Projects} 
                  width={349} height={488} 
                  alt={'Mockup de Itgall creado por Launchy'}
                />
              </div>   

              <div className="border p-4 pr-0">
                <Image 
                  src={Partners} 
                  width={670} height={506} 
                  alt={'Mockup de Itgall creado por Launchy'}
                />
              </div>         

            </div>
        </FadeInElement>
          
        <FadeInElement>
            <div className="mb-[60px] md:mb-[80px] px-[8%]">

              <div className="border p-4 pb-0">
                <Image 
                  src={Map} 
                  width={1139} height={521} 
                  alt={'Mockup de Itgall creado por Launchy'}
                />
              </div>

            </div>
        </FadeInElement>

    </Fragment>
  )
}

export default Pictures