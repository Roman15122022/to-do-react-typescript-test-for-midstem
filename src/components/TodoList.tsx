import React from 'react';
import TodoItem from "./TodoItem";
import {TodoListProps} from "../interfaces/interface-todo";
import {useQuery} from "react-query";
import {fetchTodos} from "../services/todo-service";

const TodoList: React.FC<TodoListProps> = (props) => {
    const {items, toggleTodo, removeTodo} = props;
    const {data, isSuccess} = useQuery({
        queryFn: () => fetchTodos('all'),
        queryKey: ['todos', 'all']
    })
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
