'use client';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {
  Canvas,
  extend,
  useFrame,
  useLoader,
  useThree,
} from '@react-three/fiber';
import { Suspense, useCallback, useMemo, useRef } from 'react';

extend({ OrbitControls });

function CameraControls() {
  // lets us access the camera
  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controlsRef = useRef<OrbitControls>();

  useFrame(() => controlsRef.current?.update());

  return (
    // @ts-ignore
    <orbitControls
      ref={controlsRef}
      args={[camera, domElement]}
      autoRotate
      autoRotateSpeed={-0.2}
    />
  );
}

function Points() {
  // Need to load image as a texture (using useLoader)
  const image = useLoader(THREE.TextureLoader, '/images/circle.png');
  const bufferRef = useRef<THREE.BufferAttribute>();
  let faceShift = 0;
  let frequency = 0.002;
  let amplitude = 3;

  const graph = useCallback(
    (x: number, z: number) => {
      return Math.sin(frequency * (x ** 2 + z ** 2 + faceShift)) * amplitude;
    },
    [amplitude, faceShift, frequency],
  );

  // we cant use a 2D array for the positions
  // instead we will do a 1D array where
  // [x1, y1, z1, x2, y2, z2, ...]

  const count = 100; // points across one axis
  const sep = 2; // seperation between points

  let positions = useMemo(() => {
    let positions = [];

    // iterate over an index on the x-grid (left to right)
    // in that nested loop, iterate from back to front
    // will have (x, z) coordinates
    // then compute y from (x, z)

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);
        let y = graph(x, z);

        // push the x, y, z coordinates to the positions array
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, sep, graph]);

  // animate values
  useFrame(() => {
    if (!bufferRef.current) return;

    faceShift += 15;
    const currentPositions = bufferRef.current.array as Float32Array;

    let index = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = sep * (xi - count / 2);
        let z = sep * (zi - count / 2);

        // push the x, y, z coordinates to the positions array
        currentPositions[index + 1] = graph(x, z);
        index += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          // @ts-ignore
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          itemSize={3}
          count={positions.length / 3}
        />
      </bufferGeometry>

      <pointsMaterial
        attach={'material'}
        map={image}
        color={0x00aaff}
        size={0.5}
        transparent={false}
        alphaTest={0.5}
        opacity={1}
      />
    </points>
  );
}

function AnimationCanvas() {
  return (
    <Canvas camera={{ position: [100, 10, 0], fov: 75 }}>
      <Suspense fallback={null}>
        <Points />
      </Suspense>
      <CameraControls />
    </Canvas>
  );
}

export default function WavePage() {
  return (
    <div className="bg-black h-screen w-full">
      <Suspense fallback={<div>Loading</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
}
