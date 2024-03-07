import React, {useContext} from 'react';

import css from './Header.module.css'
import {EpisodeNameContext} from "../../hoc/episodeNameContext";
import {useSelector} from "react-redux";
import {store} from "../../store/store";


const Header = () => {
    // const { episodeName, characterPageLocation} = useContext(EpisodeNameContext);
    const {episodeName} = useSelector(store)



    return (
        <div className={css.Header}>
            <h1>Rick & Morty</h1>
            {characterPageLocation&&<p>episode name: {episodeName}</p>}
        </div>
    );
};

export {Header}