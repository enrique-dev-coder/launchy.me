import { useMenu } from '../context/MenuContext';
import { useEffect } from 'react';

const LoadingScreen = () => {
  const { loading } = useMenu();
  const { setLoading } = useMenu();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div
      className={`w-full h-screen absolute z-30 ${
        loading ? 'top-0' : '-top-[100%]'
      }  transition-all duration-500 bg-black flex justify-center items-center`}
    >
      <img
        src="/img/loading_image.png"
        alt="laoding screen"
        className="  animate-spin"
      />
    </div>
  );
};

export default LoadingScreen;
