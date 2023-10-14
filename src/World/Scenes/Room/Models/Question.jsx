import React, { useRef, useEffect, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Question(props, { show }) {
  const questionRef = useRef();
  const questionModel = useGLTF("/assets/models/question/question.glb");
  const { nodes, materials, animations } = questionModel;

  const { actions } = useAnimations(animations, questionRef);

  useEffect(() => {
    const action = actions["Block Rotation"];
    if (show) {
      action.stop(); // Play the action if show is true
    } else {
      action.play(); // Stop the action if show is false
    }
  }, []);

  return (
    <group
      ref={questionRef}
      {...props}
      dispose={null}
      scale={2}
      position-x={0}
      position-y={2}
      position-z={-0.5}
      //rotation-x={-Math.PI / 2.5}
      rotation-y={Math.PI * 1.02}
      
    >
      <group name="Sketchfab_Scene">
        <group
          name="Sketchfab_model"
          rotation={[-Math.PI / 2, 0, 0]}
          scale={1.678}
        >
          <group
            name="30d1689385274226a8acca567e698190fbx"
            rotation={[Math.PI / 2, 0, 0]}
            scale={0.01}
          >
            <group name="Object_2">
              <group name="RootNode">
                <group name="Area" position={[0, 54.33, 0]} scale={100}>
                  <group name="Object_5" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_6" />
                  </group>
                </group>
                <group name="Point" position={[0, -86.919, 0]} scale={100}>
                  <group name="Object_8" rotation={[Math.PI / 2, 0, 0]}>
                    <group name="Object_9" />
                  </group>
                </group>
                <group
                  name="Empty001"
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={14.119}
                >
                  <group name="Empty002" rotation={[0, 0, 2.4]} scale={0.995}>
                    <group
                      name="Cube001"
                      rotation={[0, 0, Math.PI / 2]}
                      scale={7.118}
                    >
                      <mesh
                        name="Cube001_Material001_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube001_Material001_0.geometry}
                        material={materials["Material.001"]}
                      />
                      <group name="Plane" rotation={[0, 0, -Math.PI / 2]}>
                        <mesh
                          name="Plane__0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Plane__0.geometry}
                          material={materials.Plane__0}
                        />
                      </group>
                      <group name="Plane001">
                        <mesh
                          name="Plane001__0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Plane001__0.geometry}
                          material={materials.Plane__0}
                        />
                      </group>
                      <group name="Plane002" rotation={[0, 0, Math.PI / 2]}>
                        <mesh
                          name="Plane002__0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Plane002__0.geometry}
                          material={materials.Plane__0}
                        />
                      </group>
                      <group name="Plane003" rotation={[0, 0, -Math.PI]}>
                        <mesh
                          name="Plane003__0"
                          castShadow
                          receiveShadow
                          geometry={nodes.Plane003__0.geometry}
                          material={materials.Plane__0}
                        />
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
export default Question;
useGLTF.preload("/assets/models/question/question.glb");
