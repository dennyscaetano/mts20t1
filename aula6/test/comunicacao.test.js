const common = require('mocha/lib/interfaces/common')
const { linguagemDosGatosECachorros } = require('../src/comunicacao.js')
const { strictEqual } = require('node:assert')

describe('Comunicação', () => {
    it('Quando informar chachorro deve retornar au au', () => {
        // Arrange (Preparação)
        const animal = 'cachorro'
        //Act (Ação)
        const comunicacao = linguagemDosGatosECachorros(animal)
        //Assert (Verificação ou Checagem)
        strictEqual(comunicacao,  'au au')
    })
    it('Quando informar gato deve retornar miau', () => {
        // Arrange (Preparação)
        const animal = 'gato'
        //Act (Ação)
        const comunicacao = linguagemDosGatosECachorros(animal)
        //Assert (Verificação ou Checagem)
        strictEqual(comunicacao,  'miau')
    })
    it('Quando informar papagaio deve retornar Informe gato ou cachorro', () => {
        // Arrange (Preparação)
        const animal = 'papagaio'
        //Act (Ação)
        const comunicacao = linguagemDosGatosECachorros(animal)
        //Assert (Verificação ou Checagem)
        strictEqual(comunicacao,  'Informe gato ou cachorro')
    })
})