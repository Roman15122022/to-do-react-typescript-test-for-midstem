import React, { useState, useRef, useEffect } from 'react';
import { ITodoItem } from '../interfaces/interface-todo';
import { FaTrash, FaEdit } from 'react-icons/fa';

const TodoItem: React.FC<ITodoItem> = (props) => {
    const { id, title, complete, removeTodo, toggleTodo } = props;

    const [editedTitle, setEditedTitle] = useState(title);
    const [isEditing, setIsEditing] = useState(false);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const getColorByClass = (id: number): string => {
        return id % 2 === 0 ? 'bg-white' : 'bg-gray-100';
    };

    const handleSaveEdit = () => {
        if (editedTitle) {
            setEditedTitle(editedTitle);
            setIsEditing(false);
        }else {
            alert('Empty field')
        }
    };

    const handleCancelEdit = () => {
        setEditedTitle(title);
        setIsEditing(false);
    };

    return (
        <div className={`w-96 flex justify-between p-3  border-2 my-1 ${getColorByClass(id)}`}>
            <div className='ml-2'>
                <input
                    type='checkbox'
                    name={id.toString()}
                    checked={complete}
                    onChange={() => toggleTodo(id)}
                />
                {isEditing ? (
                    <input
                        className={'ml-2 mt-0.5'}
                        ref={inputRef}
                        type='text'
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                    />
                ) : (
                    <label className='ml-3' htmlFor={id.toString()}>
                        {editedTitle}
                    </label>
                )}
            </div>

            <div className='mr-2'>
                {!isEditing && (
                    <>
                        <button className={'bg-green-500 text-white mr-2 p-2'}
                                onClick={() => setIsEditing(true)}
                        >
                            <FaEdit />
                        </button>
                        <button className={'bg-red-500 text-white p-2'} onClick={() => removeTodo(id)}>
                            <FaTrash />
                        </button>
                    </>
                )}

                {isEditing && (
                    <>
                        <button className={'bg-red-500 text-white px-2 py-0.5 mr-2'} onClick={handleCancelEdit}>
                            Cancel
                        </button>
                        <button className={'bg-green-500 text-white px-2 py-0.5'} onClick={handleSaveEdit}>
                            Save
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TodoItem;
