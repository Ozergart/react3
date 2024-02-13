import React, {useEffect, useState} from 'react';
import {services} from "../../Services/Services";
import {Todo} from "./Todo";

const Todos = () => {

    const [todos, setTodos] = useState([])

    useEffect(() => {
        services.todos().then(({data})=> setTodos(data))
    }, []);
    return (
        <div>
            {todos.map(todo=><Todo key={todo.id} todo={todo}/>)}
        </div>
    );
};

export {Todos}