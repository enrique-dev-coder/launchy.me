import Image from 'next/image';
import InfuyLogo1 from '../../../public/img/infuy/Construccion logo.png'
import InfuyLogo2 from '../../../public/img/infuy/Variantes de color logo.png'
import Wrapper from '../Wrapper';

const Logos = () => {
  return (
    <Wrapper>

            <h2 className='mb-[30px] md:mb-[40px] border border-black p-2 pl-6'>OBJETIVO</h2>

            {/* Two Infuy logo pics */}
            <div className="flex flex-col gap-6 w-full items-center lg:flex-row px-[8%] mb-[60px] md:mb-[80px]">

                <div className="w-[300px] h-[160px] md:w-[437px] md:h-[227px] mb-4 lg:mb-0">
                  <Image src={InfuyLogo1} width={437} height={227} alt={'Logotipo de Infuy creado por Launchy'} />
                </div>

                <div className='w-[300px] h-[160px] md:w-[437px] md:h-[227px] mb-4 lg:mb-0'>
                  <Image src={InfuyLogo2} width={437} height={227} alt={'Logotipo de Infuy creado por Launchy'} />
                </div>

            </div>

    </Wrapper>
  )
}

export default Logos