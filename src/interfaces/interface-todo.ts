export interface ITodo {
    id: number;
    complete: boolean;
    title: string;
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
