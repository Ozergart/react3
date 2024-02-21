import React, {useContext} from 'react';

import css from './Episodes.module.css'
import {useNavigate} from "react-router-dom";
import {useIdCharExtractor} from "../../hooks";
import {EpisodeNameContext} from "../../hoc/episodeNameContext";

const Episode = ({episod}) => {
    const {id, name, episode, characters} = episod;
    const navigate = useNavigate();
    let charMassive = [];
    useIdCharExtractor(characters, charMassive)
    const {setEpisodeNameValue} = useContext(EpisodeNameContext);

    return (
        <div className={css.Episode}>

            <div>id : {id}</div>
            <div>name : {name}</div>
            <div>episode : {episode}</div>
            <button onClick={()=>{
                setEpisodeNameValue(name)
                navigate(`/characters/${id}`, {state:{charMassive}})}
            }>characters</button>
        </div>
    );
};

export {Episode}