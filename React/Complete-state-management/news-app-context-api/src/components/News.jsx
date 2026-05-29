import React, { useEffect, useState } from "react";
import Loader from "./Loader.jsx";
import { useNewsContext } from "../context/newsContext.jsx";

const News = () => {
  const { news, setNews, fetchNews, category } = useNewsContext();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await fetchNews();
      setNews(data);
    })();
  }, [category]);

  console.log(news);

  return (
    <div className="grid grid-cols-5 gap-5 p-5">
      {news.map((item, idx) => {
        if (item.urlToImage === null) return "";
        return (
          <div key={idx}>
            <NewsCard detail={item} />
          </div>
        );
      })}
    </div>
  );
};

const NewsCard = ({ detail }) => {
  const handleRedirect = () => {
    
  };

  return (
    <div className="$$card bg-gray-900 p-4 rounded-xl w-70 h-full flex flex-col justify-around">
      <div>
        <img
          src={detail.urlToImage}
          alt="Shoes"
          className="aspect-square object-contain"
        />
      </div>
      <div className="$$card-body flex flex-col gap-2">
        <h2 className="$$card-title line-clamp-2 font-bold">{detail.title}</h2>
        <p className="text-green-500 line-clamp-1">{detail.description}</p>
        <p className="line-clamp-3">{detail.content}</p>
        <div className="$$card-actions flex justify-end px-5">
          <button
            onClick={()=>{window.open(detail.url, "_blank")}}
            className="$$btn $$btn-primary bg-sky-800 px-4 py-1 rounded-sm cursor-pointer hover:bg-sky-500 hover:scale-90 transition-all duration-200"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};
export default News;
