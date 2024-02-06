import React from 'react';

const Post = ({post, getPost}) => {
    const {id, title} = post
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={()=>getPost(post)}>more</button>
        </div>
    );
};

export default Post;