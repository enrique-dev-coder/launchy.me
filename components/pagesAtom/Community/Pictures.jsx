import React, { Fragment } from 'react'
import Image from 'next/image';
import SolutionScreen1 from '../../../public/img/community/Solution screen 1.png'
import FirstInSecondParagraph from '../../../public/img/community/First in second paragraph.png'
import NextInSecondParagraph from '../../../public/img/community/Next in second paragraph.png'
import LastParagraphFirstFrame from '../../../public/img/community/Last paragraph first frame.png'
import LastParagraphSecondFrame from '../../../public/img/community/Last paragraph second frame.png'
import CommunityGif from '../../../public/img/community/Video celus (1).gif'
import FadeInElement from '../FadeInElement'
import Wrapper from '../Wrapper';

const Pictures = () => {
  return (
    <Fragment>
        <FadeInElement>
            <div className="grid place-content-center mb-[30px] md:mb-[40px]">

                <div className="grid place-content-center h-[190px] w-[310px] sm:w-[500px] h-[300px] md:w-[650px] md:h-[400px] lg:w-[902px] lg:h-[554px]">
                    <Image 
                        src={SolutionScreen1}
                        width={902}
                        height={554}
                        alt={'Mockup de Community creado por Launchy'}
                    /> 
                </div>
            
            </div>
        </FadeInElement>

        <FadeInElement>
            <div className="flex relative h-[340px] sm:h-[440px] lg:h-[610px] mb-[60px] md:mb-[80px]">

                <div className="w-5/12"></div>

                <div className="w-7/12 bg-[#D9D9D9]"></div>

                <div className="right-[28%] sm:right-[35%] top-[6%] xl:right-[39%] 2xl:right-[47%] z-10 absolute w-[310px] sm:w-[400px] lg:w-[588px] lg:h-[355px]">
                    <Image 
                        src={FirstInSecondParagraph}
                        width={588}
                        height={355}
                        alt={'Mockup de Community creado por Launchy'}
                    />
                </div>

                <div className="right-[2%] sm:right-[12%] top-[36%] xl:right-[15%] 2xl:right-[27%] z-20 absolute w-[310px] sm:w-[400px] lg:w-[588px] lg:h-[355px]">
                    <Image 
                        src={NextInSecondParagraph}
                        width={588}
                        height={355}
                        alt={'Mockup de Community creado por Launchy'}
                    />
                </div>

            </div>
        </FadeInElement>

        <FadeInElement>
            <Wrapper>
                <div className='mb-[30px] md:mb-[40px] roboto_normal text-[14px]'>
                Trabajamos con los elementos que el cliente decidió y tratando de ofrecer una guía en la distribución de información, logrando reducirla a un 60% de la original que iba a ser publicada.
                </div>
            </Wrapper>

            <div className="mb-[60px] md:mb-[80px] flex justify-center">
                <Image 
                    src={CommunityGif} 
                    width={1527} height={577} 
                    alt={'Mockup de Infuy creado por Launchy'}
                    className='w-full'
                />
            </div>
        </FadeInElement>

        <FadeInElement>
            <Wrapper>
                <div className='mb-[30px] md:mb-[40px] roboto_normal text-[14px]'>
                Trabajamos en conjunto con el equipo técnico para ir solucionando las necesidades que fue presentando el proyecto conforme va avanzando en cuanto a la construcción de la documentación así como los pilotos técnicos.
                </div>
            </Wrapper>

            <div className="mb-[60px] lg:mb-[80px] flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-8 px-[8%] lg:px-[4%]">

                <div className="rounded-lg shadow-xl w-full lg:w-1/2 flex justify-center pt-8 border">
                    <Image 
                        src={LastParagraphFirstFrame}
                        width={355}
                        height={536}
                        alt={'Mockup de Community creado por Launchy'}
                    />
                </div>
            
                <div className="rounded-lg shadow-xl w-full lg:w-1/2 border flex items-center">
                    <Image 
                        src={LastParagraphSecondFrame}
                        width={635}
                        height={436}
                        alt={'Mockup de Community creado por Launchy'}
                    />
                </div>

            </div>
        </FadeInElement>
    </Fragment>
  )
}

export default Pictures