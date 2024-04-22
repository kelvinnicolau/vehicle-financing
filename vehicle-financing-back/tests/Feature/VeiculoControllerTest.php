<?php

namespace Tests\Feature;

use App\Models\Veiculo;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class VeiculoControllerTest extends TestCase
{
    public function it_can_get_all_veiculos()
    {
        // Cria alguns veículos de exemplo no banco de dados
        Veiculo::factory()->count(5)->create();

        // Chama o endpoint da API que retorna todos os veículos
        $response = $this->get('/api/veiculos');

        // Verifica se a resposta foi bem sucedida (status 200)
        $response->assertStatus(200);

        // Verifica se o número correto de veículos foi retornado
        $response->assertJsonCount(5);
    }

}
