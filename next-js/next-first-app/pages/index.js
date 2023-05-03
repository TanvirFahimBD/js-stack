import Head from 'next/head';
import { server } from '../config';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ArticleList from './component/ArticleList';

const inter = Inter({ subsets: ['latin'] })

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <title>WebDev Articles</title>
      </Head>
      <h1>New Articles </h1>
      <ArticleList articles={articles} />
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
//   const articles = await res.json();
//   return {
//     props: {
//       articles
//     }
//   }
// }

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles/`);
  const articles = await res.json();
  return {
    props: {
      articles
    }
  }
}
