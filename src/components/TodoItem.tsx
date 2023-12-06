import React from 'react';
import {ITodoItem} from "../interfaces/interface-todo";

const TodoItem: React.FC<ITodoItem> = (props) => {
    const {id, title, complete, removeTodo, toggleTodo} = props;
    return (<div>
            <input type="checkbox" name={id.toString()} checked={complete} onChange={() => toggleTodo(id)}/>
            <label htmlFor={id.toString()}>{title}</label>
            <button onClick={() => removeTodo(id)}>X</button>
        </div>);
};

export default TodoItem;
