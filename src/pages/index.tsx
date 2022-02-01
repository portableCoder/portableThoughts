import { Link, PageProps } from "gatsby"
import React from "react"
import Header from "../components/Header"
import './global.css'
import thoughtsData from "../thoughts-data/thoughts.json"
import FadeInImage from "components/FadeInImage"
import { AiOutlineSwapRight } from 'react-icons/ai'
import useMobileValue from "util/useMobileValue"
import BlogDisplay from "components/BlogDisplay"
import createLink from "util/createLink"
import { Helmet } from 'react-helmet'
const IndexPage = (props:PageProps) => {
  const heightValue = useMobileValue<undefined,string>(undefined,"80vh")



  return (
    
    <main className="h-full w-screen bg-neutral-900 text-white px-3  md+:px-12 md:px-20">
      <Helmet>
        <title>
          portableThoughts
        </title>
      </Helmet>
      <Header/>
      <div style={{
        height: heightValue
      }} className="flex flex-col md:grid grid-cols-6 h-screen md:h-auto justify-center -my-8 md:-my-0">
      <div className="col-span-4 p-2 ">
        <FadeInImage style={{
  height: heightValue ?  "70vh" : "40vh"  ,

}}  alt="mainImage" src={thoughtsData[0].image} className="w-full object-cover rounded-md "/>
      </div>
      <div style={{
  height: heightValue ?  "70vh" : "40vh",

      }}  className="col-span-2 p-2">
      <div className="text-gray-300">

        {thoughtsData[0].date}
      </div>
      <div className="text-3xl">
       {thoughtsData[0].title}
      </div>
      <div className="text-xl">
      {thoughtsData[0].description}
      </div>
      <div className="w-full flex justify-end items-end h-full ">
        <button className="rounded-md my-16  h-16 bg-gradient-to-r from-sky-500 to-blue-500 w-full md:w-min  px-6 whitespace-nowrap py-3 text-xl md:text-2xl transition-all duration-500 hover:font-bold hover:from-green-400 hover:to-green-500">
           <Link className="flex justify-center items-center gap-x-2" to={createLink(thoughtsData[0].title)}> Read <AiOutlineSwapRight/></Link> 
          
          </button>
      </div>

      </div>
      </div>

        <BlogDisplay/>

    </main>
  )
}

export default IndexPage
