import React from 'react';
import Image from 'next/image';
const HeroHomePage = () => {
  return (
    <div>
      {/*model iframe from sketch*/}
      <div className="sketchfab-embed-wrapper h-screen w-full relative z-10">
        {' '}
        <iframe
          className=" h-screen w-full"
          title="Chromatic Core"
          frameborder="0"
          allowfullscreen
          scrolling="0"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking
          execution-while-out-of-viewport
          execution-while-not-rendered
          web-share
          scrollwheel="0"
          hint={2}
          src="https://sketchfab.com/models/a9f0368eb94c475baae30579b704eed8/embed?autostart=1&scrollwheel=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&dnt=1"
        >
          {' '}
        </iframe>{' '}
        <div className="absolute w-full top-[50vh] text-white">
          {/*contenedor limitante*/}
          <div className="max-w-[1180px] mx-auto flex items-end h-[110px] justify-between">
            <Image
              src="/img/welaunch.png"
              alt="we launch"
              width="336px"
              height="110px"
            />
            <div className="flex items-end mr-12">
              <p className="text-white w-2/5 ml-auto">
                Te acampañamos: desarrollando, innovando y guiandote al infinito
                y más allá.
              </p>
              <img
                src="/img/down.svg"
                alt="scroll down"
                className=" animate-bounce"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHomePage;
