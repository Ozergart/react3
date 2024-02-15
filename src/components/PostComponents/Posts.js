import React, {useEffect, useState} from 'react';

import {postService} from "../../services/postService";
import {Post} from "./Post";

const Posts = ({userId}) => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        postService.byUserId(userId).then(({data})=>setPosts(data))
    }, []);
    return (
        <div>
            {posts.map(post=><Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts}