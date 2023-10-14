import { Canvas } from "@react-three/fiber";
import Experience from "./World/Experience";
import Info from "./info/Info";
import { Loader } from "@react-three/drei";
import { useState} from "react";

const App = () => {
  // Camera settings
  const cameraSettings = {
    position: [0, 0, 5],
    fov: 60,
  };
  const [show, setShow] = useState(true);
 


  return (
    <>
      <Info 
        name="Valentina"
        biography="I'm a software developer, and I love learning new things every day. 
         I'm currently studying systems engineering at Universidad del Valle
         😉"
         show={show}
      />
      <Canvas
                shadows
                camera={cameraSettings} >
        <Experience show={show} setShow={setShow}/>
      </Canvas>
      <Loader />
    </>
  );
};
export default App;
