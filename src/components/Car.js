import React from 'react';
import {carService} from "../services/carService";
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../store/slices/carSlice";

const Car = ({car}) => {
     const {id, brand, price, year} = car;

     const dispatch = useDispatch();
     const {carForUpdate} = useSelector;

     const remove = async (id)=>{
         await carService.delete(id)
         dispatch(carAction.changeTrigger())
     }
     const update = ()=>{
         dispatch(carAction.setCarUpdate({id,brand,price,year}))
         console.log(carForUpdate);
     }

    return (
        <div>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>
            <button onClick={update}>update</button>
            <button onClick={()=>remove(id)}>delete</button>
        </div>
    );
};

export {Car}