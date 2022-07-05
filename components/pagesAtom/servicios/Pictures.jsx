import Image from 'next/image';
import GraficoFinal from '../../../public/img/Grafico final.png'

const Pictures = () => {
  return (
        <div className="px-[8%] flex lg:justify-center mb-[40px] md:mb-[60px] overflow-x-auto z-30 relative">

            <div className="border py-[4%] px-[10%] mb-[30px] md:mb-[40px] w-[800px] flex shrink-0 scrollbar lg:w-full">

                    <Image 
                        width={776}
                        height={393}
                        src={GraficoFinal}
                        className='w-full'
                    />
                
            </div>

        </div>
  )
}

export default Pictures