import styled from "styled-components";

const NewsItemBlock = styled.dev`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumbnail">
          <h2>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <img src={urlToImage} alt="thumb"></img>
            </a>
          </h2>
          <p>{description}</p>
        </div>
      )}
      <div className="cont">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
      </div>
    </NewsItemBlock>
  );
};
export default NewsItem;