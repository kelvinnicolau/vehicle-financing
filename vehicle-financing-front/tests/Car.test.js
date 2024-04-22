// Car.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Car from '../components/Car';

describe('Car Component', () => {
    test('should display car details correctly', () => {
        // Mock car data
        const carData = {
            id: 1,
            modelo: 'Carro Modelo',
            descricao: 'Descrição do carro',
            ano: 2022,
            quilometragem: '10.000 km',
            tipo_cambio: 'Automático',
            valor: 50000,
            cidade: 'Cidade',
            foto: 'imagem-do-carro.jpg'
        };

        // Renderizar o componente com os dados do carro
        render(<Car carroId={carData.id} valorFinanciamento={5000} />);

        // Verificar se os detalhes do carro são exibidos corretamente
        expect(screen.getByText(carData.modelo)).toBeInTheDocument();
        expect(screen.getByText(carData.descricao)).toBeInTheDocument();
        expect(screen.getByText(carData.ano.toString())).toBeInTheDocument();
        expect(screen.getByText(carData.quilometragem)).toBeInTheDocument();
        expect(screen.getByText(carData.tipo_cambio)).toBeInTheDocument();
        expect(screen.getByText(carData.cidade)).toBeInTheDocument();
        expect(screen.getByText(/R\$50,000.00/i)).toBeInTheDocument(); // Formatação do valor
        expect(screen.getByAltText('Imagem do Carro')).toBeInTheDocument(); // Verifica se a imagem está presente
    });
});
