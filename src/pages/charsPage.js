import React from 'react';
import {useNavigate} from "react-router-dom";

const CharsPage = () => {
    const {state:{charMassive}} = useNavigate();
    console.log(charMassive);
    return (
        <div>
            CharsPage
        </div>
    );
};

export {CharsPage}