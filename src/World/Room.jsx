import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Room = () => {
    const roomRef = useRef();
    const roomModel = useGLTF("/assets/models/room/low_poly_living_room.glb")
    // const {animations} = girlModel;

    // const {actions} = useAnimations(animations, girlRef)

    useEffect(()=>{
        // const action = actions["metarig|rumba dancing"]
        // action.play()
    }, [])

    return(
        <mesh ref={roomRef} position-x={3} position-y={-2} rotation-y={-Math.PI * 0.1} scale={0.005}>
            <primitive object={roomModel.scene}/>
        </mesh>
    )
};

export default Room;
useGLTF.preload("/assets/models/room/low_poly_living_room.glb");