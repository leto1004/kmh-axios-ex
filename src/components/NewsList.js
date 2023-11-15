import styled from "styled-components";
import NewsItem from "./NewsItems";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";

const NewListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100px;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

const NewList = () => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const fetchData = async()=>{
      setLoading(true);
      try{
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4bfc022483884247b50254b6fa40ee5a');
        setArticles(response.data.articles);
      } catch(e) {
        console.log(e);
      }
      setLoading(false);
    }
    fetchData();
  },[]);
  if(loading){
    return (
    <NewListBlock>
      <Loading></Loading>
    </NewListBlock>
    );
  }
  return (
    <NewListBlock>
      {articles && articles.map(article =>(
        <NewsItem key={article.url} article={article}></NewsItem>
      ))};
    </NewListBlock>
  );
};
export default NewList;
