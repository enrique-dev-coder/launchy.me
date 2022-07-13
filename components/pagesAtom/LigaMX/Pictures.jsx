import React, { Fragment } from 'react';
import FirstFrameSecondParagraph from '../../../public/img/ligaMX/First Frame Second Paragraph.png';
import WhiteScreenThirdParagraph from '../../../public/img/ligaMX/White Screen Thrid Paragraph.png';
import MainScreenThirdParagraph from '../../../public/img/ligaMX/Main Screen Third Paragraph.png';
import ThirdParagraph1 from '../../../public/img/ligaMX/Second In Third Paragraph (1).png';
import ThirdParagraph2 from '../../../public/img/ligaMX/Second In Third Paragraph (2).png';
import ThirdParagraph3 from '../../../public/img/ligaMX/Second In Third Paragraph (3).png';
import ThirdParagraph4 from '../../../public/img/ligaMX/Second In Third Paragraph (4).png';
import ThirdParagraph5 from '../../../public/img/ligaMX/Second In Third Paragraph (5).png';
import FirstFrameFourthParagraph from '../../../public/img/ligaMX/First Frame in Fourth Paragraph.png';
import SecondFrameFourthParagraph1 from '../../../public/img/ligaMX/Second Frame in Fourth Paragraph (1).png';
import SecondFrameFourthParagraph2 from '../../../public/img/ligaMX/Second Frame in Fourth Paragraph (2).png';
import SecondFrameFourthParagraph3 from '../../../public/img/ligaMX/Second Frame in Fourth Paragraph (3).png';
import TransparentScreen1 from '../../../public/img/ligaMX/Second Part in Fourth Paragraph (1).png';
import TransparentScreen2 from '../../../public/img/ligaMX/Second Part in Fourth Paragraph (2).png';
import TransparentScreen3 from '../../../public/img/ligaMX/Second Part in Fourth Paragraph (3).png';
import TransparentScreen4 from '../../../public/img/ligaMX/Second Part in Fourth Paragraph (4).png';
import TransparentScreenMain from '../../../public/img/ligaMX/Second Part in Fourth Paragraph - MAIN.png';
import LastFrame from '../../../public/img/ligaMX/Last Frame.png';
import FadeInElement from '../FadeInElement';
import Wrapper from '../Wrapper';

const Pictures = () => {
  return (
    <Fragment>
      <FadeInElement>
        <Wrapper>
          <h2 className="mb-[30px] md:mb-[40px] border border-black p-2 pl-6">
            OPERARIO
          </h2>
        </Wrapper>

        <div className="flex justify-center mb-[60px] md:mb-[80px] bg-[#6BA736]">
          <img
            src="/img/ligaMX/First Frame Second Paragraph.png"
            width={1029}
            height={509}
            alt={'Mockup de LigaMX creado por Launchy'}
          />
        </div>
      </FadeInElement>

      <FadeInElement>
        <div className="flex flex-col justify-center mb-[60px] md:mb-[80px]">
          <div className="flex first-section justify-center">
            <div className="hidden lg:block">
              <img
                src="/img/ligaMX/White Screen Thrid Paragraph.png"
                width={283}
                height={550}
                alt={'Mockup de LigaMX creado por Launchy'}
              />
            </div>

            <img
              src="/img/ligaMX/White Screen Thrid Paragraph.png"
              width={283}
              height={550}
              alt={'Mockup de LigaMX creado por Launchy'}
            />

            <img
              src="/img/ligaMX/Main Screen Third Paragraph.png"
              width={283}
              height={550}
              alt={'Mockup de LigaMX creado por Launchy'}
            />

            <img
              src="/img/ligaMX/White Screen Thrid Paragraph.png"
              width={283}
              height={550}
              alt={'Mockup de LigaMX creado por Launchy'}
            />

            <div className="hidden lg:block">
              <img
                src="/img/ligaMX/White Screen Thrid Paragraph.png"
                width={283}
                height={550}
                alt={'Mockup de LigaMX creado por Launchy'}
              />
            </div>
          </div>

          <div className="flex second-section justify-center">
            <img
              src="/img/ligaMX/Second In Third Paragraph (1).png"
              width={283}
              height={550}
              alt={'Mockup de LigaMX creado por Launchy'}
            />

            <img
              src="/img/ligaMX/Second In Third Paragraph (2).png"
              width={283}
              height={550}
              alt={'Mockup de LigaMX creado por Launchy'}
            />

            <img
              src={ThirdParagraph3}
              width={283}
              height={550}
              alt={'Mockup de LigaMX creado por Launchy'}
            />

            <img
              src={ThirdParagraph4}
              width={283}
              height={550}
              alt={'Mockup de LigaMX creado por Launchy'}
            />

            <img
              src={ThirdParagraph5}
              width={283}
              height={550}
              alt={'Mockup de LigaMX creado por Launchy'}
            />
          </div>
        </div>
      </FadeInElement>

      <FadeInElement>
        <Wrapper>
          <h2 className="mb-[30px] md:mb-[40px] border border-black p-2 pl-6">
            CLIENTE
          </h2>
        </Wrapper>

        <div className="flex flex-col lg:flex-row px-[8%] gap-4 mb-[30px] md:mb-[40px]">
          <div className="border flex justify-center shadow-xl lg:w-1/2">
            <img
              src={FirstFrameFourthParagraph}
              width={355}
              height={536}
              alt={'Mockup de LigaMX creado por Launchy'}
            />
          </div>

          <div className="border flex justify-center items-center shadow-xl relative h-[410px] lg:h-auto lg:w-1/2">
            <div className="absolute right-[15%] top-[14%] sm:top-[20%] md:right-[29%] lg:right-[19%] xl:right-[25%]">
              <img
                src={SecondFrameFourthParagraph3}
                width={402}
                height={297}
                alt={'Mockup de LigaMX creado por Launchy'}
              />
            </div>

            <div className="absolute right-[4%] sm:right-[16%] md:right-[29%] lg:right-[19%] xl:right-[25%]">
              <img
                src={SecondFrameFourthParagraph2}
                width={336}
                height={325}
                alt={'Mockup de LigaMX creado por Launchy'}
              />
            </div>

            <div className="absolute right-[5%] sm:right-[15%] md:right-[28%] lg:right-[18%] xl:right-[24%]">
              <img
                src={SecondFrameFourthParagraph1}
                width={251}
                height={393}
                alt={'Mockup de LigaMX creado por Launchy'}
              />
            </div>
          </div>
        </div>
      </FadeInElement>

      <FadeInElement>
        <div className="flex mb-[60px] md:mb-[80px] justify-center">
          <img
            src={TransparentScreen1}
            width={287}
            height={556}
            alt={'Mockup de LigaMX creado por Launchy'}
          />

          <img
            src={TransparentScreen2}
            width={287}
            height={556}
            alt={'Mockup de LigaMX creado por Launchy'}
          />

          <img
            src={TransparentScreenMain}
            width={287}
            height={556}
            alt={'Mockup de LigaMX creado por Launchy'}
          />

          <img
            src={TransparentScreen3}
            width={287}
            height={556}
            alt={'Mockup de LigaMX creado por Launchy'}
          />

          <img
            src={TransparentScreen4}
            width={287}
            height={556}
            alt={'Mockup de LigaMX creado por Launchy'}
          />
        </div>
      </FadeInElement>

      <FadeInElement>
        <div className="flex justify-center mb-[60px] md:mb-[80px] bg-[#060729]">
          <img
            src={LastFrame}
            width={1440}
            height={509}
            alt={'Mockup de LigaMX creado por Launchy'}
          />
        </div>
      </FadeInElement>
    </Fragment>
  );
};

export default Pictures;
