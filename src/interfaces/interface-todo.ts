export interface ITodo {
    id: number;
    completed: boolean;
    title: string;
}
export interface TodoListProps {
    items: ITodo[];

}
