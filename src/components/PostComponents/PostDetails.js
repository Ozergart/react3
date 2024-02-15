import React from 'react';

import css from "./posts.module.css"

const PostDetails = ({post}) => {
    const {userId, id, title, body} = post
    return (
        <div className={css.post}>
            <div>userId : {userId}</div>
            <div>id : {id}</div>
            <div>title : {title}</div>
            <div>body : {body}</div>
        </div>
    );
};

export {PostDetails}