import React, {useEffect, useState} from 'react';
import CarForm from "./CarForm";
import Cars from "./Cars";
import {PostService} from "../services/PostServ";

const CarConeiner = () => {

    const [cars, setCars] = useState();
    useEffect(() => {
        PostService.getAll().then(({data})=> setCars(cars));
    }, []);

    return (
        <div>
            <CarForm/>
            <hr/>
            <Cars cars={cars}/>
        </div>
    );
};

export default CarConeiner;