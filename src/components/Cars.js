import React, {useEffect,} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../store/slices/carSlice";
import {Car} from "./Car";


const Cars = () => {

    const dispatch = useDispatch();
    const {cars, trigger} = useSelector(state=>state.cars);
    useEffect(() => {
        dispatch(carAction.getAll())
    }, [trigger]);
    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car}/>)}
        </div>
    );
};

export {Cars}