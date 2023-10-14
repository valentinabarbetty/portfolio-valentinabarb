import {
  BakeShadows,
  ContactShadows,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { MeshMatcapMaterial } from "three";
import RoomScene from "./Scenes/Room/RoomScene";

import Controls from "./Controls/Controls";
import { Physics } from "@react-three/rapier";

const Experience = ({ show, setShow }) => {
  return (
    <>
      {/* <Controls /> */}
      <Physics>
        <RoomScene show={show} setShow={setShow} />
      </Physics>
    </>
  );
};

export default Experience;
