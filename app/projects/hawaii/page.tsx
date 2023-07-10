'use client';

import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { Sky, OrbitControls, Plane } from '@react-three/drei';

const Terrain = () => {
  const height = useLoader(THREE.TextureLoader, '/images/elevation.png');
  const normals = useLoader(THREE.TextureLoader, '/images/normal.png');
  const colors = useLoader(THREE.TextureLoader, '/images/colors.png');

  return (
    <group>
      <Plane
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -3, 0]}
        args={[64, 64, 1024, 1024]}
      >
        <meshStandardMaterial
          attach="material"
          color="white"
          map={colors}
          metalness={0.2}
          normalMap={normals}
          displacementMap={height}
        />
      </Plane>
    </group>
  );
};

const AnimationCanvas = () => {
  return (
    <Canvas>
      <fog attach="fog" args={['white', 0, 35]} />
      <OrbitControls autoRotate />
      <pointLight intensity={2} position={[0, 20, 1]} />
      <Sky sunPosition={[0, 5, 1]} />
      <Suspense fallback={null}>
        <Terrain />
      </Suspense>
    </Canvas>
  );
};

export default function App() {
  return (
    <div className="h-screen w-full">
      <Suspense fallback={<div>Loading</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
}
