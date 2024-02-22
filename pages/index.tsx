import React from "react";
import Header from "../components/Header";
import FadeInImage from "../components/FadeInImage";
import useMobileValue from "../util/useMobileValue";
import BlogDisplay from "../components/BlogDisplay";
import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next";
import { BlogData } from "../types/BlogData";
import Icons from "../components/Icons";
import { readBlogMarkdownFiles } from "../util/readMarkdownFiles";
import dayjs from "../util/dayjs";

export async function getStaticProps(context: any) {
  const thoughtsData: BlogData[] = await readBlogMarkdownFiles("./blogs");

  thoughtsData.sort((a, b) => {
    let dayA = dayjs(a.date, "DD/MM/YYYY").unix();
    let dayB = dayjs(b.date, "DD/MM/YYYY").unix();

    return dayB - dayA;
  });
  return {
    // Passed to the page component as props
    props: {
      thoughtsData,
    },
  };
}
const IndexPage = (props: NextPage & { thoughtsData: BlogData[] }) => {
  const heightValue = useMobileValue<undefined, string>(undefined, "80vh");
  const { thoughtsData } = props;

  return (
    <main className="h-full w-screen text-black  dark:text-white px-3  md+:px-12 md:px-20">
      <Head>
        <Icons />
        <title>portableThoughts</title>
      </Head>
      <Header />
      <div
        style={{
          height: heightValue,
        }}
        className="flex flex-col md:grid grid-cols-6 h-screen md:h-auto justify-center -my-16 md:-my-0"
      >
        <div className="col-span-4 p-2 ">
          <FadeInImage
            style={{
              height: heightValue ? "70vh" : "40vh",
            }}
            alt="mainImage"
            src={thoughtsData[0].image}
            className="w-full object-cover rounded-md "
          />
        </div>

        <div
          style={{
            height: heightValue ? "70vh" : "30vh",
          }}
          className="col-span-2 p-2"
        >
          <div className=" text-gray-500 dark:text-gray-300">
            {thoughtsData[0].date}
          </div>
          <div className="text-3xl">{thoughtsData[0].title}</div>
          <div className="text-xl">{thoughtsData[0].description}</div>
          <div className="w-full flex justify-end items-end h-full -my-6 md:my-auto ">
            <Link
              className="flex justify-center items-center gap-x-2"
              href={`/thoughts/${thoughtsData[0].slug}`}
            >
              <a className="rounded-md my-8 md:my-28 flex items-center justify-center  h-16 text-center  bg-sky-500  w-full md:w-min  px-6 whitespace-nowrap py-3 text-xl md:text-2xl transition-all duration-500 hover:bg-green-500 text-white  ">
                Read
              </a>
            </Link>
          </div>
        </div>
      </div>

      <BlogDisplay thoughtsData={thoughtsData} />
    </main>
  );
};

export default IndexPage;
