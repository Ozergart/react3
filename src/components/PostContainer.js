import React, {useEffect, useState} from 'react';
import PostForm from "./PostForm";
import Posts from "./Posts";
import {PostService} from "../services/postService";

const PostContainer = () => {

    const [posts, setPosts] = useState([])
    const [trigger, setTrigger] = useState(null)

    useEffect(() => {
        PostService.getAll().then(({data})=>setPosts(data))
    }, [trigger]);




    return (
        <div>
            <PostForm setTrigger={setTrigger} setPosts={setPosts}/>
            <hr/>
            <Posts posts={posts}/>
        </div>
    );
};

export default PostContainer;