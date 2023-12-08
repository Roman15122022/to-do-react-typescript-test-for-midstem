import { useMutation, useQueryClient } from 'react-query';
import { createTodo } from '../services/todo-service';

const useCreateTodo = () => {
    const client = useQueryClient();

    const { mutate } = useMutation({
        mutationFn: createTodo,
        onSuccess: () => {
            client.invalidateQueries(['todos', 'all']);
        },
    });

    return { mutate };
};

export { useCreateTodo };
