import React, { useEffect } from "react";
import { useNewsContext } from "../context/newsContext";

const Category = () => {
  const {category, setCategory} = useNewsContext();

  const categ = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  useEffect(()=>{})

  console.log(category)

  return (
    <div className="flex justify-center h-10 sticky top-18">
      <div className="flex justify-center gap-5">
        {categ.map((item, idx) => (
          <button key={idx} onClick={()=>setCategory(item)} className="btn btn-soft btn-info">{item.toUpperCase()}</button>
        ))}
      </div>
    </div>
  );
};

export default Category;
