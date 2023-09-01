import React from "react";
import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Sphere = () => {
  const boxRef = useRef();
  const sphereRef = useRef();

  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    sphereRef.current.rotation.x += 1 * delta;
    const x = Math.sin(time * 2) * -2; // Multiplicamos por un factor para amplificar el movimiento
    const z = Math.cos(time * 2) * -2;

    // Actualiza la posición del objeto
    if (sphereRef.current) {
      sphereRef.current.position.x = x;
      sphereRef.current.position.z = z;
    }
  });

  return (
    <>
      <OrbitControls makeDefault />
      <ambientLight intensity={2} />
      <directionalLight position={[0, 25, 5]} intensity={5} />
      <mesh ref={sphereRef} >
        <sphereGeometry position={[0, 6, 10]} />
        <meshNormalMaterial
          wireframe={false}
          position={[10, 10, 5]}
          color="purple"
        />
      </mesh>
    </>
  );
};

export default Sphere;
