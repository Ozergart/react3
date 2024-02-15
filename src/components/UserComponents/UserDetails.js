import React from 'react';
import {useNavigate} from "react-router-dom";

import css from "./users.module.css"

const UserDetails = ({user}) => {
  const  {id, name, username, email, address} = user
    const navigate = useNavigate();
    if (!user) {return <div>Loading...</div>}

    return (
        <div className={css.user}>
        <div>id : {id}</div>
        <div>name : {name}</div>
        <div>username : {username}</div>
        <div>email : {email}</div>
        <div>address : {JSON.stringify(address)}</div>
            <button onClick={()=>navigate('posts')}>posts of current user</button>
        </div>
    );
};

export {UserDetails}