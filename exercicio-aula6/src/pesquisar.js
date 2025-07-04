function pesquisarPessoaPorCpf(cpf) {
    const pessoas = [
        {
            nome: 'Dennys',
            cpf: '00000000000',
            frutasFavoritas: ['Banana','Maça','Uva']
        },
        {
            nome: 'Thais',
            cpf: '00100100000',
            frutasFavoritas: ['Pera','Abacaxi','Banana']
        },
        {
            nome: 'Vagner',
            cpf: '00100200000',
            frutasFavoritas: ['Manga','Banana']
        },
        {
            nome: 'Thais',
            cpf: '00100100002',
            frutasFavoritas: ['Maracujá','Uva','Mamão']
        },
        {
            nome: 'Míriam',
            cpf: '00100300000',
            frutasFavoritas: ['Manga','Melão']
        }
    ]

    for(let indice = 0; indice < pessoas.length; indice++) {
        if (pessoas[indice].cpf === cpf) {
            return pessoas[indice]
        }
    }

    return 'CPF não encontrado'
}

module.exports = {
    pesquisarPessoaPorCpf
}


