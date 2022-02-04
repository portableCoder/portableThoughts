import { PageProps } from 'gatsby';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { useEffect } from 'react';
import thoughtsData from '../../thoughts.json';
import { Helmet } from "react-helmet"
import { useSpring,animated } from 'react-spring';
import 'styles/markdown.css'
import 'styles/dark-theme.css'

import debounce from 'lodash.debounce'
import hljs from 'highlight.js';
import getMarkdown from 'util/getMarkdown';
import useMobileValue from 'util/useMobileValue';
import useTheme from 'util/useTheme';


const Thought = ({pageContext}:PageProps & {
  pageContext:typeof thoughtsData[0]
}) => {
  const [theme,setTheme] = useTheme(true)

  const height = useMobileValue("35vh","75vh")
  const {title,date, md, description,image} = pageContext
  const [markdown,setMarkdown] = useState(md)
  const [scrollHeight,setScrollHeight] = useState(0)
  const spring = useSpring({
      width:scrollHeight
  })
useEffect(()=>{
  getMarkdown(markdown).then((res)=>{
    setMarkdown(res.data)
    hljs.highlightAll()


  }).catch((e)=>{

  })
},[])

const resizeBar = debounce((e)=>{
  

    const scrollTop = window.scrollY
    const docHeight = document.body.clientHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = (scrollTop) / (docHeight - winHeight);
    const scrollPercentRounded = Math.round(scrollPercent*100);

    setScrollHeight( (scrollPercentRounded*window.innerWidth) / 100 )


},200)
useEffect(()=>{


   window.addEventListener("scroll",resizeBar)
  return ()=>{
    window.removeEventListener("scroll",resizeBar) 
  }
},[])


return <main className='w-screen h-full text-black dark:text-white  overflow-x-hidden'>
    <Helmet> 
      <title>
      {`portableThoughts - ${  title || "Not found.."}`}
      </title>
      <meta property="og:title" content={title}/>
    
      <meta property="og:image" content={image} />
    </Helmet>

      <animated.div style={spring} className='w-full fixed top-0 left-0 h-2 bg-gradient-to-r from-red-500 to-orange-500'/>


    <div className='sm:p-6 p-8 md+:px-20  md:px-56 markdown-body'>
    <div className='text-4xl flex  w-full justify-self-start text-black dark:text-white'> 
      {title}
     </div>    
    <div style={{
        height
      }} className=' w-full my-4 mb-28 -z-0'>
          <img alt='blogImage' src={ image || ""} className='w-full md:w-3/4 mx-auto h-full object-cover'/>

 
      </div>
 

      <div className='text-xl text-black dark:text-white'> 
      <h1>{description}</h1>
      </div>
    <ReactMarkdown 
       
    skipHtml
    className='overflow-x-hidden w-full h-full dark:text-white text-black'
    remarkPlugins={[remarkGfm]}
    >
      {markdown || ""}

    </ReactMarkdown>

    </div>
  </main>;
};

export default Thought;
