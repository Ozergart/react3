import React from 'react';
import {User} from "./User";

const Users = ({data}) => {

    return (
        <div>
            {data.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users}