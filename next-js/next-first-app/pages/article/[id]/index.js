import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { server } from '../../../config'

const article = ({ article }) => {
    // const router = useRouter();
    // const { id } = router.query;
    return (
        <div>
            <h1>Article {article.id}</h1>
            <h2>{article.title}</h2>
            <h4>{article.body}</h4>
            <br />
            <Link href='/'>
                <h5>Go back</h5>
            </Link>
        </div>
    );
};

// export const getServerSideProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();
//     return {
//         props: {
//             article
//         }
//     }
// }

// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
//     const article = await res.json();

//     return {
//         props: {
//             article
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
//     const articles = await res.json();

//     const ids = articles.map(article => article.id)

//     const paths = ids.map(id => ({ params: { id: id.toString() } }))

//     return {
//         paths,
//         fallback: false
//     }
// }


export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`);
    const article = await res.json();

    return {
        props: {
            article
        }
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`);
    const articles = await res.json();

    const ids = articles.map(article => article.id)

    const paths = ids.map(id => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false
    }
}

export default article;