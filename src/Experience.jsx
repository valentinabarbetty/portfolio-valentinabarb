import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { MeshMatcapMaterial } from "three";
import Sphere from "./Sphere";
import Cone from "./Cone";
import Torus from "./Torus";
import Box from "./Box";

const Experience = () => {

    return (
        <>
           <Box />
            <Sphere />
            <Cone />
            <Torus />
        </>

    )
}

export default Experience;