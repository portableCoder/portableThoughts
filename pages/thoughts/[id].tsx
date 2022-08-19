import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm'
import { useEffect } from 'react';
import thoughtsData from '../../thoughts.json';

import debounce from 'lodash.debounce'
import hljs from 'highlight.js';
import getMarkdown from '../../components/util/getMarkdown';
import useMobileValue from '../../components/util/useMobileValue';
import useTheme from '../../components/util/useTheme';
import Head from 'next/head';
import { animated, useSpring } from 'react-spring';
import { stripDashes } from '../../components/util/createLink';

export async function getStaticPaths() {
    const paths = thoughtsData.map((el) => {
        el.title = stripDashes(el.title)
        return { params: { id: `${el.title.split(" ").join("-").toLocaleLowerCase()}` } };
    });
    console.log(paths)

    return {
        paths,
        fallback: false, // can also be true or 'blocking'
    }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: { params: { id: string } }) {
    let id = stripDashes(context.params.id)
    console.log(id, context.params)

    let post: typeof thoughtsData[0] = thoughtsData.find((el) => {
        console.log(el.title.toLocaleLowerCase(), id)
        return el.title.toLocaleLowerCase() === id
    }) as typeof thoughtsData[0]

    let md = await getMarkdown(post.md)
    return {
        // Passed to the page component as props
        props: {
            pageContext: { ...post, md: md.data }
        },
    }

}

const Thought = ({ pageContext }: {
    pageContext: typeof thoughtsData[0]
}) => {
    const [theme, setTheme] = useTheme(true)

    const height = useMobileValue("35vh", "75vh")
    const { title, date, md, description, image } = pageContext
    const [scrollHeight, setScrollHeight] = useState(0)
    const spring = useSpring({
        width: scrollHeight
    })
    useEffect(() => {
        hljs.highlightAll()

    }, [])

    const resizeBar = debounce((e) => {


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
