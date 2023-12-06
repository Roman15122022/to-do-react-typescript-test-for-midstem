import React from 'react';
import TodoItem from "./TodoItem";
import {TodoListProps} from "../interfaces/interface-todo";

const TodoList: React.FC<TodoListProps> = (props) => {
    const {items, toggleTodo, removeTodo} = props;
    return (
        <div>
            {
                items.map(item =>(
                    <TodoItem
                        key={item.id}
                        toggleTodo={toggleTodo}
                        removeTodo={removeTodo}
                        {...item}/>
                ))}
        </div>
    );
};

export default TodoList;
