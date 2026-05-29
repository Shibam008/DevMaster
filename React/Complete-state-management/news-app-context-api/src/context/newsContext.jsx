import axios from "axios";
import { createContext, useContext, useState } from "react";

const NewsContext = createContext();

const NewsContextProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState('all');

  const fetchNews = async (url=`https://newsapi.org/v2/everything?q=${category}`) => {
    const resp = await axios.get(
     `${url}&apiKey=093b2c1acceb4777ae5ca39a665a023f`,
    );
    return resp.data.articles;
  }

  const value = {
    news,
    setNews,
    category,
    setCategory,
    fetchNews
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

const useNewsContext = () => {
  return useContext(NewsContext);
};

export { NewsContextProvider, useNewsContext };
