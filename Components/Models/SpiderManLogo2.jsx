"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function SpiderManLogo2(props) {
    const { nodes, materials } = useGLTF('/Models/spider-man_logo.glb')

    const modelRef = useRef()

    useFrame(() => {
        modelRef.current.rotation.y -= 0.007
    })

    const redMaterial = new THREE.MeshStandardMaterial({
        color: '#FF0000', 
        roughness: materials.Spider ? materials.Spider.roughness : 0.5, 
        metalness: materials.Spider ? materials.Spider.metalness : 0.5, 
    })

    return (
        <group {...props} dispose={null}>
            <group {...props} dispose={null}
                scale={[0.7, 0.7, 0.7]}
                rotation={[0, 0, 0.01]}
                position={[0, 1, 0]}
                ref={modelRef}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_4.geometry}
                    material={redMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_5.geometry}
                    material={redMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Object_6.geometry}
                    material={redMaterial}
                />
            </group>
        </group>
    )
}

useGLTF.preload('/Models/spider-man_logo.glb')