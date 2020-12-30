import { createSelector } from "reselect";

const selectBookmarks = state => state.bookmark;

export const getBookmarkCollections = createSelector(
  selectBookmarks,
  bookmark => bookmark.bookmark
);
