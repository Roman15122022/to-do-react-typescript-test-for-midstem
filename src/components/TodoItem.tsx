import React, {useState, useRef, useEffect} from 'react';
import {FaTrash, FaEdit} from 'react-icons/fa';
// @ts-ignore
import styles from '../styles/todo-item.module.scss';
import {useToggleTodoMutation} from "../hooks/useToggleToDoMutation";
import {ITodo} from "../interfaces/interface-todo";
import {useDeleteTodo} from "../hooks/useDeleteTodo";
import {useEditTodoMutation} from "../hooks/useEditTodo";


const TodoItem: React.FC<ITodo> = (props) => {
    const {id, title, completed} = props;
    const [editedTitle, setEditedTitle] = useState(title);
    const [isEditing, setIsEditing] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const {mutate: toggle} = useToggleTodoMutation()
    const {mutate: deleteTodo} = useDeleteTodo()
    const {mutate: editTodo} = useEditTodoMutation()


    useEffect(() => {
        if (isEditing && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isEditing]);

    const getColorByClass = (id: number): string => {
        return id % 2 === 0 ? 'bg-white' : 'bg-gray-100';
    };

    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setEditedTitle(event.target.value);
    };

    const handleSaveEdit = () => {
        if (editedTitle) {
            setIsEditing(false);
            editTodo({id, editedTitle});
        } else {
            alert('Empty field')
        }
    };

    const handleCancelEdit = () => {
        setEditedTitle(title);
        setIsEditing(false);
    };

    return (
        <div className={`w-96 flex justify-between items-center p-3  border-2 my-1 ${getColorByClass(id)}`}>
            <div className='ml-2'>
                <input
                    type='checkbox'
                    name={id.toString()}
                    checked={completed}
                    onChange={() => toggle({id, completed})}
                />
                {isEditing ? (
                    <input
                        className={'ml-2 mt-0.5'}
                        ref={inputRef}
                        type='text'
                        value={editedTitle}
                        onChange={handleInputChange}
                    />
                ) : (
                    <label className='ml-3' htmlFor={id.toString()}>
                        {completed ? <s>{editedTitle}</s> : editedTitle}
                    </label>
                )}
            </div>

            <div className='mr-2'>
                {!isEditing && (
                    <>
                        <button className={styles.edit}
                                onClick={() => setIsEditing(true)}
                        >
                            <FaEdit/>
                        </button>
                        <button className={styles.remove} onClick={() => deleteTodo({id})}>
                            <FaTrash/>
                        </button>
                    </>
                )}

                {isEditing && (
                    <>
                        <button className={styles.cancel} onClick={handleCancelEdit}>
                            Cancel
                        </button>
                        <button className={styles.save} onClick={handleSaveEdit}>
                            Save
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default TodoItem;




