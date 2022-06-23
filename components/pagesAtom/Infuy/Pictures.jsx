import Image from 'next/image';
import FadeInElement from '../FadeInElement'
import InfuyOnePage from '../../../public/img/infuy/ONE PAGE - CASOS DE EXITO 3 1.png'
import InfuyOtherPic1 from '../../../public/img/infuy/iOS IG Grid Mock 1.png'
import InfuyOtherPic2 from '../../../public/img/infuy/Group 4 8095914.png'
import InfuyOtherPic3 from '../../../public/img/infuy/Portadas.png'

const Pictures = () => {
  return (
        <div className="flex flex-col mb-[60px] md:mb-[80px]">

                <FadeInElement>
                    <div className="mb-[60px] md:mb-[80px] px-[8%] lg:px-0 lg:grid lg:place-content-center">
                        <Image 
                            src={InfuyOnePage} 
                            width={977} height={580} 
                            alt={'Mockup de Infuy creado por Launchy'}
                            className='w-full'
                        />
                    </div>
                </FadeInElement>
                
                <FadeInElement>
                    <div className="flex flex-col lg:flex-row lg:pr-[12%] lg:mb-[80px] xl:pl-[7%] xl:pr-[17%]">

                        <div className="px-[8%] mb-[30px] md:mb-0 flex justify-center lg:px-0 lg:w-1/2 lg:h-[665px] lg:justify-end">
                            <Image 
                                src={InfuyOtherPic1} 
                                width={414} height={723} 
                                alt={'Mockup de Infuy creado por Launchy'}
                                className='w-full'
                            />
                        </div>

                        <div className="px-[8%] mb-[30px] md:mb-0 flex justify-center lg:px-0 lg:w-1/2 lg:h-[665px]">
                            <Image 
                                src={InfuyOtherPic2} 
                                width={538} height={665} 
                                alt={'Mockup de Infuy creado por Launchy'}
                                className='w-full'
                            />
                        </div>

                    </div>
                </FadeInElement>
                
                <FadeInElement>
                  <Image 
                    src={InfuyOtherPic3} 
                    width={1440} height={582} 
                    alt={'Mockup de Infuy creado por Launchy'}
                    className='w-full'
                  />
                </FadeInElement>
                
        </div>
  )
}

export default Pictures