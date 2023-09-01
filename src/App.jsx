import React from 'react';
import { Canvas } from '@react-three/fiber';
import Experience from './Experience';
import Info from './Info';

const App = () => {
  return (
    <>
      <Canvas className="canvas-container" camera={{ position: [2, 0, 5] }}>
        
        <Info nombre="Valentina" 
        biografia="I'm a software developer, and I love learning new things every day"
        />
        
        <Experience />
      </Canvas>
      
    </>
  );
};

export default App;