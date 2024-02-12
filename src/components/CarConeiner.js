import React, {useEffect, useState} from 'react';
import CarForm from "./CarForm";
import Cars from "./Cars";
import {PostService} from "../services/PostServ";


const CarConeiner = () => {

    const [cars, setCars] = useState([]);
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)
    const [carForDelete, setCarForDelete] = useState(null)

    useEffect(() => {
        if(carForDelete){
            PostService.deleteById(carForDelete)
            setTrigger(prev=>!prev)
        }
    }, [carForDelete]);

    useEffect(() => {
        PostService.getAll().then(({data})=> setCars(data));
    }, [trigger]);


    return (
        <div>
            <CarForm settrigger={setTrigger} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars cars={cars} setCarForUpdate={setCarForUpdate} setCarForDelete={setCarForDelete}/>
        </div>
    );
};

export default CarConeiner;