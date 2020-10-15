import newsActionTypes from "./news.types";

export const setNews = newsMap => ({
  type: newsActionTypes.UPDATE_NEWS,
  payload: newsMap
});

export const addCurrentNews = article => ({
  type: newsActionTypes.ADD_CURRENT_NEWS,
  payload: article
});
