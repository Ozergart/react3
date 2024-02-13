import React from 'react';

import {Link} from "react-router-dom";
import css from "./comments.module.css"

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment
    return (
        <div className={css.Comment}>
            <Link to={`/post/${postId}`}>
                <div>postId : {postId}</div>
                <div>id : {id}</div>
                <div>name : {name}</div>
                <div>email : {email}</div>
                <div>body : {body}</div>
            </Link>
        </div>
    );
};

export {Comment}