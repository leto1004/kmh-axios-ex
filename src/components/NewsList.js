import styled from "styled-components";
import NewsItem from "./NewsItems";

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
`;

const sampleArticle = {
  title: "제목",
  description: "내용",
  url: "https://naver.com",
  urlToImage: "https://via.placeholder.com/160",
};

const NewList = () => {
  return (
    <NewListBlock>
      <NewsItem article={sampleArticle}></NewsItem>
      <NewsItem article={sampleArticle}></NewsItem>
      <NewsItem article={sampleArticle}></NewsItem>
      <NewsItem article={sampleArticle}></NewsItem>
      <NewsItem article={sampleArticle}></NewsItem>
      <NewsItem article={sampleArticle}></NewsItem>
    </NewListBlock>
  );
};
export default NewList;
