import React, {useState, useEffect, useRef} from 'react';
import '../styles/App.css';
import {ITodo} from '../interfaces/interface-todo'
import TodoList from "./TodoList";

const App: React.FC = () => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState<ITodo[]>([])

    const inputRef = useRef<HTMLInputElement>(null)
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
            setTodos([...todos, {
                id: Date.now(), title: value, complete: false
            }])
            setValue('');
        }
    }
    const removeTodo = (id: number): void => {
        setTodos(todos.filter(item => item.id !== id))
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

    return (<div className="App">
        <div>
            <input
                value={value}
                placeholder='Enter todo here'
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                ref={inputRef}
            />
            <button onClick={addTodo}>Add</button>
        </div>
        <TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}/>
    </div>);
}

export default App;
