import React from "react";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Box = () => {
  const boxRef = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    boxRef.current.rotation.x += 1 * delta;
    const x = Math.sin(time) * -5; // Multiplicamos por un factor para amplificar el movimiento
    const z = Math.cos(time) * 5;

    // Actualiza la posición del objeto
    if (boxRef.current) {
      boxRef.current.position.x = x;
      boxRef.current.position.z = z;
    }
  });
  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={5} />
      <mesh ref={boxRef} position={[2, 0, -1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          wireframe={false}
          position={[10, 10, 5]}
          color="green"
        />
      </mesh>
    </>
  );
};

export default Box;
