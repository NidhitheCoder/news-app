import { createSelector } from "reselect";

const selectNews = state => state.news;

export const selectNewsCollection = createSelector(
  selectNews,
  (news) => news.News
);
