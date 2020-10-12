import newsActiontypes from "./news.types";

export const updateNews = newsMap => ({
  type: newsActiontypes.updateNews,
  payload: newsMap
});
