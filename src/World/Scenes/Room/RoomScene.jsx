import { Suspense, useRef } from "react";
import { BakeShadows, ContactShadows } from "@react-three/drei";
import Girl from "./Models/Girl";
import PBR from "./Models/PBR";
import Question from "./Models/Question";
import NameText from "./Text/NameText";
import Room from "./Models/Room";
import { useFrame } from "@react-three/fiber";
import Lights from "../../Staging/Lights";
import Environments from "../../Staging/Environment";
import { Cutie } from "./Models/Cutie";
import { Physics } from "@react-three/rapier";
import Floor from "./Models/Floor";
import Cat from "./Models/Cat";
const RoomScene = ({ show, setShow }) => {
  const sphereRef = useRef();
  const boxRef = useRef();
  const coneRef = useRef();
  const torusRef = useRef();
  // const [show,setShow]=useState(true)
  useFrame((state, delta) => {
    const time = state.clock.getElapsedTime();
    sphereRef.current.rotation.x += 0.5 * delta;
    boxRef.current.rotation.x += 1 * delta;
    torusRef.current.rotation.x += 1 * delta;

    const yBox = Math.sin(time * 1) * 0.5 - 0.5;
    const ySphere = Math.sin(time * 1.5) * 0.5 - 0.5;
    const yCone = Math.sin(time * 2) * 0.5 - 0.5;
    const yTorus = Math.sin(time * 2.5) * 0.5 - 0.5;

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
      <Suspense fallback={null}>
        {/* <OrbitControls /> */}
        <ambientLight intensity={2} />
        <Lights />

        <BakeShadows />
        <ContactShadows
          opacity={1}
          position-y={-1.9}
          frames={60}
          scale={10}
          blur={1}
          resolution={512}
          color="grey"
        />
        {/* <directionalLight position={[0, 25, 5]} intensity={8} /> */}
        <Environments preset="sunset" background={true} />

        <Girl />
        <Question show={show} onClick={() => setShow(!show)} />
        <PBR />
        <NameText />
        <Cutie />
        <Cat />
        <Room />
        <Floor
          rotation-x={-Math.PI / 2.5}
          rotation-y={-Math.PI * 2}
          scale={0.7}
          position-x={-3}
          position-y={-0.9}
          position-z={-2}
          receiveShadow
        />
      </Suspense>
      {/* <NameText /> */}
      <mesh ref={sphereRef} scale={0.1} castShadow position={[4, 1, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshNormalMaterial wireframe={false} color="purple" />
      </mesh>
      <mesh ref={boxRef} scale={0.1} position={[3.5, 2, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial wireframe={false} color="purple" />
      </mesh>
      <mesh ref={coneRef} scale={0.1} position={[3, 3, 0]}>
        <coneGeometry />
        <meshMatcapMaterial
          wireframe={false}
          position={[10, 10, 5]}
          color="red"
        />
      </mesh>
      <mesh ref={torusRef} scale={0.1} position={[2.5, 0, 0]}>
        <torusGeometry />
        <meshToonMaterial
          wireframe={false}
          position={[10, 10, 5]}
          color="blue"
        />
      </mesh>
    </>
  );
};

export default RoomScene;
