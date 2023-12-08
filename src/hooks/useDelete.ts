import { useMutation, useQueryClient, UseMutationResult } from 'react-query';
import { deleteTodo } from '../services/todo-service';

interface TodoMutateProps {
    id: number;
}

const useDelete = (): UseMutationResult<any, unknown, TodoMutateProps, unknown> => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: ({ id }: TodoMutateProps) => deleteTodo(id),
        onSuccess: () => client.invalidateQueries(['todos', 'all']),
    });
};

export { useDelete };
