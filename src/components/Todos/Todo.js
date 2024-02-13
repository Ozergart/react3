import React from 'react';

import css from './Todo.module.css'

const Todo = ({todo}) => {
    const {id, userId, title, completed} = todo
    return (
        <div className={css.Todo}>
            <div>id : {id}</div>
            <div>userId : {userId}</div>
            <div>title : {title}</div>
            <div>completed : {completed}</div>
        </div>
    );
};

export {Todo}