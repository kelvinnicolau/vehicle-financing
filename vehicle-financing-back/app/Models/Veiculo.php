<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Veiculo extends Model
{
    protected $fillable = [
        'foto', 'cidade', 'marca', 'modelo', 'descricao', 'ano', 'quilometragem', 'tipo_cambio', 'telefone_loja', 'valor',
    ];
}
