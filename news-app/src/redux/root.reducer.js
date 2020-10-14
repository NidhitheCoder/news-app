import {combineReducers} from 'redux';
import { persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import newsReducer from './news/news.reducer';
import bookmarkReducer from  './bookmark/bookmark.reducer';

const persistConfig = {
    key:'root',
    storage,
    whitelist: ["news"]

}

const rootReducer = combineReducers({
    news:newsReducer,
    bookmark:bookmarkReducer
});

export default persistReducer(persistConfig,rootReducer);