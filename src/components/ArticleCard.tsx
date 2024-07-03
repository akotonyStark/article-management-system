import { Article } from "../pages/Articles";

const ArticleCard = ( props : any) => {
    const {article} = props
  return (
    <div key={article.id}>
      <p style={{ fontWeight: 600 }}>{article?.title}</p>
      <blockquote>"{article?.body}"</blockquote>
      <span> - {article?.userId}</span>
    </div>
  );
};

export default ArticleCard;
