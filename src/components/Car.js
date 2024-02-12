import React from 'react';
import {PostService} from "../services/PostServ";
import {ApiService} from "../services/ApiServ";

const Car = ({car, setCarForUpdate,setCarForDelete}) => {
    const {id, brand, price, year} = car
    return (
        <div>
            <div>id : {id}</div>
            <div>brand : {brand}</div>
            <div>price : {price}</div>
            <div>year : {year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={()=>setCarForDelete(id)}>delete</button>
        </div>
    );
};

export default Car;