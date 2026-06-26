import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, Environment } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh } from "three";

function Sculpture() {
  const ref = useRef<Mesh>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.x += dt * 0.08;
    ref.current.rotation.y += dt * 0.12;
  });
  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[1, 0.32, 220, 32]} />
        <MeshTransmissionMaterial
          thickness={0.6}
          roughness={0.15}
          transmission={1}
          ior={1.35}
          chromaticAberration={0.02}
          backside
          color="#B76E29"
          attenuationColor="#F8F8F5"
          attenuationDistance={1.4}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 4.2], fov: 40 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[3, 4, 5]} intensity={1.4} />
        <directionalLight position={[-4, -2, -3]} intensity={0.6} color="#B76E29" />
        <Sculpture />
        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}
