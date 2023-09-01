import { createRoot} from "react-dom/client";
import Experience from "./Experience";
import "./styles.css"
import { Canvas } from "@react-three/fiber";
import Info from './Info';

const root = createRoot(document.getElementById('root'));

root.render(
    <>
    <Canvas camera={
            {
                position: [2, 0, 5]
            }
        }>
        <Info nombre="Valentina" 
        biografia="I'm a software developer, and I love learning new things every day"
        />
        <Experience />
    </Canvas>
    </>
    
);
