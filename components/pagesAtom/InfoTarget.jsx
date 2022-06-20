import Image from 'next/image';
import FadeInElement from "./FadeInElement"

const InfoTarget = ({objetivoTexto, desafioTexto, imgData}) => {

  const {height, width, imgURL, alt} = imgData

  const {one, two, three, four} = desafioTexto

  return (
    <FadeInElement>
        <div className='mb-[60px] md:mb-[80px] pt-[60px] md:pt-[80px] px-[8%]'>

        <div className="mb-[60px] md:mb-[80px]">
            <h2 className='mb-[30px] md:mb-[40px] border border-black p-2 pl-6'>OBJETIVO</h2>
            <p>{objetivoTexto}</p>
        </div>

        <div className="mb-[60px] md:mb-[80px]">

            <h2 className='mb-[30px] md:mb-[40px] border border-black p-2 pl-6'>DESAFÍO</h2>

            <div className="flex flex-col md:flex-row gap-4 justify-between">

                {/* First Square */}
                <div className="flex flex-col gap-6 w-full md:w-1/4 border border-black p-8">
                    <div className={`w-[${width.one}px] h-[${height.one}px] mb-0.5`}>
                        <Image src={imgURL.one} width={width.one} height={height.one} alt={alt.one} />
                    </div>
                    <p>{one}</p>
                </div>

                {/* Second Square */}
                <div className="flex flex-col gap-2 w-full md:w-1/4 border border-black p-8">
                    <div className={`w-[${width.two}px] h-[${height.two}px] mb-4`}>
                        <Image src={imgURL.two} width={width.two} height={height.two} alt={alt.one} />
                    </div>
                    <p>{two}</p>
                </div>

                {/* Thrid Square */}
                <div className="flex flex-col gap-2 w-full md:w-1/4 border border-black p-8">
                    <div className={`w-[${width.three}px] h-[${height.three}px] mb-4`}>
                        <Image src={imgURL.three} width={width.three} height={height.three} alt={alt.one} />
                    </div>
                    <p>{three}</p>
                </div>

                {/* Fourth Square */}
                <div className="flex flex-col gap-2 w-full md:w-1/4 border border-black p-8">
                    <div className={`w-[${width.four}px] h-[${height.four}px] mb-4`}>
                        <Image src={imgURL.four} width={width.four} height={height.four} alt={alt.one} />
                    </div>
                    <p>{four}</p>
                </div>

                </div>
            </div>

        </div>
    </FadeInElement>
    
  )
}

export default InfoTarget