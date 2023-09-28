import { Center, Float, Html, Text, Text3D } from "@react-three/drei";
import React from "react";
const NameText = () => {
  const text = `Welcome to \nVale's World`;
  return (
    <Float speed={1} // Animation speed
    // rotationIntensity={1.5} // XYZ rotation intensity
    floatIntensity={0} // Up/down float intensity
>
    
      <Text3D
        font="/assets/fonts/Abril Fatface_Regular.json"
        bevelEnabled
        bevelSize={0.005}
        bevelThickness={0.01}
        height={0.1}
        lineHeight={0.5}
        letterSpacing={0.05}
        size={0.10}
        position-y={1.5}
        position-x={-4.8}
        position-z={0.5}
        rotation-y={Math.PI / 2}
        rotation-x={0.1}
      >
        {text}

        <meshNormalMaterial color="purple"/>
      </Text3D>
    </Float>
  );
};

export default NameText;
