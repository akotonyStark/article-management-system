import { Grid, Heading, SimpleGrid } from "@chakra-ui/react";
import { lazy, Suspense, useEffect, useState } from "react";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";

export type Article = {
  userId: string;
  id: number;
  title: string;
  body: string;
};

const ArticleCard = lazy(() => import("../components/ArticleCard"));

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [pageIndex, setpageIndex] = useState<number>(0);
  const [resultsPerPage] = useState<number>(20);

  const totalNumberOfPages = Math.ceil(articles.length / resultsPerPage);
  const visibleArticles = articles.slice(
    resultsPerPage * pageIndex,
    resultsPerPage * pageIndex + resultsPerPage
  );
  const pages = Array(totalNumberOfPages)
    .fill(0)
    .map((item, index) => item + index);

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
        <Pagination pages={pages} pageIndex={pageIndex} totalNumberOfPages={totalNumberOfPages} setpageIndex={setpageIndex}/>

      <SimpleGrid
        p={10}
        spacing={10}
        minChildWidth="400px"
        h={"100vh"}
        minH={"95vh"}
        overflow={"auto"}
      >
        <Suspense fallback={<Loading />}>
          {visibleArticles.map((article: Article) => (
            <ArticleCard key={article?.id} article={article} />
          ))}
        </Suspense>
      </SimpleGrid>
      <Pagination  pages={pages} pageIndex={pageIndex} totalNumberOfPages={totalNumberOfPages} setpageIndex={setpageIndex}/>
    </Grid>
  );
};

export default Articles;
