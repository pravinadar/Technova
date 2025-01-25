"use client";
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Sphere } from "@react-three/drei"
import { useRef } from "react"

function AnimatedSphere({ position, scale }) {
  const meshRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.5
    meshRef.current.rotation.y = time * 0.2
  })

  return (
    (<Sphere ref={meshRef} position={position} scale={scale}>
      <meshStandardMaterial color="#88c9ff" roughness={0.4} metalness={0.7} transparent opacity={0.6} />
    </Sphere>)
  );
}

export default function AnimatedBackground() {
  return (
    (<div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Environment preset="sunset" background />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <AnimatedSphere position={[-4, 0, -5]} scale={2} />
        <AnimatedSphere position={[4, 0, -5]} scale={1.5} />
        <AnimatedSphere position={[0, 3, -5]} scale={1} />
      </Canvas>
    </div>)
  );
}

