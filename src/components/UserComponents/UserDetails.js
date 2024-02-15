import React from 'react';
import {Link, useNavigate} from "react-router-dom";

import css from "./users.module.css"

const UserDetails = ({user}) => {
  const  {id, name, username, email, address} = user
    const navigate = useNavigate();

    const click = (e)=>{
        e.preventDefault();
        navigate('posts')
    }

    return (
        <div className={css.user}>
        <div>id : {id}</div>
        <div>name : {name}</div>
        <div>username : {username}</div>
        <div>email : {email}</div>
        <div>address : {JSON.stringify(address)}</div>
            <button onClick={()=>navigate('posts')}>posts of current user</button>
            {/*<button onClick={click}>posts of current user</button>*/}
        </div>
    );
};

export {UserDetails}