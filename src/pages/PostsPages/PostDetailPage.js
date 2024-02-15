import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import css from './post.module.css'
import {PostDetails} from "../../components/PostComponents/PostDetails";
import {postService} from "../../services/postService";
import {Comments} from "../../components/commentsComponents/Comments";

const PostDetailPage = () => {

    const {postId} = useParams()
    const {state} = useLocation();
    const [postObj, setPostObj] = useState([])

    useEffect(() => {
        if (!state || !state.post){
            postService.biId(postId).then(({data})=>setPostObj(data))
        }
    }, [state,postId]);




    return (
        <div>
            <PostDetails post={state?.post || postObj}/>
            <hr/>
            <h2>Comments</h2>
            <Comments/>
        </div>
    );
};

export {PostDetailPage}