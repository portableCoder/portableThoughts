import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { useEffect } from 'react';
//@ts-ignore
import debounce from 'lodash.debounce'
import getMarkdown from '../../components/util/getMarkdown';
import useMobileValue from '../../components/util/useMobileValue';
import useTheme from '../../components/util/useTheme';
import Head from 'next/head';
import { animated, useSpring } from 'react-spring';
import { stripDashes } from '../../components/util/createLink';
import axios from 'axios';
import blog from '../../blog';
import { BlogData } from '../../types/BlogData';
import Codeblock from '../../components/Codeblock';


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
        console.log(el.title.toLocaleLowerCase(), id)
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
    const [theme, setTheme] = useTheme(true)

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
            <title>
                {`portableThoughts - ${title || "Not found.."}`}
            </title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
        </Head>

        <animated.div style={spring} className='w-full fixed top-0 left-0 h-2 bg-gradient-to-r from-red-500 to-orange-500' />


        <div className='sm:p-6 p-8 md+:px-20  md:px-56 markdown-body'>
            <div className='text-4xl flex  w-full justify-self-start text-black dark:text-white'>
                {title}
            </div>
            <div style={{
                height
            }} className=' w-full my-4 mb-28 -z-0'>
                <img alt='blogImage' src={image || ""} className='w-full md:w-3/4 mx-auto h-full object-cover' />


            </div>


            <div className='text-xl text-black dark:text-white'>
                <h1>{description}</h1>
            </div>
            <ReactMarkdown
                components={Codeblock}
                skipHtml
                className='overflow-x-hidden w-full h-full dark:text-white text-black'
                remarkPlugins={[remarkGfm]}
            >
                {md || ""}

            </ReactMarkdown>

        </div>
    </main>;
};

export default Thought;
