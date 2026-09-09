"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text, MeshTransmissionMaterial, Environment } from "@react-three/drei";
import { useRef, useState } from "react";
import * as THREE from "three";

function Lens() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport, pointer } = useThree();
  const [target] = useState(() => new THREE.Vector3(0, 0, 1.5));

  useFrame((state, delta) => {
    // Smoothly follow the cursor
    const x = (pointer.x * viewport.width) / 2;
    const y = (pointer.y * viewport.height) / 2;
    
    target.set(x, y, 1.5);
    if (meshRef.current) {
      meshRef.current.position.lerp(target, delta * 5);
      
      // Add a slight rotation for dynamic feel
      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, pointer.y * 0.5, delta * 3);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, -pointer.x * 0.5, delta * 3);
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 1.5]}>
      <sphereGeometry args={[1.2, 64, 64]} />
      {/* 
        MeshTransmissionMaterial creates the glass/lens effect. 
        It renders the scene behind it into a texture and refracts it.
      */}
      <MeshTransmissionMaterial
        buffer={undefined}
        transmission={1}
        thickness={0.5}
        roughness={0}
        ior={1.2}
        chromaticAberration={0.06}
        distortion={0.1}
        distortionScale={0.1}
        temporalDistortion={0.0}
        clearcoat={1}
        clearcoatRoughness={0.1}
        color="#ffffff"
        background={new THREE.Color("#030014")}
      />
    </mesh>
  );
}

function Typography() {
  const { viewport } = useThree();
  const isMobile = viewport.width < 5;
  const scale = isMobile ? 0.5 : 1;

  return (
    <group position={[0, 0, -1]} scale={scale}>
      <Text
        font="https://fonts.gstatic.com/s/syne/v22/8vIJ7w4qzj-k_Cto_H-k-zQ.woff2"
        fontSize={1}
        color="white"
        position={[-1.2, 0.8, 0]}
        anchorX="right"
      >
        Digital &
      </Text>
      
      <Text
        font="https://fonts.gstatic.com/s/cormorantgaramond/v16/co3bmX5slCNuHLi8bLeY9MK7whSqblvgpsuM.woff2"
        fontSize={1.2}
        color="#fbbf24"
        position={[-0.8, 0.8, 0]}
        anchorX="left"
        fontStyle="italic"
      >
        intelligent
      </Text>
      
      <Text
        font="https://fonts.gstatic.com/s/syne/v22/8vIJ7w4qzj-k_Cto_H-k-zQ.woff2"
        fontSize={2}
        color="white"
        position={[0, -0.6, 0]}
        anchorX="center"
        letterSpacing={0.02}
      >
        SOLUTIONS
      </Text>
    </group>
  );
}

export default function HeroCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full z-10 pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Typography />
        <Lens />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
