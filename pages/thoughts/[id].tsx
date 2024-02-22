import { BlogData } from "../../types/BlogData";
import Thought from "../../components/Thought";
import { readBlogMarkdownFiles } from "../../util/readMarkdownFiles";
import generateOgImage from "../../util/generateOgImage";

export async function getStaticPaths() {
  const thoughtsData: BlogData[] = await readBlogMarkdownFiles("./blogs");

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
  let thoughtsData = await readBlogMarkdownFiles("./blogs");

  let post: BlogData = thoughtsData.find((el) => {
    const { slug, image, title } = el;
    generateOgImage(title, image, slug);

    return slug === id;
  }) as BlogData;

  return {
    // Passed to the page component as props
    props: {
      pageContext: { ...post },
    },
  };
}

export default Thought;
