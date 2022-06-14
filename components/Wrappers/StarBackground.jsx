import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from '../../node_modules/maath/random/dist/maath-random.esm';

//NOTE el canvas se renderiza con dimensiones entonces se va a tener que usar una dimension para todos los compoentes
export default function App({ children, height }) {
  return (
    <div className="relative">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{
          height,
          background:
            'radial-gradient(ellipse at bottom,#000000 0,#000000 100%',
        }}
      >
        <Stars />
      </Canvas>
      <div className="absolute inset-0 w-full h-full">{children}</div>
    </div>
  );
}

function Stars(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(10000), { radius: 1.5 })
  );
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere}
        stride={3}
        frustumCulled={false}
        {...props}
      >
        <PointMaterial
          transparent
          color="#AEAEAE"
          size={0.001}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}
