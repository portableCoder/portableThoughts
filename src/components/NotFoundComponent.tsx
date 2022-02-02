import React from 'react';
import 'styles/global.css'
import { Link } from "gatsby"
import { animated, useSpring, useTrail } from "react-spring"
import { useState,useRef,useEffect } from "react"
import { Helmet } from 'react-helmet'
const items = ["4","0","4"] as const
const text = "Sorry! That doesn't exist.. (yet) "
const NotFoundComponent = () => {
    function typewriter(text: string, t: number) {
        const i = Math.trunc(text.length * t);
        return text.slice(0, i) + "_";
      }
    
      const spring = useSpring({
        from:{
          y:-25
        },
        to:{
          y:0
        }
      })
    
    const [open,setOpen] = useState(false)
    const typing = useRef("")
    const trail = useTrail(items.length, {
      config: { mass: 5, tension: 2000, friction: 200 },
      opacity: open ? 1 : 0,
      x: open ? 0 : 20,
      height:110,
      from: { opacity: 0, x: 20, height: 0 },
    })
  
    useEffect(()=>{
      const interval = setInterval(()=>{
        setOpen((prev)=>!prev)
      },900)
      return ()=>{
        clearInterval(interval)
      }
    },[])
  return  <main className="bg-neutral-800 text-white w-screen h-screen">
  <Helmet>
  <title>Not found</title>
  </Helmet>
  <div className="flex flex-col justify-center items-center w-full h-full" >
    <div className="gap-x-2 flex text-white">
      {trail.map((styles,i)=>{
        return <animated.div className="text-9xl gradient-text" style={styles}>{items[i]}</animated.div>

      })}
    </div>
    <Link className="p-4 my-6 " to="/">Go home</Link>
      <animated.div style={spring} className="flex whitespace-nowrap gap-x-2 w-3/4 mx-auto justify-center items-center px-36">
        {text}
      </animated.div>
  </div>
</main>

};

export default NotFoundComponent;
