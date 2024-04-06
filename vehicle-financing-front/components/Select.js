import { useEffect, useState } from "react";
import { getVeiculos } from '../services/api';

function Select() {
    const [veiculos, setVeiculos] = useState([]);

    useEffect(() => {
        async function fetchVeiculos() {
            try {
                const data = await getVeiculos();
                setVeiculos(data); // Supondo que a resposta seja uma lista de veículos
            } catch (error) {
                console.error('Erro ao buscar veículos:', error);
            }
        }

        fetchVeiculos();
    }, []);

    return (
        <select className="w-72 h-12 bg-white border border-solid border-gray-300 rounded-md p-2 mb-4">
            <option value="">Todos os veículos</option>
            {veiculos.map(veiculo => (
                <option key={veiculo.id} value={veiculo.id}>{veiculo.nome}</option>
            ))}
        </select>
    );
};

export default Select;