import React, {useContext, useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {charService} from "../services";
import {Chars} from "../components";
import {EpisodeNameContext} from "../hoc/episodeNameContext";

const CharsPage = () => {
    const {state:{charMassive}} = useLocation();

    const [chars, setChars] = useState([])
    useEffect(() => {
        charService.byIds(charMassive).then(({data})=>setChars(data))
    }, [charMassive]);
    
    const {setCharacterPageLocation} = useContext(EpisodeNameContext);
    useEffect(() => {
        setCharacterPageLocation(true);
        return () => {
            setCharacterPageLocation(false);
        };
    }, [setCharacterPageLocation]);




    return (
        <div>
            <Chars chars={chars}/>
        </div>
    );
};

export {CharsPage}