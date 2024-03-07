import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../store/slices/carSlice";

const Car = ({car}) => {
     const {id, brand, price, year} = car;

     const dispatch = useDispatch();
     const {carForUpdate} = useSelector(state => state.cars);

     const remove =  (id)=>{
        dispatch(carAction.deleteCar(id))
     }
     const update = (car)=>{
         dispatch(carAction.setCarUpdate(car))
         console.log(carForUpdate);
     }

    return (
        <div>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>
            <button onClick={()=>update(car)}>update</button>
            <button onClick={()=>remove(id)}>delete</button>
        </div>
    );
};

export {Car}