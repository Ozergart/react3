import React, {useEffect, useState} from 'react';
import {PostDetails} from "../../components/PostComponents/PostDetails";
import {useLocation, useParams} from "react-router-dom";
import {postService} from "../../services/postService";

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
        </div>
    );
};

export {PostDetailPage}