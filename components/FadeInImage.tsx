import React from "react";

const FadeInImage = (
  props: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
) => {
  return (
    <img
      {...props}
      src={props.src || ""}
      placeholder={(props.placeholder as "") || "empty"}
      onLoad={(e) => {}}
      className={`transition-all duration-300 ${props.className} opacity-100`}
    ></img>
  );
};

export default FadeInImage;
