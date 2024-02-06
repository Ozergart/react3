import React, {useEffect, useState} from 'react';
import {axiosService} from "../../servisec/AxiosServices";
import {urls} from "../../constants/urls";
import Post from "../Post/Post";
import PostDetails from "../postDetails/postDetails";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [postDetails, setpostDetails] = useState([]);
    useEffect(() => {
        axiosService(urls.posts.base).then(value => value.data).then(value => {setPosts(value)})
    }, []);
  const getPost = (post) => {
      setpostDetails(post)
  }
    return (
        <div>
            {posts.map(post => <Post key = {post.id} post = {post} getPost={getPost}/>)}
            <hr/>
            {postDetails != null && <PostDetails postDetails = {postDetails}/>}
        </div>
    );
};

export default Posts;