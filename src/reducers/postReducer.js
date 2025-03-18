import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
    name: 'posts',
    initialState: { list: [], selectedPost: null },
    reducers: {
        setPosts: (state, action) => { state.list = action.payload; },
        setSelectedPost: (state, action) => { state.selectedPost = action.payload; }
    }
});

export const { setPosts, setSelectedPost } = postsSlice.actions;
export default postsSlice.reducer;
