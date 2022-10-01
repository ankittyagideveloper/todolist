import React, { useEffect, useState } from "react";

function ProgressiveImage(props) {
  const { src, placeholder, height, width } = props;

  const [imgSrc, setImg] = useState(placeholder || src);
  console.log(placeholder, src);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImg(src);
    };
  }, [src]);

  return (
    <img
      src={imgSrc}
      height={height}
      width={width}
      style={{ position: "absolute", backgroundSize: "cover" }}
      alt="bgImg"
    />
  );
}

export default ProgressiveImage;
