import React from 'react';
// @ts-ignore
import styles from '../styles/App.module.scss'
import TodoList from "./TodoList";
import {useTodosQuery} from "../hooks/useTodosQuery";
import TodoInputButton from "./addTodoItem";

const App: React.FC = () => {
    const {data, isLoading} = useTodosQuery('all');

    if (isLoading){
        return (
            <div className='text-center'>Loading...</div>
        )
    }

    return (
        <section className={styles.todo}>
            <h1>Todos ({data?.length})</h1>
        <TodoInputButton/>
            <div>
                <TodoList
                    items={data || []}
                />
            </div>
    </section>
    );
}

export default App;
