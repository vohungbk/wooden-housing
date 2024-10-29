"use client";

import { PresentationControls, Stage, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { FC } from "react";
import Modal from "react-responsive-modal";

interface ModalView3DProps {
  open: boolean;
  onCloseModal: () => void;
  link3D: string;
}

export const ModalView3D: FC<ModalView3DProps> = ({
  open,
  onCloseModal,
  link3D = "https://res.cloudinary.com/djsafovd9/image/upload/v1729430655/Compressed_2nd_House_1_ptnclu.glb",
}) => {
  function Model(props: any) {
    const { scene } = useGLTF(link3D);
    return <primitive object={scene} {...props} />;
  }

  return (
    <Modal open={open} onClose={onCloseModal} center>
      <div className='relative h-[400px] w-full xl:h-[600px]'>
        <Canvas
          dpr={[1, 2]}
          shadows
          camera={{ fov: 45 }}
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "center",
          }}
          className='model-3d'
        >
          <color attach='background' args={["#101010"]} />
          <PresentationControls
            speed={1.5}
            global
            zoom={0.5}
            polar={[-0.1, Math.PI / 4]}
          >
            <Stage environment={{ files: "/venice_sunset_1k.hdr" }}>
              <Model scale={0.01} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>
    </Modal>
  );
};
