import React from 'react';

import css from './Episodes.module.css'

const Episode = ({episod}) => {
    const {id, name, chapter} = episod;
    return (
        <div className={css.Episode}>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>chapter : {chapter}</div>
        </div>
    );
};

export {Episode}