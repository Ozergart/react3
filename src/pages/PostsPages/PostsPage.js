import React from 'react';
import {Posts} from "../../components/PostComponents/Posts";
import {useParams} from "react-router-dom";

const PostsPage = () => {
const {userId} = useParams()

    return (
        <div>
            <Posts userId={userId}/>
        </div>
    );
};

export {PostsPage}