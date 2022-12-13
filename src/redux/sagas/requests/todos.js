import axios from 'axios';

export const fetchTodos = async () => {
    try {
        const data = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return data;
    } catch (error) {
        throw error
    }
}