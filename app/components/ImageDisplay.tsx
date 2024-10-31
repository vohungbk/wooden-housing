import React, { FC, useState } from "react";
import Image from "next/image";

interface ImageDisplayProps {
  src: string;
  alt?: string;
  className?: string;
  sizes?: string;
}

const ImageDisplay: FC<ImageDisplayProps> = ({
  src,
  alt = "Image",
  className,
  sizes,
}) => {
  const [aspectRatio, setAspectRatio] = useState(1);

  const handleImageLoad = (naturalWidth: number, naturalHeight: number) => {
    setAspectRatio(naturalWidth / naturalHeight);
  };

  return (
    <div className={`relative w-full ${className}`} style={{ aspectRatio }}>
      <Image
        src={src}
        alt={alt}
        layout='fill'
        objectFit='cover'
        priority
        sizes={sizes}
        onLoadingComplete={({ naturalWidth, naturalHeight }) =>
          handleImageLoad(naturalWidth, naturalHeight)
        }
      />
    </div>
  );
};

export default ImageDisplay;
