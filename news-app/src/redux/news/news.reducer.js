import newsActionTypes from "./news.types";

const INITIAL_STATE = {
  news: [],
  article:null
};

const newsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case newsActionTypes.UPDATE_NEWS:
      return {
        ...state,
        news: action.payload
      };
    case newsActionTypes.ADD_CURRENT_NEWS:
      return {
        ...state,
        article: action.payload
      };
    default:
      return state;
  }
};

export default newsReducer;
