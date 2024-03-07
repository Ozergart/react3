import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {charService} from "../services";
import {Chars} from "../components";
import {EpisodeNameContext} from "../hoc/episodeNameContext";
import {useDispatch} from "react-redux";
import {episodeAction} from "../store/slices/episodeSlice";

const CharsPage = () => {


    const {charMassive,name} = useParams();

    const [chars, setChars] = useState([])
    const dispatch = useDispatch()



    useEffect(() => {

        dispatch(episodeAction.setEpisodeName(name))
        charService.byIds(charMassive).then(({data})=>setChars(data))

    }, [charMassive, name]);

    
    const {setCharacterPageLocation, setEpisodeNameValue} = useContext(EpisodeNameContext);
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