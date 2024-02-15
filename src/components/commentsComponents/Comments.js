import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {commentsService} from "../../services/commentsService";
import {Comment} from "./Comment";

const Comments = () => {
    const {postId} = useParams()
    const [comments, setComments] = useState([])
    useEffect(() => {
        commentsService.byPostId(postId).then(({data})=>setComments(data))
    }, [comments]);
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments}