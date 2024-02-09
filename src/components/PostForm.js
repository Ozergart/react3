import React from 'react';
import {useForm} from "react-hook-form";
import {PostService} from "../services/postService";
import {post} from "axios";

const PostForm = () => {

    const {reset, handleSubmit, register} = useForm()

    const save = (post) =>{
        PostService.create(post).then(({post})=> console.log(post))
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'title'} {...register('title')}/>
                <input type="text" placeholder={'body'} {...register('body')}/>
                <input type="text" placeholder={'userId'} {...register('userId')}/>
                <button>Save</button>
            </form>
        </div>
    );
};

export default PostForm;