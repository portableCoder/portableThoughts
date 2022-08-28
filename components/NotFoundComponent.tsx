import React from 'react';
import { animated, useSpring, useTrail } from "react-spring"
import { useState, useRef, useEffect } from "react"
import Head from 'next/head';
import Link from 'next/link';
const items = ["4", "0", "4"] as const
const text = "Sorry! That doesn't exist.. (Click to go back) "
const NotFoundComponent = () => {


  const spring = useSpring({
    from: {
      y: -25
    },
    to: {
      y: 0
    }
  })

  const [open, setOpen] = useState(false)
  const typing = useRef("")
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: 110,
    from: { opacity: 0, x: 20, height: 0 },
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setOpen((prev) => !prev)
    }, 900)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return <div className="bg-neutral-800 text-white w-screen h-screen">
    <Head>
      <title>Not found</title>
    </Head>
    <div className="flex flex-col justify-center items-center w-full h-full" >
      <div className="gap-x-2  flex text-white">
        {trail.map((styles, i) => {
          return <animated.div key={i} className="text-9xl gradient-text" style={styles}>{items[i]}</animated.div>

        })}
      </div>


      <Link className="p-6 my-12   " passHref={true} href="/">
        <a className='text-2xl opacity-0'> Go home </a>
      </Link>
      <Link href={'/'} className=" flex whitespace-nowrap gap-x-2 w-3/4 mx-auto justify-center items-center px-36">
        <a className='md:text-2xl underline text-blue-400'> {text} </a>
      </Link>
    </div>
  </div>

};

export default NotFoundComponent;
