import React from 'react';
import {Posts} from "../../components/PostComponents/Posts";
import {useParams} from "react-router-dom";

const PostsPage = () => {
const {userId} = useParams()
    console.log(userId);

    return (
        <div>
            <Posts userId={userId}/>
        </div>
    );
};

export {PostsPage}