import { Grid, Heading, SimpleGrid } from "@chakra-ui/react";
import { lazy, Suspense, useEffect, useState } from "react";
import Loading from "../components/Loading";
import Pagination from "../components/Pagination";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export type Article = {
  userId: string;
  id: number;
  title: string;
  body: string;
};

const ArticleCard = lazy(() => import("../components/ArticleCard"));

const useGet = (key:string, url: string) => {
  
    return useQuery({
      queryKey: [key],
      queryFn: () => axios.get(`${url}`).then((res) => res.data),
      refetchOnWindowFocus: true ,
      gcTime: 6000,
      retry: 3,
      //refetchInterval: 3000
    })
  }

const Articles = () => {

  const {data, isLoading, error} = useGet('articles', "http://localhost:8000/articles")
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
    if(!isLoading){
        setArticles(data)
    }
   
 }, [isLoading])

  if (isLoading) {
    return <Loading/>
  }

  if (error) {
    return <div>There was an error</div>
  }
 
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
        h={"80vh"}
        minH={"80vh"}
        overflow={"auto"}
      >
        <Suspense fallback={<Loading />}>
          {visibleArticles?.map((article: Article) => (
            <ArticleCard key={article?.id} article={article} />
          ))}
        </Suspense>
      </SimpleGrid>
      <Pagination  pages={pages} pageIndex={pageIndex} totalNumberOfPages={totalNumberOfPages} setpageIndex={setpageIndex}/>
    </Grid>
  );
};

export default Articles;
