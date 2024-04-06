<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVeiculosTable extends Migration
{
    public function up()
    {
        Schema::create('veiculos', function (Blueprint $table) {
            $table->id();
            $table->string('foto')->nullable();
            $table->string('cidade');
            $table->string('marca');
            $table->string('modelo');
            $table->text('descricao');
            $table->integer('ano');
            $table->integer('quilometragem');
            $table->string('tipo_cambio');
            $table->string('telefone_loja');
            $table->decimal('valor', 10, 2);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('veiculos');
    }
}

