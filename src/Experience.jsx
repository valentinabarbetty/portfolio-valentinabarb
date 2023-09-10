import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MeshMatcapMaterial } from "three";
import Girl from "./World/Girl";
import Room from "./World/Room";


const Experience = () => {
  const sphereRef = useRef();
  const boxRef = useRef();
  const coneRef = useRef();
  const torusRef = useRef();
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    sphereRef.current.rotation.x += 0.5 * delta;
    boxRef.current.rotation.x += 1 * delta;
    torusRef.current.rotation.x += 1 * delta;

    const yBox = Math.sin(time * 1) * 0.5 - 0.5
    const ySphere = Math.sin(time * 1.5) * 0.5 - 0.5 
    const yCone = Math.sin(time * 2) * 0.5 - 0.5
    const yTorus = Math.sin(time * 2.5) * 0.5 - 0.5

    // Actualiza la posición del objeto
    if (sphereRef.current && boxRef.current) {
      sphereRef.current.position.y = ySphere;
      boxRef.current.position.y = yBox;
      coneRef.current.position.y = yCone;
      torusRef.current.position.y = yTorus;
    }
  });
  return (
    <>
    <ambientLight intensity={2} />
      <directionalLight position={[0, 25, 5]} intensity={8} />
    <Room />
      <Girl />
            
      <mesh ref={sphereRef} scale={0.1} position={[-4, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshNormalMaterial wireframe={false} color="purple" />
      </mesh>
      <mesh ref={boxRef} scale={0.1} position={[-3.5, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial wireframe={false} color="purple" />
      </mesh>
      <mesh ref={coneRef} scale={0.1} position={[-3, 0, 0]}>
        <coneGeometry />
        <meshMatcapMaterial
          wireframe={false}
          position={[10, 10, 5]}
          color="red"
        />
      </mesh>
      <mesh ref={torusRef} scale={0.1} position={[-2.5, 0, 0]}>
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

export default Experience;
