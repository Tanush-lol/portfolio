"use client";
import { memo } from "react";
import { Canvas } from "@react-three/fiber";
import { PresentationControls, useGLTF } from "@react-three/drei";
import { clone } from "three/examples/jsm/utils/SkeletonUtils";

function Model({ modelPath, scale }) {
  const { scene } = useGLTF(modelPath);
  const clonedScene = clone(scene);
  return <primitive object={clonedScene} scale={scale} />;
}

const ThreeDmodel = ({
  modelPath = "/models/instagram.glb",
  scale = 0.3,
  width = "150px",
  height = "600px",
  camera = { fov: 45, position: [0, 0, 2] },

  rotation = [0, 0, 0],
  polar = [0, Math.PI / 2],   
  azimuth = [-Math.PI / 2, Math.PI / 2], 
}) => {
  return (
    <Canvas camera={camera} style={{ width, height }}>
      <ambientLight intensity={1.2} />
      <directionalLight intensity={0.8} position={[2, 2, 2]} />

      <PresentationControls
        global
        rotation={rotation}
        polar={polar}
        azimuth={azimuth}
      >
        <Model modelPath={modelPath} scale={scale} />
      </PresentationControls>
    </Canvas>
  );
};

export default memo(ThreeDmodel);
