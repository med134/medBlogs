import Image from "next/image";
import React from "react";

const ImageUser = ({ imageUrl, className }) => {
  return (
    <Image
      src={imageUrl}
      width={300}
      height={300}
      alt="user Image"
      className={className}
      loading="lazy"
    />
  );
};

export default ImageUser;
