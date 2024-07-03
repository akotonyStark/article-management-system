import { Grid, Heading, SimpleGrid } from "@chakra-ui/react";
import { lazy, Suspense, useEffect, useState } from "react";
import Loading from "../components/Loading";

export type Article = {
  userId: string;
  id: number;
  title: string;
  body: string;
};

const ArticleCard = lazy(() => import('../components/ArticleCard'));


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
      <Heading size={"md"} pb={10}>
        Articles
      </Heading>
      <SimpleGrid
        p={10}
        spacing={10}
        minChildWidth="400px"
        h={"100vh"}
        minH={"95vh"}
        overflow={"auto"}
      >
        <Suspense fallback={<Loading/>}>
          {articles.map((article: Article) => <ArticleCard key={article?.id} article={article}/>)}
        </Suspense>
      </SimpleGrid>
    </Grid>
  );
};

export default Articles;
