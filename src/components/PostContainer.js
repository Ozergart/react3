import React, {useEffect, useState} from 'react';
import PostForm from "./PostForm";
import Posts from "./Posts";
import {PostService} from "../services/postService";

const PostContainer = () => {

    const [posts, setPosts] = useState()
    useEffect(() => {
        PostService.getAll(({data})=>setPosts(data))
    }, []);


    return (
        <div>
            <PostForm/>
            <hr/>
            <Posts posts={posts}/>
        </div>
    );
};

export default PostContainer;