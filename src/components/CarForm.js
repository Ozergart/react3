import React, {useEffect} from 'react';


import {useForm} from "react-hook-form";
import {PostService} from "../services/PostServ";




const CarForm = ({settrigger,setCarForUpdate,carForUpdate}) => {
    const {register,reset,handleSubmit,formState:{isValid, errors}, setValue} = useForm(
        {
            mode:'all'
        }
    )
    useEffect(() => {
        if(carForUpdate){
            setValue('brand', carForUpdate.brand ,{shouldValidate:true})
            setValue('price', carForUpdate.price ,{shouldValidate:true})
            setValue('year', carForUpdate.year ,{shouldValidate:true})
        }
    }, [carForUpdate]);
const save = async (car) =>{
    await PostService.create(car)
    settrigger(prev=>!prev)
    reset()
}
const update = async (car)=>{
    await PostService.updateById(carForUpdate.id, car)
    settrigger(prev=>!prev)
    setCarForUpdate(null)
    reset()
}
    return (
        <div>
            <form onSubmit={handleSubmit(carForUpdate?update : save)}>
                <input type="text" placeholder={'brand'} {...register('brand', {
                    pattern: {
                        value: /[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/,
                        message: 'min 1 max 20 char'
                    }
                })}/>
                <input type="number" placeholder={'cost'} {...register('price', {
                    valueAsNumber:true,
                    min:{value: 0 , message: 'min 0'},
                    max: {value:1_000_000, message: 'max 10000000'}
                })} />
                <input type="text" placeholder={'year'} {...register('year', {
                    valueAsNumber:true,
                    min: {value: 1990, message: ' min 1990'},
                    max: {value: new Date().getFullYear(), message: 'max real year'}
                })} />
                <button disabled={!isValid}>{carForUpdate?'update':'save'}</button>
                {errors.brand&&<div>{errors.brand.message}</div>}
                {errors.year&&<div>{errors.year.message}</div>}
                {errors.price&&<div>{errors.price.message}</div>}
            </form>
        </div>
    );
};

export default CarForm;