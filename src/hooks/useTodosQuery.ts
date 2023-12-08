import {TodoState} from "../types/types-todo";
import {useQuery} from "react-query";
import {fetchTodos} from "../services/todo-service";

const useTodosQuery = (state: TodoState) => {

    return useQuery({
        queryFn: () => fetchTodos(state),
        queryKey: ['todos', state],
        staleTime: 1000 * 5,
    });
};

export { useTodosQuery };
