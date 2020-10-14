import bookmarkActionTypes from './bookmark.types';

export const addToBookmark = article => ({
    type: bookmarkActionTypes.ADD_TO_BOOKMARK,
    payload: article
  });
  