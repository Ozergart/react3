import React from 'react';

const Char = ({char}) => {
    const {id, name, image}= char;
    return (
        <div>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <img src={image} alt={'image of '+name }/>
        </div>
    );
};

export {Char}