import React, { useEffect, useState } from "react";
import { getVeiculos } from '../services/api';
import Car from './Car';

function ContainerSelect() {
    const [veiculos, setVeiculos] = useState([]);
    const [carroSelecionado, setCarroSelecionado] = useState(null);
    const [simularCarro, setSimularCarro] = useState(false);
    const [valorFinanciamento, setValorFinanciamento] = useState('');

    useEffect(() => {
        async function fetchVeiculos() {
            try {
                const data = await getVeiculos();
                setVeiculos(data);
            } catch (error) {
                console.error('Erro ao buscar veículos:', error);
            }
        }

        fetchVeiculos();
    }, []);

    const handleCarSelect = (event) => {
        const selectedCarId = event.target.value;
        setCarroSelecionado(selectedCarId);
    };

    const handleValorFinanciamentoChange = (event) => {
        setValorFinanciamento(event.target.value);
    };
    console.log(veiculos);
    const handleSimulateClick = () => {
        if (carroSelecionado && valorFinanciamento) {
            setSimularCarro(true);
        } else {
            alert('Por favor, selecione um veículo e insira o valor de entrada.');
        }
    };

    return (
        <>
            <div className="bg-gray-50 p-8 mt-8 mb-14 shadow-md">
                <p className="font-roboto font-semibold text-base leading-7 text-gray-700">Selecione um veiculo que deseja simular o financiamento</p>
                <div className="mt-4">
                    <select className="w-72 h-12 bg-white border border-solid border-gray-300 rounded-md p-2 mb-4" onChange={handleCarSelect}>
                        <option value="">Todos os veículos</option>
                        {veiculos.map(veiculo => (
                            <option key={veiculo.id} value={veiculo.id}>{veiculo.modelo}</option>
                        ))}
                    </select>
                    {carroSelecionado && (
                        <input
                            type="text"
                            value={valorFinanciamento}
                            onChange={handleValorFinanciamentoChange}
                            placeholder="Valor de entrada"
                            className="w-72 h-12 bg-white border border-solid border-gray-300 rounded-md p-2 mb-4 ml-0 md:ml-6"
                        />
                    )}
                    <button onClick={handleSimulateClick} className="text-white font-roboto font-bold bg-purple-600 rounded-full w-48 px-8 py-2 mx-2 ml-10">Simular</button>
                </div>
            </div>

            {simularCarro && <Car carroId={carroSelecionado} valorFinanciamento={valorFinanciamento} />}
        </>
    );
};

export default ContainerSelect;

