import React from 'react';
import { useState } from 'react';

const FadeInImage = (props: React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
  return <img {...props} onLoad={(e) => {
  }} className={`transition-all duration-300 ${props.className} opacity-100`} >
  </img>

};

export default FadeInImage;
