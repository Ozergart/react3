import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {charService} from "../services";
import {Chars} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {episodeAction} from "../store/slices/episodeSlice";
import {charAction, charReducer} from "../store/slices/charSlice";

const CharsPage = () => {


    const {charMassive,name} = useParams();
    const {chars}=useSelector(state => state.chars)

    // const [chars, setChars] = useState([])
    const dispatch = useDispatch()



    useEffect(() => {

        dispatch(episodeAction.setEpisodeName(name))
        dispatch(charAction.charsByIds({charMassive}))
        charService.byIds(charMassive)

    }, [charMassive, name]);

    return (
        <div>
            <Chars chars={chars}/>
        </div>
    );
};

export {CharsPage}