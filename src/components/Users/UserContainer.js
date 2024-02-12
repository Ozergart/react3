import React, {useEffect, useState} from 'react';
import {postService} from "../../services/postService";
import UserForm from "./UserForm";
import Users from "./Users";

const UserContainer = () => {
    const [users, setUsers]= useState([])
    useEffect(() => {
        postService.getAll().then(({data}) => setUsers(data))
    }, []);
    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export default UserContainer;