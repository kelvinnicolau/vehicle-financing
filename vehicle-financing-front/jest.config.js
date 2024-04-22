module.exports = {
    // Diretórios onde estão localizados os arquivos de teste
    roots: ['<rootDir>/tests'],

    // Extensões dos arquivos de teste
    testMatch: ['**/*.test.js'],

    // Configuração do ambiente de execução dos testes
    testEnvironment: 'jsdom',

    // Configuração opcional para transformar arquivos antes de executar os testes
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
    },

    // Configuração opcional para cobertura de código
    coverageReporters: ['json', 'lcov', 'text', 'clover'],
};