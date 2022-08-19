import React from "react"
import Header from "../components/Header"
import thoughtsData from "../thoughts.json"
import FadeInImage from "../components/FadeInImage"
import { AiOutlineSwapRight } from 'react-icons/ai'
import useMobileValue from "../components/util/useMobileValue"
import BlogDisplay from "../components/BlogDisplay"
import createLink from "../components/util/createLink"
import useTheme from "../components/util/useTheme"
import Head from "next/head"
import Link from "next/link"
import { NextPage } from "next"
const IndexPage = (props: NextPage) => {
  const heightValue = useMobileValue<undefined, string>(undefined, "80vh")
  const [theme, setTheme] = useTheme(true)


  return (

    <main className="h-full w-screen text-black  dark:text-white px-3  md+:px-12 md:px-20">
      <Head>
        <title>
          portableThoughts
        </title>
      </Head>
      <Header />
      <div style={{
        height: heightValue
      }} className="flex flex-col md:grid grid-cols-6 h-screen md:h-auto justify-center -my-16 md:-my-0">
        <div className="col-span-4 p-2 ">
          <FadeInImage style={{
            height: heightValue ? "70vh" : "40vh",

          }} alt="mainImage" src={thoughtsData[0].image} className="w-full object-cover rounded-md " />
        </div>


        <div style={{
          height: heightValue ? "70vh" : "30vh",

        }} className="col-span-2 p-2">
          <div className=" text-gray-500 dark:text-gray-300">

            {thoughtsData[0].date}
          </div>
          <div className="text-3xl">
            {thoughtsData[0].title}
          </div>
          <div className="text-xl">
            {thoughtsData[0].description}
          </div>
          <div className="w-full flex justify-end items-end h-full ">
            <button className="rounded-md my-8 md:my-28  h-16  bg-sky-500  w-full md:w-min  px-6 whitespace-nowrap py-3 text-xl md:text-2xl transition-all duration-500 hover:bg-green-500 text-white  ">
              <Link className="flex justify-center items-center gap-x-2" href={createLink(thoughtsData[0].title)}> Read </Link>

            </button>
          </div>

        </div>
      </div>

      <BlogDisplay />

    </main>
  )
}

export default IndexPage
