import newsActiontypes from "./news.types";

export const setNews = newsMap => ({
  type: newsActiontypes.UPDATE_NEWS,
  payload: newsMap
});
