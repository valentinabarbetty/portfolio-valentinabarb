// import { useAnimations, useGLTF } from "@react-three/drei";
// import { useEffect, useRef } from "react";

// const Room = () => {
//     const roomRef = useRef();
//     const roomModel = useGLTF("/assets/models/room/low_poly_living_room.glb")
//      console.log(roomModel)

//     return(
//         <mesh ref={roomRef }position-x={-3} position-y={-2} position-z={-1} rotation-y={-Math.PI * 0.03} scale={0.005}>
//             <primitive object={roomModel.scene}/>
//         </mesh>
//     )
// };

// export default Room;
// useGLTF.preload("/assets/models/room/low_poly_living_room.glb");

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";
export function Room(props) {
  const { nodes, materials } = useGLTF("/assets/models/room/low_poly_living_room.glb");
  const PATH = "/assets/textures/";
  

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_Material_0.geometry}
        material={materials.Material}
        rotation-x={-Math.PI / 2.5}
        rotation-y={-Math.PI * 2}
        
        scale={0.7}
        position-x={-3} position-y={-0.80} position-z={-1} 
      />
      
    </group>
  );
}
export default Room;
useGLTF.preload("/assets/models/room/low_poly_living_room.glb");