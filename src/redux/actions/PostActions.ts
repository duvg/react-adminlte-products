import { GET_POSTS, PostActionTypes } from '../types/PostTypes';
import { Post } from '../interfaces/Post';

export const getPostAction = (posts: Post[]): PostActionTypes => {
    return {
        type: GET_POSTS,
        payload: posts
    };
};