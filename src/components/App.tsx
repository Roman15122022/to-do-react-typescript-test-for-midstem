import React, {useState, useEffect, useRef} from 'react';
// @ts-ignore
import styles from '../styles/App.module.scss'
import {ITodo} from '../interfaces/interface-todo'
import TodoList from "./TodoList";

const App: React.FC = () => {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState<ITodo[]>([]);
    const [counter, setCounter] = useState(0);
    const [currentId, setCurrentId] = useState(1);


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
            setCounter(counter + 1);
            setTodos([...todos, {
                id: currentId,
                title: value,
                complete: false,
            }])
            setCurrentId(currentId + 1);
            setValue('');
        }
    }
    const removeTodo = (id: number): void => {
        setTodos(todos.filter(item => item.id !== id))
        setCounter(counter - 1);
    }
    const toggleTodo = (id: number): void => {
        setTodos(todos.map(item => {
            if (item.id !== id) return item;
            return {
                ...item,
                complete: !item.complete
            }
        }))
    }
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <section className={styles.todo}>
            <h1>Todos ({counter})</h1>
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
                <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
            </div>
    </section>
    );
}

export default App;
