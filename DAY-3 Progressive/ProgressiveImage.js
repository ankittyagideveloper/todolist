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
    <div>
      <img
        src={imgSrc}
        height={height}
        width={width}
        alt="bgImg"
        style={{ position: "absolute" }}
      />
    </div>
  );
}

export default ProgressiveImage;
