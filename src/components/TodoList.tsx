import React from 'react';
import TodoItem from "./TodoItem";
import {TodoListProps} from "../interfaces/interface-todo";


const TodoList: React.FC<TodoListProps> = (props) => {
    const {items} = props;

    return (
        <div>
            {
                items.map(item => (
                    <TodoItem
                        key={item.id}
                        {...item}/>
                ))}
        </div>
    );
};

export default TodoList;
