import type { MeshLineGeometry, MeshLineMaterial } from 'meshline'
import type { Object3DNode } from '@react-three/fiber'

declare module '@react-three/fiber' {
  interface ThreeElements {
    meshLineGeometry: Object3DNode<MeshLineGeometry, typeof MeshLineGeometry>
    meshLineMaterial: Object3DNode<MeshLineMaterial, typeof MeshLineMaterial>
  }
}