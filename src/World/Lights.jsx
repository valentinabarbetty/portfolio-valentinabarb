import {
    DirectionalLightHelper,
    HemisphereLightHelper,
    PointLightHelper,
    SpotLightHelper,
  } from "three";
  import { useEffect, useMemo, useRef } from "react";
  import { useFaceControls, useHelper } from "@react-three/drei";

  const Lights = () => {
      
    const spotLightRef = useRef();
    // useHelper(spotLightRef, SpotLightHelper);
  
    
  
    return (
      <>
        <ambientLight intensity={0.5} />
  
        <spotLight
            ref={spotLightRef}
            castShadow={true}
            position={[-2, 3, 2]}
            angle={Math.PI / 2}
            intensity={50}
            color={"yellow"}
            penumbra={1}
  			 distance={8}
        />
      </>
    );
  };
  export default Lights;
  