import NewList from "./components/NewsList";
import Categories from "./components/Catagories";
import { useState, useCallback } from "react";

const News = () => {
  const [category, setCategory]=useState('all');
  const onSelect = (category) => setCategory(category);
  return (
    <>
      <Categories category={category} onSelect={onSelect}></Categories>
      <NewList></NewList>
    </>
  );
};
export default News;
