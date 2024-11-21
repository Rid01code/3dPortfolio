"use client"

import React, { useRef, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export default function SpiderMan(props) {
    const { nodes, materials } = useGLTF('/Models/spiderman.glb')
    const spiderManRef = useRef()

    useEffect(() => {

        const spiderManGroup = spiderManRef.current
    
        const clock = new THREE.Clock()
    
        const zoomInDuration = 2 
        const swingAmplitude = 1.5 
        const swingPeriod = 1.5 
        let swingCount = 0 
    
        const animate = () => {
            const elapsedTime = clock.getElapsedTime();
    
            if (elapsedTime < zoomInDuration) {
                const zoomFactor = elapsedTime / zoomInDuration;
              spiderManGroup.scale.set(1 * zoomFactor, 1 * zoomFactor, 1 * zoomFactor);
            } else {
    
              const swingAngle = swingAmplitude * Math.sin((Math.PI * (elapsedTime - zoomInDuration)) / swingPeriod);
                spiderManGroup.rotation.y = swingAngle;
    
                if (elapsedTime > zoomInDuration && Math.floor((elapsedTime - zoomInDuration) / swingPeriod) > swingCount) {
                swingCount++;
                }
                
                if (swingCount >= 3) { 
                    spiderManGroup.rotation.y = 0; 
                    return; 
                }
            }
            requestAnimationFrame(animate);
}    
    
        animate()
        }, [])

    return (
        <group {...props} dispose={null} ref={spiderManRef}>
            <group
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.2, 0.2, 0.2]}
            >
            <group rotation={[Math.PI / 2, 0, 0]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial.geometry}
                    material={materials.lambert2}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.defaultMaterial_1.geometry}
                    material={materials.lambert1}
                />
            </group>
            </group>
        </group>
    )
}

useGLTF.preload('/Models/spiderman.glb')