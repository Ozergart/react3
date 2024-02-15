import React from 'react';
import {useNavigate} from "react-router-dom";

import css from './users.module.css'

const User = ({user}) => {
    const navigate = useNavigate();
    const {id, name} = user
    return (
        <div className={css.user}>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <button onClick={()=>navigate(`/user-detail/${id}`, {state: {}})}>more info</button>
        </div>
    );
};

export {User}