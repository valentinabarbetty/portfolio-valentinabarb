
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Cat(props) {
  const { nodes, materials } = useGLTF("/assets/models/cat/cat.glb");
  return (
    <group {...props} dispose={null} position-x={-1}
    position-y={-2}
    position-z={1}
    rotation-y={-Math.PI * -1.5}
    scale={0.5}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube.geometry}
        material={materials.headTexture}
        position={[1.497, 1.836, -1.352]}
        scale={0.689}
      />
    </group>
  );
}

useGLTF.preload("/assets/models/cat/cat.glb");
export default Cat;