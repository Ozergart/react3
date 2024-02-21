import React, {useContext} from 'react';

import css from './Header.module.css'
import {EpisodeNameContext} from "../../hoc/episodeNameContext";


const Header = () => {
    const { episodeName, characterPageLocation} = useContext(EpisodeNameContext);



    return (
        <div className={css.Header}>
            <h1>Rick & Morty</h1>
            {characterPageLocation&&<p>episode name: {episodeName}</p>}
        </div>
    );
};

export {Header}