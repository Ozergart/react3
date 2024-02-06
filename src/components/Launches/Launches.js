import React, {useEffect, useState} from 'react';
import axios from "axios";
import Launch from "../Lauch/Launch";

const Launches = () => {
    const [launches, setlaunches] = useState()
    useEffect(() => {
        axios('https://api.spacexdata.com/v3/launches/').then(value =>value.data).then(value=>setlaunches(value))
    }, []);
    return (
        <div>
            {launches.map(launch=><Launch key ={launch.flight_number} launch = {launch}/>)}
        </div>
    );
};

export default Launches;