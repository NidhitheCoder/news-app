import { createSelector } from "reselect";

const selectNews = state => state.news;
const selectCurrentNews = state => state.news;

export const selectNewsCollection = createSelector(
  selectNews,
  news => news.News
);

export const selectCurrentNewsArticle = createSelector(
  [selectCurrentNews],
  news => news.article
);
