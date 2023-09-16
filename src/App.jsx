import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Info from "./info/Info";

const App = () => {
  // Camera settings
  const cameraSettings = {
    position: [0, 0, 5],
    fov: 60,
  };
 


  return (
    <>
      <Info
        name="Valentina"
        biography="I'm a software developer, and I love learning new things every day. 
         I'm currently studying systems engineering at Universidad del Valle
         😉"
      />
      <Canvas
                shadows>
        <Experience />
      </Canvas>
    </>
  );
};
export default App;
