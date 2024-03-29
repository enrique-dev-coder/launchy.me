import LoadingScreen from './LoadingScreen';
import LanguageButton from './LanguageButton';
import { useMenu } from '../context/MenuContext';
const HeroHomePage = () => {
  //comentario para ver si jala el deploy
  const { english } = useMenu();
  return (
    <div className="relative">
      {/*model iframe from sketch*/}
      <div className="sketchfab-embed-wrapper h-screen w-full relative z-10">
        {' '}
        <iframe
          className=" h-screen w-full"
          title="Chromatic Core"
          frameBorder="0"
          allowFullScreen
          scrolling="0"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          xr-spatial-tracking="true"
          execution-while-out-of-viewport="false"
          execution-while-not-rendered="true"
          web-share="true"
          hint={2}
          scrollwheel="0"
          sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          src="https://sketchfab.com/models/a9f0368eb94c475baae30579b704eed8/embed?autostart=1&scrollwheel=0&ui_animations=0&ui_infos=0&ui_stop=0&ui_inspector=0&ui_watermark_link=0&ui_watermark=0&ui_ar=0&ui_help=0&ui_settings=0&ui_vr=0&ui_fullscreen=0&ui_annotations=0&dnt=1"
        >
          {' '}
        </iframe>{' '}
        <div className="absolute w-full top-[60vh] md:top-[50vh] text-white">
          {/*contenedor limitante*/}
          <div className="max-w-[1180px] w-4/5  mx-auto flex flex-col md:flex-row items-end md:h-[110px] justify-between">
            <div className="relative">
              <img
                src="/img/welaunch.png"
                alt="we launch"
                width="338px"
                height="120px"
                className=""
              />
              <LanguageButton />
            </div>
            <div className="flex items-end mt-[30px] md:mt-0 mr-12">
              <h1 className="text-white w-full md:w-2/5 ml-auto">
                {english
                  ? 'We accompany you: developing, innovating, and guiding you to infinity and beyond.'
                  : 'Te acampañamos: desarrollando, innovando y guiandote al infinito y más allá.'}
              </h1>
              <img
                src="/img/down.svg"
                alt="scroll down"
                className=" animate-bounce hidden md:block"
              />
            </div>
          </div>
        </div>
        <div className="absolute w-full h-[5rem] -bottom-[12px] black_gradient"></div>{' '}
      </div>
      {/*NOTE el loading ya lo trae el componente por el global context*/}
      <LoadingScreen />
    </div>
  );
};

export default HeroHomePage;
