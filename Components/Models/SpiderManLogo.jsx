
"use client"
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function SpiderManLogo(props) {
  const { nodes, materials } = useGLTF('/Models/spider-man_logo.glb')

  const modelRef = useRef()

  useFrame(() => {
    modelRef.current.rotation.y += 0.007
  })
  
  return (
    <group {...props} dispose={null}>
      <group
        scale={[0.7, 0.7, 0.7]}
        rotation={[0, 0, 0.01]}
        position={[0, 1, 0]}
        ref={modelRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={materials['Material.001']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_6.geometry}
          material={materials['Material.001']}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Models/spider-man_logo.glb')
