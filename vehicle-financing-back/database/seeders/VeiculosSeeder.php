<?php

namespace Database\Seeders;

use App\Models\Veiculo;
use Illuminate\Database\Seeder;

class VeiculosSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Veiculo::create([
            'foto' => 'caminho/para/a/foto.jpg',
            'cidade' => 'São Paulo',
            'marca' => 'Chevrolet',
            'modelo' => 'Onix',
            'descricao' => 'Veículo em ótimo estado de conservação.',
            'ano' => 2020,
            'quilometragem' => 15000,
            'tipo_cambio' => 'Automático',
            'telefone_loja' => '(11) 1234-5678',
            'valor' => 50000.00,
        ]);

        Veiculo::create([
            'foto' => 'caminho/para/a/foto2.jpg',
            'cidade' => 'Rio de Janeiro',
            'marca' => 'Volkswagen',
            'modelo' => 'Gol',
            'descricao' => 'Veículo econômico e de baixa manutenção.',
            'ano' => 2018,
            'quilometragem' => 20000,
            'tipo_cambio' => 'Manual',
            'telefone_loja' => '(21) 9876-5432',
            'valor' => 35000.00,
        ]);

        Veiculo::create([
            'foto' => 'caminho/para/a/foto3.jpg',
            'cidade' => 'Belo Horizonte',
            'marca' => 'Ford',
            'modelo' => 'Ka',
            'descricao' => 'Veículo compacto ideal para o trânsito urbano.',
            'ano' => 2019,
            'quilometragem' => 18000,
            'tipo_cambio' => 'Automático',
            'telefone_loja' => '(31) 4567-8901',
            'valor' => 40000.00,
        ]);
    }
}
