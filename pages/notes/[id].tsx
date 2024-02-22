import Head from "next/head";
import Icons from "../../components/Icons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Codeblock from "../../components/Codeblock";
import { readNoteMarkdownFiles } from "../../util/readMarkdownFiles";
import { NoteData } from "../../types/NoteData";

export async function getStaticPaths() {
  const notesData = await readNoteMarkdownFiles("./notes");

  const paths = notesData.map((el) => {
    return {
      params: { id: el.uid },
    };
  });

  return {
    paths,
    fallback: false, // can also be true or 'blocking'
  };
}
// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context: { params: { id: string } }) {
  let id = context.params.id;
  let thoughtsData = await readNoteMarkdownFiles("./notes");

  let note: NoteData = thoughtsData.find((el) => {
    return el.uid === id;
  }) as NoteData;

  return {
    // Passed to the page component as props
    props: {
      pageContext: { ...note },
    },
  };
}

export default function Note(props: { pageContext: NoteData }) {
  const { uid, content, date } = props.pageContext;
  return (
    <main className="w-screen h-full text-black dark:text-white  overflow-x-hidden">
      <Head>
        <Icons />
        <title>{`portableThoughts - ${uid || "Not found.."}`}</title>
      </Head>
      <div className="sm:p-6 p-8 md+:px-20  md:px-56 markdown-body my-16">
        <ReactMarkdown
          components={Codeblock}
          skipHtml
          className="max-w-none w-full md:w-3/4 prose-pre:bg-transparent prose-pre:mx-0 prose-pre:px-0 prose-pre:p-0 prose-pre:m-0  overflow-x-hidden   mx-auto h-full dark:text-white text-black prose sm:prose-sm prose-base lg:prose-lg xl:prose-xl 2xl:prose-2xl prose-neutral  prose-lime dark:prose-invert "
          remarkPlugins={[remarkGfm]}
        >
          {content || ""}
        </ReactMarkdown>
      </div>
    </main>
  );
}
