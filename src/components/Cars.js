import React from 'react';

import Car from "./Car";


const Cars = ({cars, setCarForUpdate, setCarForDelete}) => {

    return (
        <div>
            {cars.map(car=><Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setCarForDelete={setCarForDelete}/>)}
        </div>
    );
};

export default Cars;