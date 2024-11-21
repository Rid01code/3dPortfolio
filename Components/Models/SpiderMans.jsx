"use client"

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

export default function SpiderMans(props) {
  const { nodes, materials } = useGLTF('/Models/spiderman_-_no_way_home.glb')
  const modelRef = useRef();

  useFrame((state, delta, XRFrame) => {
    modelRef.current.position.y = -1 + Math.sin(state.clock.elapsedTime) * 0.15;
  })
  
  return (
    <>
      <OrbitControls 
        enablePan={false} 
        enableZoom={false} 
        enableRotate={true} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      
      <group
        {...props}
        dispose={null}
        ref={modelRef}
        rotation={[0.10, 0, 0]}
        position={[0, 0, 0]}
        scale={[ 1.2 , 1.3 , 1.2]}>
        <group name="7ae82817fc05421394678c8fad9c5351fbx" scale={0.025}>
          <group name="Platform" position={[0, 5.32, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              name="Platform_Platform_0"
              castShadow
              receiveShadow
              geometry={nodes.Platform_Platform_0.geometry}
              material={materials.Platform}
            />
            <mesh
              name="Platform_Web_Platform_0"
              castShadow
              receiveShadow
              geometry={nodes.Platform_Web_Platform_0.geometry}
              material={materials.Web_Platform}
            />
          </group>
          <group
            name="Spiderman_1"
            position={[33.498, 28.104, -7.529]}
            rotation={[-Math.PI / 2, 0, 0.436]}>
            <mesh
              name="24_legs_1_1_0_0_Material_#48_0"
              castShadow
              receiveShadow
              geometry={nodes['24_legs_1_1_0_0_Material_#48_0'].geometry}
              material={materials.Material_48}
              position={[42.745, 4.305, -20.58]}
              scale={39.37}
            />
            <mesh
              name="24_eyeout_0_7_0_0_24_eyeout_07_0_0_0"
              castShadow
              receiveShadow
              geometry={nodes['24_eyeout_0_7_0_0_24_eyeout_07_0_0_0'].geometry}
              material={materials['24_eyeout_0.7_0_0']}
              position={[42.745, 4.305, -20.58]}
              scale={39.37}
            />
            <mesh
              name="24_lens_0_6_0_0_24_lens_06_0_0_0"
              castShadow
              receiveShadow
              geometry={nodes['24_lens_0_6_0_0_24_lens_06_0_0_0'].geometry}
              material={materials['24_lens_0.6_0_0']}
              position={[42.745, 4.305, -20.58]}
              scale={39.37}
            />
            <mesh
              name="24_lowerweb_0_7_0_0_24_lowerweb_07_0_0_0"
              castShadow
              receiveShadow
              geometry={nodes['24_lowerweb_0_7_0_0_24_lowerweb_07_0_0_0'].geometry}
              material={materials['24_lowerweb_0.7_0_0']}
              position={[42.745, 4.305, -20.58]}
              scale={39.37}
            />
            <mesh
              name="24_torso_1_1_0_0_Material_#76_0"
              castShadow
              receiveShadow
              geometry={nodes['24_torso_1_1_0_0_Material_#76_0'].geometry}
              material={materials.Material_76}
              position={[42.745, 4.305, -20.58]}
              scale={39.37}
            />
            <mesh
              name="27_eyeoutenv_1_1_0_0_Material_#84_0"
              castShadow
              receiveShadow
              geometry={nodes['27_eyeoutenv_1_1_0_0_Material_#84_0'].geometry}
              material={materials.Material_84}
              position={[42.745, 4.305, -20.58]}
              scale={39.37}
            />
            <mesh
              name="27_logoenv_0_6_0_0_Material_#58_0"
              castShadow
              receiveShadow
              geometry={nodes['27_logoenv_0_6_0_0_Material_#58_0'].geometry}
              material={materials.Material_58}
              position={[42.745, 4.305, -20.58]}
              scale={39.37}
            />
            <mesh
              name="27_upperwebenv_1_0_0_Material_#82_0"
              castShadow
              receiveShadow
              geometry={nodes['27_upperwebenv_1_0_0_Material_#82_0'].geometry}
              material={materials.Material_82}
              position={[42.745, 4.305, -20.58]}
              scale={39.37}
            />
            <mesh
              name="24_boots_1_1_0_0_Material_#52_0"
              castShadow
              receiveShadow
              geometry={nodes['24_boots_1_1_0_0_Material_#52_0'].geometry}
              material={materials.Material_52}
              position={[42.745, 4.305, -20.58]}
              scale={39.37}
            />
            <mesh
              name="24_hands_1_0_0_Material_#50_0"
              castShadow
              receiveShadow
              geometry={nodes['24_hands_1_0_0_Material_#50_0'].geometry}
              material={materials.Material_50}
              position={[42.745, 4.305, -20.58]}
              scale={39.37}
            />
            <mesh
              name="24_logo_1_0_0_Material_#59_0"
              castShadow
              receiveShadow
              geometry={nodes['24_logo_1_0_0_Material_#59_0'].geometry}
              material={materials.Material_59}
              position={[42.745, 4.305, -20.58]}
              scale={39.37}
            />
            <mesh
              name="24_mask_1_1_0_0_Material_#77_0"
              castShadow
              receiveShadow
              geometry={nodes['24_mask_1_1_0_0_Material_#77_0'].geometry}
              material={materials.Material_77}
              position={[42.745, 4.305, -20.58]}
              scale={39.37}
            />
            <mesh
              name="24_upperweb_0_7_0_0_Material_#80_0"
              castShadow
              receiveShadow
              geometry={nodes['24_upperweb_0_7_0_0_Material_#80_0'].geometry}
              material={materials.Material_80}
              position={[42.745, 4.305, -20.58]}
              scale={39.37}
            />
            <mesh
              name="27_lensenv_0_7_0_0_Material_#83_0"
              castShadow
              receiveShadow
              geometry={nodes['27_lensenv_0_7_0_0_Material_#83_0'].geometry}
              material={materials.Material_83}
              position={[42.745, 4.305, -20.58]}
              scale={39.37}
            />
            <mesh
              name="27_lowerwebenv_1_0_0_Material_#81_0"
              castShadow
              receiveShadow
              geometry={nodes['27_lowerwebenv_1_0_0_Material_#81_0'].geometry}
              material={materials.Material_81}
              position={[42.745, 4.305, -20.58]}
              scale={39.37}
            />
          </group>
          <group
            name="Spiderman_2"
            position={[-30.749, 7.702, -7.529]}
            rotation={[Math.PI, 0.436, 0]}
            scale={28.401}>
            <group name="Object_38" position={[1.277, 0, -0.446]}>
              <mesh
                name="Spiderman_2_Model001_Material003001_0"
                castShadow
                receiveShadow
                geometry={nodes.Spiderman_2_Model001_Material003001_0.geometry}
                material={materials['Model001_Material003.001']}
              />
              <mesh
                name="Spiderman_2_Model001_Material002001_0"
                castShadow
                receiveShadow
                geometry={nodes.Spiderman_2_Model001_Material002001_0.geometry}
                material={materials['Model001_Material002.001']}
              />
              <mesh
                name="Spiderman_2_Model001_Material001001_0"
                castShadow
                receiveShadow
                geometry={nodes.Spiderman_2_Model001_Material001001_0.geometry}
                material={materials['Model001_Material001.001']}
              />
              <mesh
                name="Spiderman_2_Model001_Material004001_0"
                castShadow
                receiveShadow
                geometry={nodes.Spiderman_2_Model001_Material004001_0.geometry}
                material={materials['Model001_Material004.001']}
              />
              <mesh
                name="Spiderman_2_Model001_Material005001_0"
                castShadow
                receiveShadow
                geometry={nodes.Spiderman_2_Model001_Material005001_0.geometry}
                material={materials['Model001_Material005.001']}
              />
              <mesh
                name="Spiderman_2_Model001_Material006001_0"
                castShadow
                receiveShadow
                geometry={nodes.Spiderman_2_Model001_Material006001_0.geometry}
                material={materials['Model001_Material006.001']}
              />
              <mesh
                name="Spiderman_2_Model001_Material007001_0"
                castShadow
                receiveShadow
                geometry={nodes.Spiderman_2_Model001_Material007001_0.geometry}
                material={materials['Model001_Material007.001']}
              />
            </group>
          </group>
          <group
            name="Spiderman_3"
            position={[0, 44.874, 9.722]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={105.26}>
            <mesh
              name="Model001_24_Body_02_16_16001_Material_#45_0"
              castShadow
              receiveShadow
              geometry={nodes['Model001_24_Body_02_16_16001_Material_#45_0'].geometry}
              material={materials.Material_45}
              position={[2.401, -1.768, -0.373]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.394}
            />
            <mesh
              name="Model001_24_+Masked01_02_16_16_Material_#44_0"
              castShadow
              receiveShadow
              geometry={nodes['Model001_24_+Masked01_02_16_16_Material_#44_0'].geometry}
              material={materials.Material_44}
              position={[2.401, -1.161, -0.373]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={0.394}
            />
          </group>
          <group
            name="Web_1"
            position={[14.676, 63.214, -3.633]}
            rotation={[-0.026, 1.034, -0.151]}
            scale={[1.144, 0.471, 0.706]}>
            <mesh
              name="Web_1_Web_Hand_0"
              castShadow
              receiveShadow
              geometry={nodes.Web_1_Web_Hand_0.geometry}
              material={materials.Web_Hand}
              position={[23.942, 0, 0]}
            />
          </group>
          <group
            name="Web_2"
            position={[-15.752, 63.541, -5.34]}
            rotation={[-3.101, 1.234, 2.93]}
            scale={[1.144, 0.471, 0.706]}>
            <mesh
              name="Web_2_Web_Hand_0"
              castShadow
              receiveShadow
              geometry={nodes.Web_2_Web_Hand_0.geometry}
              material={materials.Web_Hand}
              position={[23.942, 0, 0]}
            />
          </group>
          <mesh
            name="Text_Text_0"
            castShadow
            receiveShadow
            geometry={nodes.Text_Text_0.geometry}
            material={materials.Text}
            position={[0, 11.83, 0]}
            scale={1.055}
          />
        </group>
      </group>
    </>
  )
}

useGLTF.preload('/Models/spiderman_-_no_way_home.glb')