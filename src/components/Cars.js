import React, {useEffect, useState} from 'react';
import Car from "./Car";


const Cars = ({cars}) => {

    return (
        <div>
           Cars
            {/*{cars.map(car=><Car key={car.brand} car={car}/>)}*/}
        </div>
    );
};

export default Cars;