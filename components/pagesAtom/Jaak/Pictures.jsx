import React, { Fragment } from 'react'
import Image from 'next/image';
import JaakHome from '../../../public/img/jaak/jaak home.png'
import JaakStatistics1 from '../../../public/img/jaak/JaakStatistics1.png'
import JaakStatistics2 from '../../../public/img/jaak/JaakStatistics2.png'
import Wallet1 from '../../../public/img/jaak/Wallet1.png'
import Wallet2 from '../../../public/img/jaak/Wallet2.png'
import Wallet3 from '../../../public/img/jaak/Wallet3.png'
import Wallet4 from '../../../public/img/jaak/Wallet4.png'
import Wallet5 from '../../../public/img/jaak/Wallet5.png'
import Wallet6 from '../../../public/img/jaak/Wallet6.png'
import Wallet7 from '../../../public/img/jaak/Wallet7.png'
import DesktopWhite1 from '../../../public/img/jaak/Desktop-white (2) 2.png'
import DesktopWhite2 from '../../../public/img/jaak/Screen.png'
import FadeInElement from '../FadeInElement'

const Pictures = () => {
  return (
    <Fragment>
            <FadeInElement>
                <div className="flex md:justify-center mb-[30px] md:mb-[40px] bg-[#606B9D] py-6">
                    <Image 
                        src={JaakHome} 
                        width={822} height={510} 
                        alt={'Mockup de Jaak creado por Launchy'}
                        className='w-full'
                    />
                </div>
            </FadeInElement>
          
            <FadeInElement>
                <div className="flex flex-col items-center lg:flex-row lg:justify-center mb-[30px] md:mb-[40px] px-[8%] sm:gap-4">

                    <div className="w-[320px] sm:w-[555px] h-[267px] flex items-end lg:items-center">
                        <Image 
                            src={JaakStatistics1} 
                            width={555} height={267} 
                            alt={'Mockup de Jaak creado por Launchy'}
                        />
                    </div>

                    <div className="w-[320px] sm:w-[555px] h-[267px] flex items-center">
                        <Image 
                            src={JaakStatistics2} 
                            width={555} height={267} 
                            alt={'Mockup de Jaak creado por Launchy'}
                        />
                    </div>

                </div>
            </FadeInElement>
          
            <FadeInElement>
                <div className="flex flex-col px-[8%] mb-[60px] md:mb-[80px]">

                    <div className="flex w-full gap-4 py-[1.5rem]">

                        <div className="w-[244px] lg:h-[251px]">
                            <Image 
                                src={Wallet1} 
                                width={244} height={251} 
                                alt={'Mockup de Jaak creado por Launchy'}
                                className='w-full'
                            />
                        </div>

                        <div className="w-[446px] lg:h-[251px]">
                            <Image 
                                src={Wallet2} 
                                width={446} height={251} 
                                alt={'Mockup de Jaak creado por Launchy'}
                                className='w-full'
                            />
                        </div>

                        <div className="w-[446px] lg:h-[251px]">
                            <Image 
                                src={Wallet3} 
                                width={446} height={251} 
                                alt={'Mockup de Jaak creado por Launchy'}
                                className='w-full'
                            />
                        </div>

                        <div className="w-[244px] lg:h-[251px]">
                            <Image 
                                src={Wallet4} 
                                width={244} height={251} 
                                alt={'Mockup de Jaak creado por Launchy'}
                                className='w-full'
                            />
                        </div>

                    </div>

                    <div className="flex w-full gap-4 py-[1.5rem]">
  
                        <div className="w-[446px] lg:h-[251px]">
                            <Image 
                                src={Wallet5} 
                                width={446} height={251} 
                                alt={'Mockup de Jaak creado por Launchy'}
                                className='w-full'
                            />
                        </div>

                        <div className="w-[446px] lg:h-[251px]">
                            <Image 
                                src={Wallet6} 
                                width={446} height={251} 
                                alt={'Mockup de Jaak creado por Launchy'}
                                className='w-full'
                            />
                        </div>

                        <div className="w-[446px] lg:h-[251px]">
                            <Image 
                                src={Wallet7} 
                                width={446} height={251} 
                                alt={'Mockup de Jaak creado por Launchy'}
                                className='w-full'
                            />
                        </div>

                    </div>

                </div>
            </FadeInElement>
          
            <FadeInElement>
                <div className="flex justify-center mb-[60px] md:mb-[80px] relative h-[250px] sm:h-[400px] lg:h-[450px]">

                    <div className="w-1/2 md:w-2/3 lg:w-7/12 xl:w-1/2 bg-[#D9D9D9]"></div>

                    <div className="w-1/2 md:w-1/3 lg:w-5/12 xl:w-1/2"></div>

                    <div className="right-[15%] lg:right-[24%] xl:right-[35%] top-[6%] z-10 absolute w-[300px] h-[220px] sm:w-[500px] sm:h-[300px] md:w-[547px] md:h-[339px]">
                        <Image 
                            src={DesktopWhite1}  
                            width={547} 
                            height={339}  
                            alt={'Mockup de Itgall creado por Launchy'}
                        />
                    </div>

                    <div className="right-[5%] lg:right-[10%] xl:right-[25%] top-[38%] z-20 absolute w-[280px] h-[180px] sm:w-[460px] sm:h-[241px] lg:w-[507px]">
                        <Image 
                            src={DesktopWhite2}
                            width={507}
                            height={241}
                            alt={'Mockup de Itgall creado por Launchy'}
                        />
                    </div>

                </div>

            </FadeInElement>
    </Fragment>
  )
}

export default Pictures