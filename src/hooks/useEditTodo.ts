import { useMutation, useQueryClient, UseMutationResult } from 'react-query';
import { updateTodoTitle } from '../services/todo-service';

interface EditTodoMutationProps {
    id: number;
    editedTitle: string;
}

const useEditTodoMutation = (): UseMutationResult<any, unknown, EditTodoMutationProps, unknown> => {
    const client = useQueryClient();

    return useMutation({
        mutationFn: ({ id, editedTitle }: EditTodoMutationProps) => updateTodoTitle(id, editedTitle),
        onSuccess: () => client.invalidateQueries(['todos', 'all']),
    });
};

export { useEditTodoMutation };
