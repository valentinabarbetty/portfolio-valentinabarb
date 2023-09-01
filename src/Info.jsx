import React from "react";
import { Html, Text } from "@react-three/drei";

const Info = ({ nombre, biografia }) => {
  return (
    <Html className="info-container" position={[-10,12,-6]}>
      <div>
        <h3 className="name">Hi there! I'm {nombre}.</h3>
        <p className="bio">{biografia}.</p>
      </div>
    </Html>
  );
};

// const Info = ({ nombre, biografia }) => {
//   return (
//     <>
//     <Text className="name">
//         Hi there! my name is {nombre}.
//     </Text>
//     <Text className="bio">
//         {biografia}.
//     </Text>
//     </>
//   );
// };
export default Info;