import React from "react";

const ImageFormat = ({ src, title }: { src: string; title: string }) => {
  return (
    <>
      <img src={src} alt={title} className="w-full h-full object-cover" />
    </>
  );
};

export default ImageFormat;
