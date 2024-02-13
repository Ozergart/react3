import React from 'react';

const Post = (post) => {
    const {id, body, title, userid} = post
    return (
        <div>
            <div>id : {id}</div>
            <div>body : {body}</div>
            <div>title : {title}</div>
            <div>userid : {userid}</div>
        </div>
    );
};

export default Post;