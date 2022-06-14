import { Suspense } from 'react';
import Model from './Model';
const PlanetModel = () => {
  return (
    <>
      <Suspense fallback={null}>
        <Model path="/planet/scene.gltf" scale={new Array(3).fill(1.5)} />
      </Suspense>
    </>
  );
};

export default PlanetModel;
