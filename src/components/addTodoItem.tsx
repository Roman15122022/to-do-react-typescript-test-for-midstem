// TodoInputButton.js
import React, {useEffect, useRef, useState} from 'react';
// @ts-ignore
import styles from '../styles/App.module.scss';
import {useCreateTodo} from '../hooks/useCreateTodo';

const TodoInputButton: React.FC = () => {
    const [value, setValue] = useState('');
    const {mutate} = useCreateTodo();

    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setValue(event.target.value);
    };

    const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === 'Enter') {
            addTodo();
        }
    };

    const addTodo = () => {
        if (value) {
            mutate(value);
            setValue('');
        }
    };

    return (
        <div>
            <input
                className={styles.todo__input}
                value={value}
                placeholder="Enter todo here"
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                ref={inputRef}
            />
            <button className={styles.todo__btn} onClick={addTodo}>
                Submit
            </button>
        </div>
    );
};

export default TodoInputButton;
