import React, {useEffect, useState} from 'react';

import {Services} from "../../Services/Services";
import css from './Post.module.css'
import {useParams} from "react-router-dom";
const Post = () => {



    const { postId  } = useParams()
    const [Post, setPost] = useState({})
    useEffect(() => {
            Services.posts(postId).then(({data}) => setPost(data));
    }, []);

    const {userId, id, title, body} = Post
    return (
        <div className={css.Post}>
            <div>userid : {userId}</div>
            <div>id : {id}</div>
            <div>title : {title}</div>
            <div>body : {body}</div>
        </div>
    );
};

export {Post}