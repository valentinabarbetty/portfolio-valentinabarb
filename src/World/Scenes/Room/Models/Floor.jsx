import { useTexture } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import { RepeatWrapping, Vector2 } from "three";

const Floor = (props) => {
   
    return (
        <RigidBody type="fixed">
            <mesh {...props} >
                <planeGeometry
                    args={[10,10,10,10]}
                />
                <meshStandardMaterial
                    color="#e4f0f8
                    "
                />
            </mesh>
        </RigidBody>

    );
}
export default Floor;