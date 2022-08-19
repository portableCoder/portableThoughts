import React from 'react';
import BlogCard from "./BlogCard"
import thoughtsData from "../thoughts.json"
import createLink from './util/createLink';
import Divider from './Divider';

const BlogDisplay = () => {
  return <div className="w-full h-full my-16 flex flex-col md:grid grid-cols-2 gap-3 gap-y-16 md:gap-6 py-16 px-3 justify-center items-center overflow-y-hidden">
    <div className='md:col-span-2 col-span-1'>
      <Divider text={thoughtsData.length > 1 ? "Read more" : "Oops.. that's all for now"} />
    </div>
    {thoughtsData.map((k, i) => i > 0 && <BlogCard intersectionOptions={{
      triggerOnce: true,
      threshold: 0
    }} className="w-full mx-auto" description={k.description} image={k.image} date={k.date} title={k.title} link={createLink(k.title)} key={i} />)}


  </div>
    ;
};

export default BlogDisplay;
