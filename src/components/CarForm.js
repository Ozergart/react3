import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/carService";
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../store/slices/carSlice";

const CarForm = () => {
    const {reset,
        handleSubmit,
        register,
        setValue} = useForm();
    const dispatch = useDispatch();
    useEffect(() => {

    }, []);
    const save = (car)=>{
        carService.create(car)
        dispatch(carAction.changeTrigger())
    }
    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="text" placeholder={"brand"} {...register("brand")}/>
                <input type="number" placeholder={"year"} {...register("year")}/>
                <input type="number" placeholder={"price"} {...register("price")}/>
                <button>save</button>
            </form>
        </div>
    );
};

export {CarForm}