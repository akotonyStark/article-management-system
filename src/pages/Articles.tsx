import { Grid, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";


type Article = {
    userId: string,
    id: number,
    title: string,
    body: string
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await fetch("http://localhost:8000/articles");
      const data = await res.json();
      setArticles(data);
    };

    fetchArticles();
  }, []);
  return (
  <Grid p={4}>
    <Heading size={'md'} pb={10}>Articles</Heading>
    <SimpleGrid p={10} spacing={10} minChildWidth="400px" h={'100vh'} minH={'95vh'} overflow={'auto'}>
        {articles.map((article: Article) => {
            return (
            <div key={article.id}>
               
                <p style={{fontWeight:600}}>{article?.title}</p>
                <blockquote>"{article?.body}"</blockquote>
                <span> - {article?.userId}</span>
            </div>)
            }
        )
    }</SimpleGrid>
    </Grid>
  )
};

export default Articles;
