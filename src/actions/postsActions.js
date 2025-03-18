import axios from 'axios';
import { setPosts, setSelectedPost } from '../reducers/postReducer';

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
