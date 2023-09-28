import React, { useRef } from "react";
import { useGLTF, useTexture } from "@react-three/drei";

export function PBR(props) {
  const { nodes, materials } = useGLTF("/assets/models/pbr/meet_mat.glb");
  console.log(nodes.Object_3.geometry);
  const PATH = "/assets/textures/";

  const propsTexture = useTexture({
    map: PATH + "leather_white_diff_4k.jpg",
    normalMap: PATH + 'leather_white_nor_dx_4k.jpg',
    roughnessMap: PATH + 'leather_white_nor_dx_4k.jpg',
    aoMap: PATH + 'leather_white_ao_4k.jpg',
  })
  
  return (
    <group {...props} dispose={null} >
      <group rotation={[-Math.PI / 2.5, -Math.PI * 2, 0]} scale={0.15}>
        <group position={[-12, 15, -6]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_3.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial {...propsTexture}/>
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_4.geometry}
            material={materials["Scene_-_Root"]}
          > <meshStandardMaterial {...propsTexture}/>
          </mesh>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Object_5.geometry}
            material={materials["Scene_-_Root"]}
          >
            <meshStandardMaterial {...propsTexture}/>
          </mesh>
        </group>
      </group>
      
    </group>
  );
}

useGLTF.preload("/assets/models/pbr/meet_mat.glb");
export default PBR;