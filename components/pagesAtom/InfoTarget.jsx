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
            <h2 className="mb-[30px] md:mb-[40px] border border-black p-2 pl-6">
              OBJETIVO
            </h2>
            <p>{objetivoTexto}</p>
          </div>

          <div className="mb-[60px] md:mb-[80px]">
            <h2 className="mb-[30px] md:mb-[40px] border border-black p-2 pl-6">
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
              />

              {/* Second Square */}
              <InfotTargetBox 
                number={two}
                imgURL={imgURL.two}
                width={width.two}
                height={height.two}
                color={color}
              />

              {/* Thrid Square */}
              <InfotTargetBox 
                number={two}
                imgURL={imgURL.three}
                width={width.three}
                height={height.three}
                color={color}
              />

              {/* Fourth Square */}
              <InfotTargetBox 
                number={two}
                imgURL={imgURL.four}
                width={width.four}
                height={height.four}
                color={color}
              />
              
            </div>
          </div>
        </div>
      </Wrapper>
    </FadeInElement>
  );
};

export default InfoTarget;
