import NewList from "./components/NewsList";
import Categories from "./components/Catagories";
// import { useState, useCallback } from "react";
import { useParams } from "react-router-dom";

// const News = () => {
//   const [category, setCategory]=useState('all');
//   // const onSelect = (category) => setCategory(category);
//   const onSelect = useCallback(category => setCategory(category), []);
//   return (
//     <>
//       <Categories category={category} onSelect={onSelect}></Categories>
//       <NewList category={category}></NewList>
//     </>
//   );
// };

const News = () => {
  const params = useParams();
  const category = params.category || 'all';
  return (
    <>
      <Categories></Categories>
      <NewList category={category}></NewList>
    </>
  );
}
export default News;
