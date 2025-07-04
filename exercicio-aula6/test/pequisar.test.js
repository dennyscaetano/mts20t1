const { describe } = require('mocha')
const { pesquisarPessoaPorCpf } = require('../src/pesquisar.js')
const  { strictEqual } = require('node:assert')

describe('Pesquisar', () => {
    it('Deve retornar o nome, cpf e frutas favoritas da Thais ao informar o cpf 00100100002', () => {
        // Arrange (Preparação)
        const cpfPesquisado = '00100100002'
        const nomeEsperado = 'Thais'
        const cpfEsperado = '00100100002'
        const primeiraFrutaEsperada = 'Maracujá'
        const segundaFrutaEsperada = 'Uva'
        const terceiraFrutaEsperada = 'Mamão'

        //Act (Ação)
        const pessoa = pesquisarPessoaPorCpf(cpfPesquisado)

        //Assert (Verificação ou Checagem)
        strictEqual(pessoa.nome, nomeEsperado)
        strictEqual(pessoa.cpf, cpfEsperado)
        strictEqual(pessoa.frutasFavoritas[0], primeiraFrutaEsperada)
        strictEqual(pessoa.frutasFavoritas[1], segundaFrutaEsperada)
        strictEqual(pessoa.frutasFavoritas[2], terceiraFrutaEsperada)
    })

    it('Deve retornar Pessoa não encontrada ao informar um cpf inexistente', () => {
        // Arrange (Preparação)
        const cpfPesquisado = '99999999999'
        const mensagemEsperada = 'CPF não encontrado'
        
        //Act (Ação)
        const pessoa = pesquisarPessoaPorCpf(cpfPesquisado)

        //Assert (Verificação ou Checagem)
        strictEqual(pessoa, mensagemEsperada)
    })
})