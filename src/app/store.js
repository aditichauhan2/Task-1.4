import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Create a slice for posts 
const postsSlice = createSlice({
    name: 'posts',
    initialState: { list: [], selectedPost: null },
    reducers: {
        setPosts: (state, action) => { state.list = action.payload; },
        setSelectedPost: (state, action) => { state.selectedPost = action.payload; }
    }
});

// Export actions for use in components
export const { setPosts, setSelectedPost } = postsSlice.actions;

// Fetch all posts from API
export const fetchPosts = () => async (dispatch) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        dispatch(setPosts(response.data));
    } catch (error) {
        console.error('Error fetching posts:', error);
    }
};

// Fetch a single post by ID
export const fetchPostById = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        dispatch(setSelectedPost(response.data));
    } catch (error) {
        console.error('Error fetching post details:', error);
    }
};

// Create the Redux store
export const store = configureStore({
    reducer: { posts: postsSlice.reducer }
});
