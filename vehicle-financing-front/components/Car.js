import React, { useEffect, useState } from "react";
import { getVeiculos } from '../services/api';

function Car({ carroId, valorFinanciamento }) {
    const [carro, setCarro] = useState(null);
    const [parcelas, setParcelas] = useState([]);

    const baseUrl = "http://localhost:8000";

    useEffect(() => {
        async function fetchCarro() {
            try {
                const veiculos = await getVeiculos();
                for (let i = 0; i < veiculos.length; i++) {
                    if (veiculos[i].id === parseInt(carroId)) {
                        setCarro(veiculos[i]);
                        break;
                    }
                }
            } catch (error) {
                console.error('Erro ao buscar detalhes do carro:', error);
            }
        }
        fetchCarro();
    }, [carroId]);

    useEffect(() => {
        if (carro && valorFinanciamento) {
            const valorCarro = parseFloat(carro.valor);
            const valorEntrada = parseFloat(valorFinanciamento);

            const parcelas6 = calcularParcelas(valorCarro, valorEntrada, 6, 12.47);
            const parcelas12 = calcularParcelas(valorCarro, valorEntrada, 12, 15.56);
            const parcelas48 = calcularParcelas(valorCarro, valorEntrada, 48, 18.69);

            setParcelas([
                { meses: 6, valor: parcelas6 },
                { meses: 12, valor: parcelas12 },
                { meses: 48, valor: parcelas48 }
            ]);
        }
    }, [carro, valorFinanciamento]);

    const calcularParcelas = (valorCarro, valorEntrada, numParcelas, crescimentoPercentual) => {
        const valorTotalComPorcentagem = valorCarro * (1 + crescimentoPercentual / 100);
        const valorFinanciado = valorTotalComPorcentagem - valorEntrada;
        return valorFinanciado / numParcelas;
    };

    if (!carro) {
        return <p>Carregando detalhes do carro...</p>;
    }

    return (
        <div className="flex-wrap md:flex">
            <div className="card w-30 md:w-30 md:mr-4 bg-gray-50 shadow-md">
                <img className="object-cover" src={`${baseUrl}/${carro.foto}`} alt="Imagem do Carro" />
                <span className="local">
                    <img className="mr-1" src="/images/localizacao.svg" alt="Ícone Localização" />
                    {carro.cidade}
                </span>
                <div className="p-4">
                    <h3 className="text-gray-700 font-bold text-2xl font-roboto">{carro.modelo}</h3>
                    <p className="text-gray-700 font-normal text-sm font-roboto mb-2">{carro.descricao}</p>
                    <div className="flex pb-5">
                        <div className="flex justify-center items-center">
                            <img className="Calendario" src="/images/icon-ano.svg" alt="Ícone Ano" />
                            <p className="ml-1">{carro.ano}</p>
                        </div>
                        <div className="flex justify-center items-center ml-3">
                            <img className="Km" src="/images/icon-km.svg" alt="Ícone KM" />
                            <p className="ml-1">{carro.quilometragem}</p>
                        </div>
                        <div className="flex justify-center items-center ml-3">
                            <img className="Calendario" src="/images/icon-cambio.svg" alt="Ícone Câmbio" />
                            <p className="ml-1">{carro.tipo_cambio}</p>
                        </div>
                    </div>
                    <h4 className="text-gray-700 font-bold text-xl font-roboto">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(carro.valor)}
                    </h4>
                </div>
            </div>
            <div className="w-full md:flex-1 mb-4 md:mb-0 bg-gray-50 p-8 shadow-md">
                <h2 className="text-gray-700 font-bold text-2xl font-roboto mb-3">Valores simulados para você</h2>
                {parcelas.map((parcela, index) => (
                    <div key={index}>
                        <div className="bg-white shadow-md mt-4 rounded-lg p-4">
                            <p className="text-gray-700 font-bold text-2xl font-roboto">{parcela.meses}X</p>
                            <span className="text-purple-700 font-bold text-2xl font-roboto">
                                {parcela.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                            </span>
                        </div>
                    </div>
                ))}
                <div className="flex flex-col md:flex-row items-center mt-6">
                    <a className="flex items-center justify-center bg-green-500 text-white font-roboto font-semibold text-lg px-6 py-3 rounded-full focus:outline-none" href="https://api.whatsapp.com/send?phone=5555999660677">
                        <img src="/images/whats.svg" alt="Ícone" className="mr-4" />
                        Falar com consultor
                    </a>
                    <p className="text-gray-700 font-bold text-xl font-roboto ml-0 mt-3 md:mt-0 md:ml-6">(31) 3441-0240</p>
                </div>
            </div>
        </div>
    );
};

export default Car;
