import React, {useEffect, useState} from 'react';
import {services} from "../../Services/Services";
import {Comment} from "./Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);
    useEffect(() => {
        services.comments.all().then(({data})=>setComments(data));
    }, []);
    return (
        <div>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments}