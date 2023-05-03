import React from 'react';
import articleStyles from '../../styles/Article.module.css'
import Link from 'next/link';

const ArticleItem = ({ article }) => {
    return (
        <div className={articleStyles.card}>
            <h3 >
                <Link href={`/article/${article.id}`}>
                    <h2>{article.title} &rarr;</h2>
                    <br />
                    <p>{article.body}</p>
                </Link>
            </h3>
        </div>
    );
};

export default ArticleItem;