import React from 'react';
import {useForm} from "react-hook-form";
import {postService} from "../../services/postService";

const UserForm = () => {
    const {reset,register,handleSubmit} =  useForm()
    const save = (post) =>{
    postService.post(post).then(({data})=> console.log(data))
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'name'} {...register('name')}/>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'email'} {...register('email')}/>
                <input type="text" placeholder={'city'} {...register('address.city')}/>
                <input type="text" placeholder={'street'} {...register('address.street')}/>
                <button>save</button>

            </form>
        </div>
    );
};

export default UserForm;