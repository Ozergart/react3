import React from 'react';

const Character = ({character}) => {
    const {name, image}  = character
    return (
        <div>
            <div className={'charImg'}>
                <h1>{name}</h1>
                <img
                    src={image}
                    alt={name}/>
            </div>
        </div>
    );
};

export default Character;