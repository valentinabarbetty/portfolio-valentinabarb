import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Girl = () => {
    const girlRef = useRef();
    const girlModel = useGLTF("/assets/models/girl/girl.glb")
    const {animations} = girlModel;

    const {actions} = useAnimations(animations, girlRef)

    useEffect(()=>{
        const action = actions["metarig|rumba dancing"]
        action.play()
    }, [])

    return(
        <mesh ref={girlRef} position-x={-2} 
        position-y={-1.1} position-z={1} rotation-y={-Math.PI *-0.15} scale={0.7}>
            <primitive object={girlModel.scene}/>
        </mesh>
    )
};

export default Girl;
useGLTF.preload("/assets/models/girl/girl.glb");