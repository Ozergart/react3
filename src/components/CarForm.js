import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carService} from "../services/carService";
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
    const save = (car)=>{
        carService.create(car)
        dispatch(carAction.changeTrigger())
        reset()
    }
    const update = async (car)=>{
        await carService.update(carForUpdate.id,car)
        dispatch(carAction.changeTrigger())
        dispatch(carAction.setCarUpdate(null))
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