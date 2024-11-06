import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

export default function App() {
  return(
    <>
    <Canvas camera={{position:[0,0,5], fov:50}}>
      <ambientLight intensity={1} />
      <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh>
      <OrbitControls autoRotate autoRotateSpeed={5} maxDistance={10} minDistance={5}/>
    </Canvas>
    </>
  )
}