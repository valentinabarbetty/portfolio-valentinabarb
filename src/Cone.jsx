import React from "react";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cone = () => {
  const coneRef = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    coneRef.current.rotation.x += 1 * delta;
    const x = Math.sin(time) * 3; // Multiplicamos por un factor para amplificar el movimiento
    const z = Math.cos(time) * 3;

    // Actualiza la posición del objeto
    if (coneRef.current) {
      coneRef.current.position.x = x;
      coneRef.current.position.z = z;
    }
  });

  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={2} />
      <directionalLight position={[0, 25, 5]} intensity={5} />
      <mesh ref={coneRef} position={[-3, 0, 2]}>
        <coneGeometry />
        <meshMatcapMaterial
          wireframe={false}
          position={[10, 10, 5]}
          color="red"
        />
      </mesh>
    </>
  );
};

export default Cone;
