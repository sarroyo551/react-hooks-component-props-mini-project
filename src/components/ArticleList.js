import React from "react"
import Article from "./Article"

function ArticleList (props) {
    console.log(props.posts)
    const articleMap = props.posts.map(article => {
        return  <Article key={article.id} title={article.title} date={article.date} preview={article.preview}/>
    })
    return (
        <main>
            {articleMap}
        </main>
    );
  }

export default ArticleList