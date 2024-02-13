import React, {useEffect, useState} from 'react';

import {Services} from "../../Services/Services";
import css from './Post.module.css'
const Post = () => {


    const str1 = window.location.search;

    const url1 = new URLSearchParams(str1);

    const paramValue = url1.get('postId');


    const [Post, setPost] = useState([])
    useEffect(() => {
        Services.posts(paramValue).then(({data})=> setPost(data))
    }, []);

    const {userid, id, title, body} = Post
    return (
        <div className={css.Post}>
            <div>userid : {userid}</div>
            <div>id : {id}</div>
            <div>title : {title}</div>
            <div>body : {body}</div>
        </div>
    );
};

export {Post}