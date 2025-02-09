/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react'
import { useGLTF, Center, Bounds } from '@react-three/drei'
import LayerStack from './LayerStack'

export default function Monkey() {
  const { nodes } = useGLTF('/monkey.glb') as any
  return (
    <Bounds fit>
      <Center>
        <group scale={0.1} rotation={[0, -Math.PI / 2, Math.PI / 4]}>
          <mesh matrixAutoUpdate geometry={nodes.Suzanne.geometry} rotation-y={Math.PI / 2} scale={30}>
            <LayerStack />
          </mesh>
        </group>
      </Center>
    </Bounds>
  )
}

useGLTF.preload('/monkey.glb')
