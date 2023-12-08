import { Todo, TodoState } from '../types/types-todo'

const BASE = 'http://localhost:3000/todos'

export async function fetchTodos(state: TodoState = 'all'): Promise<Todo[]> {
    const res = await fetch(BASE)

    if (!res.ok) throw new Error('Failed to fetch todos!')

    return res.json()
}

export async function toggleTodoStatus(todoId: number, completed: boolean) {
    const res = await fetch(`${BASE}/${todoId}`, {
        method: 'PATCH',
        body: JSON.stringify({ completed }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return res.json()
}

export async function createTodo(title: string) {
    const res = await fetch(BASE, {
        method: "POST",
        body: JSON.stringify({ title, completed: false }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    return res.json()
}
export async function deleteTodo(todoId: number) {
    const res = await fetch(`${BASE}/${todoId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok) throw new Error('Failed to delete todo!');

    return res.json();
}
