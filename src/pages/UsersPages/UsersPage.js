import React from 'react';
import {Users} from "../../components/UserComponents/Users";
import {useLoaderData} from "react-router-dom";

const UsersPage = () => {
    const {data} = useLoaderData();
    return (
        <div>
            <Users data={data}/>
        </div>
    );
};

export {UsersPage}