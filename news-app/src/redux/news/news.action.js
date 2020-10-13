import newsActiontypes from "./news.types";

export const setNews = newsMap => ({
  type: newsActiontypes.UPDATE_NEWS,
  payload: newsMap
});

export const addCurrentNews = article => ({
  type: "Need to fill from news.types in next commit",
  payload: article
});
