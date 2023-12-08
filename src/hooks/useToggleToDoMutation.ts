import {useMutation, useQueryClient, UseMutationResult} from 'react-query';
import {toggleTodoStatus} from '../services/todo-service';

interface TodoMutateProps {
    id: number;
    completed: boolean;
}

const useToggleTodoMutation = (): UseMutationResult<any, unknown, TodoMutateProps> => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: ({id, completed}: TodoMutateProps) => toggleTodoStatus(id, !completed),
        onSuccess: () => client.invalidateQueries(['todos']),
    });
};

export {useToggleTodoMutation};
