import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export async function getVeiculos() {
    const response = await api.get('/veiculos');
    return response.data;
}

