import React from "react";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Torus = () => {
  const torusRef = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    torusRef.current.rotation.x += 1 * delta;
    const x = Math.sin(time) * 10; // Multiplicamos por un factor para amplificar el movimiento
    const z = Math.cos(time) * -10;

    // Actualiza la posición del objeto
    if (torusRef.current) {
      torusRef.current.position.x = x;
      torusRef.current.position.z = z;
    }
  });

  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={2} />
      <directionalLight position={[0, 25, 5]} intensity={5} />
      <mesh ref={torusRef} position={[5, 0, -2]}>
        <torusGeometry  />
        <meshToonMaterial
          wireframe={false}
          position={[10, 10, 5]}
          color="blue"
        />
      </mesh>
    </>
  );
};

export default Torus;
