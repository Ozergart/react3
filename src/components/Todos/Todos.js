import React, {useEffect, useState} from 'react';
import {Services} from "../../Services/Services";
import {Todo} from "./Todo";

const Todos = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        Services.todos().then(({data})=> setTodos(data))
    }, []);
    return (
        <div>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos}