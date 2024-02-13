import React, {useEffect, useState} from 'react';
import {Services} from "../../Services/Services";
import {Comment} from "./Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);
    useEffect(() => {
        Services.comments.all().then(({data})=>setComments(data));
    }, []);
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments}