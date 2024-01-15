import { BlogData } from "../../types/BlogData";
import Thought from "../../components/Thought";
import readMarkdownFiles from "../../components/util/readMarkdownFiles";

export async function getStaticPaths() {
  const thoughtsData: BlogData[] = await readMarkdownFiles("./blogs");

  const paths = thoughtsData.map((el) => {
    return {
      params: { id: el.slug },
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
  let thoughtsData = await readMarkdownFiles("./blogs");

  let post: BlogData = thoughtsData.find((el) => {
    return el.slug === id;
  }) as BlogData;

  return {
    // Passed to the page component as props
    props: {
      pageContext: { ...post },
    },
  };
}

export default Thought;
