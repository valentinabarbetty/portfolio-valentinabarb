import { ContactShadows, useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";

const Girl = (props) => {
  const girlRef = useRef();
  const girlModel = useGLTF("/assets/models/girl/girl.glb");
  const { nodes, materials, animations } = girlModel;

  const { actions } = useAnimations(animations, girlRef);

  useEffect(() => {
    const action = actions["metarig|rumba dancing"];
    action.play();
  }, []);

  return (
    // <mesh
    //     ref={girlRef}
    //     castShadow={true}
    //     position-x={-2}
    //     position-y={-1.1}
    //     position-z={1}
    //     rotation-y={-Math.PI * -0.15}
    //     scale={0.7}
    //   >
    //     <primitive object={girlModel.scene} />
    //   </mesh>

    <group ref={girlRef} {...props} dispose={null}  
    position-x={-2} position-y={-1.1}
        position-z={1} rotation-y={-Math.PI * -0.15}
            scale={0.7}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" castShadow rotation={[-Math.PI / 2, 0, 0]}>
          <group
            name="1a4b2375fda24cd395db871520613ed8fbx"
            rotation={[Math.PI / 2, 0, 0]}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group
                  name="Cube001"
                  castShadow
                  receiveShadow
                  position={[-0.049, -0.038, -0.09]}
                  rotation={[0.078, 0.284, -0.035]}
                />
                <group
                  name="hat"
                  castShadow
                  receiveShadow
                  position={[0.013, 3.993, -0.064]}
                  rotation={[-0.104, 0.285, 0.016]}
                />
                <group
                  name="hair2"
                  castShadow
                  receiveShadow
                  position={[0.15, 3.3, 0.934]}
                  rotation={[-1.936, 0.511, -2.755]}
                  scale={0.291}
                />
                <group
                  name="hair"
                  castShadow
                  receiveShadow
                  position={[-0.215, 2.474, -0.715]}
                  rotation={[-2.141, 0.742, 0.776]}
                  scale={0.079}
                />
                <group
                  name="Cube002"
                  castShadow
                  receiveShadow
                  position={[0.226, 0.012, -0.102]}
                  rotation={[0.078, 0.284, -0.035]}
                />
                <group
                  name="ponytails"
                  castShadow
                  receiveShadow
                  position={[0.44, 2.351, -0.673]}
                  rotation={[-0.174, 0.571, 0.499]}
                />
                <group
                  name="bows"
                  castShadow
                  receiveShadow
                  position={[0.448, 2.394, -0.663]}
                  rotation={[0.786, 0.805, 0.264]}
                />
                <group
                  name="metarig"
                  castShadow
                  receiveShadow
                  position={[-0.049, -0.038, -0.09]}
                  rotation={[-1.503, 0.033, 0.284]}
                >
                  <group name="Object_12">
                    <primitive object={nodes._rootJoint} />
                    <skinnedMesh
                      name="Object_15"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_15.geometry}
                      material={materials.skin}
                      skeleton={nodes.Object_15.skeleton}
                    />
                    <skinnedMesh
                      name="Object_16"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_16.geometry}
                      material={materials.shorts}
                      skeleton={nodes.Object_16.skeleton}
                    />
                    <skinnedMesh
                      name="Object_17"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_17.geometry}
                      material={materials.Tshirt}
                      skeleton={nodes.Object_17.skeleton}
                    />
                    <skinnedMesh
                      name="Object_18"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_18.geometry}
                      material={materials.glasses}
                      skeleton={nodes.Object_18.skeleton}
                    />
                    <skinnedMesh
                      name="Object_19"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_19.geometry}
                      material={materials.lens}
                      skeleton={nodes.Object_19.skeleton}
                    />
                    <skinnedMesh
                      name="Object_20"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_20.geometry}
                      material={materials.brows}
                      skeleton={nodes.Object_20.skeleton}
                    />
                    <skinnedMesh
                      name="Object_21"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_21.geometry}
                      material={materials["skin.001"]}
                      skeleton={nodes.Object_21.skeleton}
                    />
                    <skinnedMesh
                      name="Object_22"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_22.geometry}
                      material={materials.eyes}
                      skeleton={nodes.Object_22.skeleton}
                    />
                    <skinnedMesh
                      name="Object_24"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_24.geometry}
                      material={materials.material}
                      skeleton={nodes.Object_24.skeleton}
                    />
                    <skinnedMesh
                      name="Object_25"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_25.geometry}
                      material={materials.ribbon}
                      skeleton={nodes.Object_25.skeleton}
                    />
                    <skinnedMesh
                      name="Object_27"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_27.geometry}
                      material={materials["brows.001"]}
                      skeleton={nodes.Object_27.skeleton}
                    />
                    <skinnedMesh
                      name="Object_28"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_28.geometry}
                      material={materials.brows}
                      skeleton={nodes.Object_28.skeleton}
                    />
                    <skinnedMesh
                      name="Object_30"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_30.geometry}
                      material={materials["brows.001"]}
                      skeleton={nodes.Object_30.skeleton}
                    />
                    <skinnedMesh
                      name="Object_31"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_31.geometry}
                      material={materials.brows}
                      skeleton={nodes.Object_31.skeleton}
                    />
                    <skinnedMesh
                      name="Object_33"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_33.geometry}
                      material={materials.sandals}
                      skeleton={nodes.Object_33.skeleton}
                    />
                    <skinnedMesh
                      name="Object_35"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_35.geometry}
                      material={materials.brows}
                      skeleton={nodes.Object_35.skeleton}
                    />
                    <skinnedMesh
                      name="Object_36"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_36.geometry}
                      material={materials["brows.001"]}
                      skeleton={nodes.Object_36.skeleton}
                    />
                    <skinnedMesh
                      name="Object_38"
                      castShadow
                      receiveShadow
                      geometry={nodes.Object_38.geometry}
                      material={materials.glasses}
                      skeleton={nodes.Object_38.skeleton}
                    />
                    <group
                      name="Object_14"
                      castShadow
                      receiveShadow
                      position={[-0.049, -0.038, -0.09]}
                      rotation={[0.078, 0.284, -0.035]}
                    />
                    <group
                      name="Object_23"
                      castShadow
                      receiveShadow
                      position={[0.013, 3.993, -0.064]}
                      rotation={[-0.104, 0.285, 0.016]}
                    />
                    <group
                      name="Object_26"
                      castShadow
                      receiveShadow
                      position={[0.15, 3.3, 0.934]}
                      rotation={[-1.936, 0.511, -2.755]}
                      scale={0.291}
                    />
                    <group
                      name="Object_29"
                      castShadow
                      receiveShadow
                      position={[-0.215, 2.474, -0.715]}
                      rotation={[-2.141, 0.742, 0.776]}
                      scale={0.079}
                    />
                    <group
                      name="Object_32"
                      castShadow
                      receiveShadow
                      position={[0.226, 0.012, -0.102]}
                      rotation={[0.078, 0.284, -0.035]}
                    />
                    <group
                      name="Object_34"
                      castShadow
                      receiveShadow
                      position={[0.44, 2.351, -0.673]}
                      rotation={[-0.174, 0.571, 0.499]}
                    />
                    <group
                      name="Object_37"
                      castShadow
                      receiveShadow
                      position={[0.448, 2.394, -0.663]}
                      rotation={[0.786, 0.805, 0.264]}
                    />
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Girl;
useGLTF.preload("/assets/models/girl/girl.glb");
