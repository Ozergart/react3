import React from 'react';

import css from './Episodes.module.css'
import {Link, Navigate} from "react-router-dom";
import {useIdCharExtractor} from "../../hooks";

const Episode = ({episod}) => {
    const {id, name, chapter, characters} = episod;
    let charMassive = [];
    useIdCharExtractor(characters, charMassive)
    console.log(charMassive);
    return (
        <div className={css.Episode}>
            <Link to={`/characters/?episode=${id}`}>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>chapter : {chapter}</div>
            </Link>
        </div>
    );
};

export {Episode}