import React, {useState, useEffect, useRef} from 'react';
// @ts-ignore
import styles from '../styles/App.module.scss'
import TodoList from "./TodoList";
import {useTodosQuery} from "../hooks/useTodosQuery";
import {useCreateTodo} from "../hooks/useCreateTodo";

const App: React.FC = () => {
    const [value, setValue] = useState('');
    const {data, isLoading} = useTodosQuery('all');
    const {mutate} = useCreateTodo();

    const inputRef = useRef<HTMLInputElement>(null);
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value);
    }
    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    }
    const addTodo = () => {
        if (value) {
            mutate(value)
            setValue('');
        }
    }
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    if (isLoading){
        return (
            <div className='text-center'>Loading...</div>
        )
    }

    return (
        <section className={styles.todo}>
            <h1>Todos ({data?.length})</h1>
        <div>
            <input
                className={styles.todo__input}
                value={value}
                placeholder='Enter todo here'
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                ref={inputRef}
            />
            <button className={styles.todo__btn} onClick={addTodo}>Submit</button>
        </div>
            <div>
                <TodoList
                    items={data || []}
                />
            </div>
    </section>
    );
}

export default App;
