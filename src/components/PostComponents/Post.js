import React from 'react';
import {useNavigate} from "react-router-dom";

import css from "./posts.module.css"

const Post = ({post}) => {
    const {title, id} = post;
    const navigate = useNavigate();
    return (
        <div className={css.post}>

            <div>{title}</div>
            <button onClick={()=>navigate('/postDetails/'+id, {state:{post}})}>more info</button>
        </div>
    );
};

export {Post}