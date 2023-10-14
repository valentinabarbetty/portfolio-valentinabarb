import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export function Cutie(props) {
  const cutieRef = useRef();
  const cutieModel = useGLTF("/assets/models/cutie/cutie.glb");
  const { nodes, materials } = cutieModel;

  const onHandleSphere = () => {
    cutieRef.current.applyImpulse(
      {
        x: 1.2,
        y: 0,
        z: 0,
      },
      true
    );
    

    // ballBodyRef.current.applyTorqueImpulse({
    //     x:2,
    //     y:2,
    //     z:2
    // }, true)

    cutieRef.current.addForce(
      {
        x: 1.2,
        y: 0,
        z: 0,
      },
      true
    );
  };
  const [play, setPlay] = useState(false);
  const [hitSound] = useState(() => new Audio("assets/sound/waa.wav"));

  useEffect(() => {
    if (play) {
      hitSound.currentTime = 0;
      hitSound.volume = Math.random();
      hitSound.play();
    }
  }, [play]);

  useEffect(() => {
    cutieRef.current.sleep();
  }, []);
  return (
    <RigidBody
      ref={cutieRef}
      colliders={"ball"}
      friction={0}
      restitution={0}
      onCollisionEnter={() => setPlay(true)}
      onCollisionExit={() => setPlay(false)}
    >
      <group
        {...props}
        dispose={null}
        position-x={-3}
        position-y={-1}
        position-z={1}
        rotation-y={-Math.PI * -0.15}
        scale={0.7}
        onClick={onHandleSphere}
      >
        <group scale={[0.688, 0.668, 0.68]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials.Body}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials.Mouth}
          />
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_7.geometry}
          material={materials.Ears}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_9.geometry}
          material={materials.Eyes}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_11.geometry}
          material={materials.Haire}
          position={[-0.078, 0.374, 0.471]}
          rotation={[-0.403, 0.156, 0.074]}
          scale={0.207}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_13.geometry}
          material={materials.Legs}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_15.geometry}
          material={materials.Hands}
          position={[0, 0, -0.037]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_17.geometry}
          material={materials.Tung}
        />
      </group>
    </RigidBody>
  );
}

useGLTF.preload("/assets/models/cutie/cutie.glb");
export default Cutie;
