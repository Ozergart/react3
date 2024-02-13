import React from 'react';

const Post = (post) => {
    const {id, body, title, userId} = post;
    return (
        <div>
            <div>id : {id}</div>
            <div>body : {body}</div>
            <div>title : {title}</div>
            <div>userid : {userId}</div>
        </div>
    );
};

export default Post;