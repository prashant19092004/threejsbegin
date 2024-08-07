import ReactDOM from "react-dom/client";
import "./styles.css";
import { Canvas } from '@react-three/fiber';
import Scene from "./Scene";
import * as THREE from 'three';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Canvas>
        <Scene />
    </Canvas>
);
