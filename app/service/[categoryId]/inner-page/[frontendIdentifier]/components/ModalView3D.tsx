"use client";

import {
  PresentationControls,
  Stage,
  useGLTF,
  OrbitControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import Modal from "react-responsive-modal";
import { GLTF } from "three-stdlib";

interface ModalView3DProps {
  open: boolean;
  onCloseModal: () => void;
  link3D: string;
}

const Model: FC<{ link3D: string }> = ({ link3D }) => {
  const { scene } = useGLTF(link3D) as GLTF;
  return <primitive object={scene} />;
};

export const ModalView3D: FC<ModalView3DProps> = ({
  open,
  onCloseModal,
  link3D = "https://res.cloudinary.com/djsafovd9/image/upload/v1729430655/Compressed_2nd_House_1_ptnclu.glb",
}) => {
  return (
    <Modal open={open} onClose={onCloseModal} center>
      <div className='relative h-[400px] w-full xl:h-[600px]'>
        <Canvas
          dpr={[1, 2]}
          shadows
          camera={{ fov: 45, position: [0, 1, 5] }}
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
          }}
          className='model-3d'
        >
          <OrbitControls
            autoRotate={false}
            enableZoom={true}
            enablePan={false}
            maxAzimuthAngle={1}
            minAzimuthAngle={-1}
          />
          <PresentationControls
            speed={1.5}
            global
            zoom={0.2}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage environment={{ files: "/venice_sunset_1k.hdr" }}>
              <Model link3D={link3D} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
    </Modal>
  );
};
