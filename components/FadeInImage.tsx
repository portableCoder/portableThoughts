import React from 'react';
import { useState } from 'react';

const FadeInImage = (props:React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) => {
  const [loaded,setLoaded] = useState(false)
    return <img {...props} onLoad={(e)=>{
        setLoaded(true)
}} className={`transition-all duration-300 ${props.className}  ${loaded ? "opacity-100":" opacity-0"}`} >
</img>

};

export default FadeInImage;
