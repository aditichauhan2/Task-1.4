import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../reducers/postReducer';

export const store = configureStore({
    reducer: {
        posts: postsReducer
    }
});
