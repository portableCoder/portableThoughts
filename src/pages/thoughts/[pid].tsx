import { PageProps } from 'gatsby';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { useEffect } from 'react';
import getMarkdown from 'util/getMarkdown';
import thoughtsData from 'thoughts-data/thoughts.json'
import { Helmet } from "react-helmet"
import { useSpring,animated } from 'react-spring';
import 'styles/markdown.css'
import 'styles/dark-theme.css'

import debounce from 'lodash.debounce'
import hljs from 'highlight.js';
import { stripDashes } from 'util/createLink';
import isBrowser from 'util/isBrowser';
const Thought = (props:PageProps) => {


  const [scrollHeight,setScrollHeight] = useState(0)
  const spring = useSpring({
      width:scrollHeight
  })
  const [ thoughtData,setThoughtData ] = useState(()=>{
    const url = props.uri
    const paths = url.split('/')
    const lastPath = paths[paths.length-1].split("-").join(" ")
    const data = thoughtsData.find((d)=>{

      return lastPath===stripDashes(d.title.toLowerCase())
    })

    if(!data && isBrowser()){
    
      props.navigate('/portableThoughts/notfound',{
        replace:true
      })

    
      }
    


    // the markdown url is set here first, then it's fetched in the useEffect.
    if(data){
    let {date,image,description,md:markdown,title} = data

    return {
      title,
    date,
    image,
    markdown,
    description
  
  }
} 
  })
const resizeBar = debounce((e)=>{
  

    const scrollTop = window.scrollY
    const docHeight = document.body.clientHeight;
    const winHeight = window.innerHeight;
    const scrollPercent = (scrollTop) / (docHeight - winHeight);
    const scrollPercentRounded = Math.round(scrollPercent*100);

    setScrollHeight( (scrollPercentRounded*window.innerWidth) / 100 )


},200)
useEffect(()=>{
  document.body.style.backgroundColor = "rgb(23 23 23)"


  if(thoughtData){
  getMarkdown(thoughtData.markdown).then((res)=>{
    setThoughtData((prev)=>{
      setTimeout(()=>{
        hljs.highlightAll()
      },50)
      return {...prev, markdown:res.data}
  
  })
  })
}
   window.addEventListener("scroll",resizeBar)
  return ()=>{
    window.removeEventListener("scroll",resizeBar) 
  }
},[])


return <main className='w-screen h-full text-white bg-neutral-900 overflow-x-hidden'>
    <Helmet>
      <title>
        {`portableThoughts - ${ thoughtData && thoughtData.title || "Not found.."}`}
      </title>
    </Helmet>
      <animated.div style={spring} className='w-full fixed top-0 left-0 h-2 bg-gradient-to-r from-red-500 to-orange-500'/>

      
      <div style={{
        height:"30vh"
      }} className=' w-screen -z-0'>
          <img src={thoughtData?.image || ""} className='w-full h-full object-cover'/>

 
      </div>
      <div className='p-4 z-10 text-4xl flex  w-full justify-center'> 
      {thoughtData?.title}
     </div>
    <div className='sm:p-6 p-8 md+:px-20  md:px-56 markdown-body'>
      <div className='text-xl'> 
      <h1>{thoughtData?.description}</h1>
      </div>
    <ReactMarkdown 
       
    skipHtml
    className='overflow-x-hidden w-full h-full'
    remarkPlugins={[remarkGfm]}
    >
      {thoughtData?.markdown || ""}

    </ReactMarkdown>

    </div>
  </main>;
};

export default Thought;
