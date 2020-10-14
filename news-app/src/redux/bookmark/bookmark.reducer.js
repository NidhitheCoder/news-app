import bookmarkActionTypes from './bookmark.types';
import {addNewsTBookmark} from './bookmark.utils';

const INITIAL_STATE = {
    bookmark:[]
};

const bookmarkReducer = (state=INITIAL_STATE,action) => {
    switch(action.type) {
        case bookmarkActionTypes.ADD_TO_BOOKMARK:
            return{
                ...state,
                bookmark:addNewsTBookmark(state.bookmark, action.payload)
            };
        default:
            return state;
    }
};

export default bookmarkReducer;