import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchPostById, setSelectedPost } from './app/store';
import './styles.css'; 
 

// Display List of Posts
const PostsList = () => {
    const dispatch = useDispatch();
    const posts = useSelector(state => state.posts.list);

    useEffect(() => {
        dispatch(setSelectedPost(null));
        dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div className="container">
            <h2>Posts</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>View Details</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td><Link to={`/post/${post.id}`}>{post.id}</Link></td>
                            <td>{post.userId}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Display Single Post Details
const PostDetails = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const post = useSelector(state => state.posts.selectedPost);

    useEffect(() => {
        dispatch(fetchPostById(id));
    }, [dispatch, id]);

    return post ? (
        <div className="container">
            <h2>Post Details</h2>
            <div className="details">
                <p><strong>ID:</strong> {post.id}</p>
                <p><strong>User ID:</strong> {post.userId}</p>
                <p><strong>Title:</strong> {post.title}</p>
                <p><strong>Body:</strong> {post.body}</p>
            </div>
            <Link to="/" className="back-link">Back</Link>
        </div>
    ) : <p>Loading...</p>;
};

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={<PostsList />} />
            <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
    </Router>
);

export default App;
