import React from 'react';
import articleContent from './Article-content';
const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find(article => article.name === name);
    return (
        <React.Fragment>

            <h1>{article.title}</h1>
            {article.content.map((paragraph, key) =>(
                <p key={key}>{paragraph}</p>
            ))}

        </React.Fragment>
    );
}

export default ArticlePage;