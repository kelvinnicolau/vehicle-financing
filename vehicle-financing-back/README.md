# Vehicle Financing Backend

Este é o back-end do projeto de financiamento de veículos. Foi desenvolvido em Laravel e fornece uma API para interagir com os dados dos veículos.

## Pré-requisitos

- PHP >= 7.4
- Composer
- Docker

## Instalação

1. Clone este repositório em sua máquina local:

    ```bash
    git clone https://github.com/kelvinnicolau/vehicle-financing.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd vehicle-financing-back
    ```

3. Instale as dependências do Composer:

    ```bash
    composer install
    ```

4. Copie o arquivo de exemplo `.env.example` e renomeie para `.env`:

    ```bash
    cp .env.example .env
    ```

5. Configure as variáveis de ambiente no arquivo `.env` conforme necessário, especialmente as relacionadas ao banco de dados.

6. Inicie os contêineres Docker para o PostgreSQL e o serviço do backend:

    ```bash
    docker-compose up -d
    ```

7. Execute as migrações do banco de dados para criar as tabelas necessárias:

    ```bash
    php artisan migrate
    ```

8. (Opcional) Se desejar, popule o banco de dados com dados de exemplo usando as seeders:

    ```bash
    php artisan db:seed
    ```

## Executando o Servidor

Para iniciar o servidor backend, execute o seguinte comando:

```bash
php artisan serve
```

O servidor estará acessível em `http://localhost:8000`.

## Executando em Outras Máquinas

Para executar este backend em outras máquinas, siga as etapas de instalação descritas acima e certifique-se de que as configurações de banco de dados no arquivo `.env` estão corretas para a máquina em que está sendo executado. Além disso, verifique se o Docker está instalado e configurado corretamente na máquina em questão.
