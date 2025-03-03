import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
const BASE_URL = "https://newsapi.org/v2";

export const fetchNews = async ({ pageParam = 1 }) => {
  const response = await axios.get(`${BASE_URL}/top-headlines`, {
    params: {
      country: "us",
      apiKey: API_KEY, //your api key should be stored in .env file
      page: pageParam,
      pageSize: 10, //number of articles to be loaded
    },
  });
  return {
    articles: response.data.articles,
    nextPage: pageParam + 1,
  };
};
