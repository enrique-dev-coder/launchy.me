import Image from 'next/image';
import FadeInElement from './FadeInElement';
import Wrapper from './Wrapper';
import InfotTargetBox from './InfotTargetBox';

const InfoTarget = ({ objetivoTexto, desafioTexto, imgData }) => {
  const { height, width, imgURL, alt, color } = imgData;

  const { one, two, three, four } = desafioTexto;

  return (
    <FadeInElement>
      <Wrapper>
        <div className="mb-[60px] md:mb-[80px] pt-[30px] md:pt-[40px] max-w-[1440px] mx-auto">
          <div className="mb-[60px] md:mb-[80px]">
            <h2 className="mb-[30px] md:mb-[40px] border border-black p-2 pl-6 rounded-tr-[.2rem] font-roboto text-[16px] lg:text-[22px]">
              OBJETIVO
            </h2>
            <p className='roboto_normal text-[14px]'>{objetivoTexto}</p>
          </div>

          <div className="mb-[60px] md:mb-[80px]">
            <h2 className="mb-[30px] md:mb-[40px] border border-black p-2 pl-6 rounded-tr-[.2rem] font-roboto text-[16px] lg:text-[22px]">
              DESAFÍO
            </h2>

            <div className="flex flex-col lg:flex-row gap-4 justify-between">
              {/* First Square */}
              <InfotTargetBox 
                number={one}
                imgURL={imgURL.one}
                width={width.one}
                height={height.one}
                color={color}
                alt={alt}
              />

              {/* Second Square */}
              <InfotTargetBox 
                number={two}
                imgURL={imgURL.two}
                width={width.two}
                height={height.two}
                color={color}
                alt={alt}
              />

              {/* Thrid Square */}
              <InfotTargetBox 
                number={three}
                imgURL={imgURL.three}
                width={width.three}
                height={height.three}
                color={color}
                alt={alt}
              />

              {/* Fourth Square */}
              <InfotTargetBox 
                number={four}
                imgURL={imgURL.four}
                width={width.four}
                height={height.four}
                color={color}
                alt={alt}
              />
              
            </div>
          </div>
        </div>
      </Wrapper>
    </FadeInElement>
  );
};

export default InfoTarget;
