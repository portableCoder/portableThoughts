import loadable from '@loadable/component';
import { Link } from 'gatsby';
import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BlogData } from 'types/BlogData';
import useMobileValue from 'util/useMobileValue';


import { Intersectable } from './AnimateOnView';
const AnimateOnView = loadable(/* #__LOADABLE__ */ ()=>import('./AnimateOnView'))
type BlogCardProps = {onClick?:()=>void,className:string} & BlogData & Intersectable
const BlogCard = ({onClick,link,description,title,image,className,date,intersectionOptions}:Partial<BlogCardProps>) => {

  const height = useMobileValue("25vh","45vh")
  return <AnimateOnView intersectionOptions={intersectionOptions} inViewStyle={{
    opacity:1,
    translateY:-25
  }} exitViewStyle={{
    opacity:0,
    translateY:0
  }} className={`w-full h-full shadow-md outline outline-1 outline-neutral-800 rounded rounded-l-md rounded-r-md  relative duration-200 ${className}`}>
      <div style={{
          height
      }}>
      <img alt="blog-image" className='h-full rounded-tl-md rounded-tr-md rounded-bl-none rounded-br-none w-full object-cover' src={image}/>
      </div>
        <div className='flex flex-col  text-white p-4 '>
        <div className='flex flex-col  whitespace-nowrap'>
          <h1 className='text-2xl md:text-3xl'>{title}</h1>
          <p className='text-gray-400'>{date}</p>
        </div>
        <p className='text-xl text-gray-300'>{description}</p>
        <div className='w-full flex justify-end'>
        <Link onClick={onClick} className=' text-2xl px-6 py-2 -my-1 -mx-2 flex gap-x-2 items-center justify-center' to={link}>Read..
        <AiOutlineArrowRight/>
        </Link> 
        </div>
        
        
        </div>

   
  </AnimateOnView>;
};

export default BlogCard;
