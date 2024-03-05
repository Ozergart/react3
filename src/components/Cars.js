import React, {useEffect, useState} from 'react';
import {carService} from "../services/carService";
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../store/slices/carSlice";
import {Car} from "./Car";


const Cars = () => {

    const dispatch = useDispatch();
    const {cars} = useSelector(state=>state.cars);
    useEffect(() => {
        carService.getAll().then(({data})=>dispatch(carAction.setResponse(data)))
        console.log(cars);
    }, []);
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars}