export interface ITodo {
    id: number;
    title: string;
    complete: boolean;
}

export interface ITodoItem extends ITodo {
    removeTodo: (id:number) => void;
    toggleTodo: (id:number) => void;
}

export interface TodoListProps {
    items: ITodo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;

}
