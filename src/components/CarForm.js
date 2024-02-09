import React from 'react';
import {useForm} from "react-hook-form";
import {PostService} from "../services/PostServ";
import axios from "axios";

const CarForm = () => {
    const {register,reset,handleSubmit} = useForm()
const save = (car) =>{
    PostService.post(car).then(({data})=> console.log(data))

}
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={'brand'} {...register('brand')} />
                <input type="number" placeholder={'cost'} {...register('cost')} />
                <input type="text" placeholder={'year'} {...register('year')} />
                <button>save</button>
            </form>
        </div>
    );
};

export default CarForm;