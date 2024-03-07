import React from 'react';

import css from './Header.module.css'

import {useSelector} from "react-redux";


const Header = () => {

    const {episodeName} = useSelector(state => state.episodes)



    return (
        <div className={css.Header}>
            <h1>Rick & Morty</h1>
            {<p>{episodeName}</p>}
        </div>
    );
};

export {Header}