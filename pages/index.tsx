import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Posts from "../components/Posts";
import { sanityClient, urlFor } from "../sanity";
import { Post } from "../typings";

interface Props {
  posts: [Post];
}

export default function Home({ posts }: Props) {
  return (
    <div className="max-w-7xl mx-auto ">
      <Head>
        <title>Medium Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <Banner></Banner>
      <Posts posts={posts}></Posts>
    </div>
  );
}

export const getServerSideProps = async () => {
  const query = `*[_type == "post"] {
  _id, 
  title,
  slug,
    author ->{
     name, 
     image
  },
 description,
 mainImage,
 slug
}`;
  const posts = await sanityClient.fetch(query);

  return {
    props: {
      posts,
    },
  };
};
