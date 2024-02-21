import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {charService} from "../services";
import {Chars} from "../components";

const CharsPage = () => {
    const {state:{charMassive}} = useLocation();

    const [chars, setChars] = useState([])
    useEffect(() => {
        charService.byIds(charMassive).then(({data})=>setChars(data))
    }, [charMassive]);



    return (
        <div>
            <Chars chars={chars}/>
        </div>
    );
};

export {CharsPage}