import { createSelector } from "reselect";

const selectNews = state => state.news;
const selectCurrentNews = state => state.article;

export const selectNewsCollection = createSelector(
  selectNews,
  (news) => news.News
);

export const selectCurrentNews = createSelector(
  selectCurrentNews,
  (article) => article.article
);