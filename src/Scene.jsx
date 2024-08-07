import React, { useRef } from 'react'
import './styles.css';
import { useFrame, useThree, extend } from '@react-three/fiber';
// import { PlaneGeometry } from 'three';
import * as THREE from 'three';
// import { OrbitControls, orbitControls } from "three/examples/jsm/controls/OrbitControls";
import { OrbitControls } from "@react-three/drei";

extend({ OrbitControls : OrbitControls});


const Scene = () => {
    const planeRef = useRef();
    const boxRef = useRef();

    const { gl, camera } = useThree();


    useFrame((state, delta) => {
        // boxRef.current.rotation.y += delta;
        // planeRef.current.rotation.y += delta;
    })
  return (
    <>
        {/* <orbitControls args={[camera, gl.domElement]} /> */}
        <OrbitControls />
        <mesh ref={planeRef} position-x={-2}>
            <planeGeometry args={[2,2]} />
            <meshBasicMaterial color="orange" side={THREE.DoubleSide} />
        </mesh>
        <mesh ref={boxRef} position-x={2}>
            <boxGeometry />
            <meshBasicMaterial color="#7A00CA"/>
        </mesh>
    </>
  )
}

export default Scene