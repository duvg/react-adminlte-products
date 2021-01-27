import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../redux/effects/Posts';
import { Post } from '../redux/interfaces/Post';
import { AppState } from '../redux/store';
import { Admin, Resource, ListGuesser } from 'react-admin'; 


const Posts  = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    const posts  = useSelector((state: AppState) => state.posts);
    const postItems = posts.posts.map((post: Post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ));

    return (<div>{postItems}</div>);
}
 
export default Posts;