import React from 'react';

import css from './Episodes.module.css'
import {useNavigate} from "react-router-dom";
import {useIdCharExtractor} from "../../hooks";

const Episode = ({episod}) => {
    const {id, name, episode, characters} = episod;
    const navigate = useNavigate();
    let charMassive = [];
    useIdCharExtractor(characters, charMassive)

    return (
        <div className={css.Episode}>

            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>episode : {episode}</div>
            <button onClick={()=>navigate(`/characters/${id}`, {state:{charMassive}})}>characters</button>
        </div>
    );
};

export {Episode}