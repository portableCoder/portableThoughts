import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { useEffect } from 'react';
//@ts-ignore
import debounce from 'lodash.debounce'
import getMarkdown from '../../components/util/getMarkdown';
import useMobileValue from '../../components/util/useMobileValue';
import Head from 'next/head';
import { animated, useSpring } from 'react-spring';
import { stripDashes } from '../../components/util/createLink';
import axios from 'axios';
import { BlogData } from '../../types/BlogData';
import Codeblock from '../../components/Codeblock';
import Icons from '../../components/Icons';
import Header from '../../components/Header';
const blog = "https://raw.githubusercontent.com/portableCoder/portableThoughts/blog/thoughts.json"

export async function getStaticPaths() {
    const thoughtsData: BlogData[] = (await axios.get(blog)).data

    const paths = thoughtsData.map((el) => {
        el.title = stripDashes(el.title)
        return { params: { id: `${el.title.split(" ").join("-").toLocaleLowerCase()}` } };
    });

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: { params: { id: string, thoughtsData: BlogData[] } }) {
    let id = stripDashes(context.params.id)
    const thoughtsData: BlogData[] = (await axios.get(blog)).data

    let post: BlogData = thoughtsData.find((el) => {
        return el.title.toLocaleLowerCase() === id
    }) as BlogData

    let md = await getMarkdown(post.md)
    return {
        // Passed to the page component as props
        props: {
            pageContext: { ...post, md: md.data }
        },
    }

}

const Thought = ({ pageContext }: {
    pageContext: BlogData
}) => {
    const height = useMobileValue("35vh", "75vh")
    const { title, date, md, description, image } = pageContext
    const [scrollHeight, setScrollHeight] = useState(0)
    const spring = useSpring({
        width: scrollHeight
    })
    const resizeBar = debounce((e: any) => {


        const scrollTop = window.scrollY
        const docHeight = document.body.clientHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = (scrollTop) / (docHeight - winHeight);
        const scrollPercentRounded = Math.round(scrollPercent * 100);

        setScrollHeight((scrollPercentRounded * window.innerWidth) / 100)


    }, 150)
    useEffect(() => {


        window.addEventListener("scroll", resizeBar)
        return () => {
            window.removeEventListener("scroll", resizeBar)
        }
    }, [])


    return <main className='w-screen h-full text-black dark:text-white  overflow-x-hidden'>
        <Head>
            <Icons />
            <title>
                {`portableThoughts - ${title || "Not found.."}`}
            </title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
        </Head>
        <div className='fixed top-0 left-0 w-full'>
            <Header />
            <animated.div style={spring} className='w-full  h-2 bg-gradient-to-r from-red-500 to-orange-500' />

        </div>

        <div className='sm:p-6 p-8 md+:px-20  md:px-56 markdown-body my-16'>
            <div className='text-4xl text-center  w-full  text-black dark:text-white'>
                <h1>{title} </h1>
            </div>
            <div style={{
                height
            }} className=' w-full my-4 mb-28 -z-0'>
                <img alt='blogImage' src={image || ""} className='w-full md:w-3/4 mx-auto h-full object-cover' />


            </div>



            <ReactMarkdown
                components={Codeblock}
                skipHtml
                className='max-w-none w-full md:w-3/4 prose-pre:bg-transparent prose-pre:mx-0 prose-pre:px-0 prose-pre:p-0 prose-pre:m-0  overflow-x-hidden   mx-auto h-full dark:text-white text-black prose sm:prose-sm prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl prose-neutral  prose-lime dark:prose-invert '
                remarkPlugins={[remarkGfm]}
            >
                {`# ${description} \n` + md || ""}

            </ReactMarkdown>

        </div>
    </main>;
};

export default Thought;
