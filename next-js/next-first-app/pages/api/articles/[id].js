import { articles } from '../../../data.js';

export default function handler({ query: { id } }, res) {
    const filteredArticle = articles.filter(article => article.id === id);

    if (filteredArticle.length) {
        res.status(200).json(filteredArticle[0]);
    } else {
        res.status(404).json({ message: `No article found on route ${id}` });
    }
}