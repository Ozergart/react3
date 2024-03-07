import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../store/slices/carSlice";

const CarForm = () => {
    const {reset,
        handleSubmit,
        register,
        setValue,
    } = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state.cars);
    useEffect(() => {
        if(carForUpdate){
            setValue("brand", carForUpdate.brand)
            setValue("year", carForUpdate.year)
            setValue("price", carForUpdate.price)
        }
    }, [carForUpdate]);
    const  save = async (car)=>{
        dispatch(carAction.create({car}))
        reset()
    }
    const update = async (car)=>{
        dispatch(carAction.update({id:carForUpdate.id, car:car}))
        reset()
    }
    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate?update:save)}>
                <input type="text" placeholder={"brand"} {...register("brand")}/>
                <input type="number" placeholder={"year"} {...register("year")}/>
                <input type="number" placeholder={"price"} {...register("price")}/>
                <button>{carForUpdate?'update':'save'}</button>
            </form>
        </div>
    );
};

export {CarForm}