import React from 'react';
import {Char} from "./Char";
import {useNavigate} from "react-router-dom";

const Chars = ({chars}) => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>navigate(-1)}>back</button>
            {chars?chars.map(char=><Char key={char.id} char={char}/>):null}
        </div>
    );
};

export {Chars}