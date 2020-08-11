// aula de objetos

/* criado um objeto: 
Exemplo: 
const aluno = {
    nome: 'Luis',
    idade: 20
}

console.log(aluno.nome) // acessa no objeto aluno a propriedade nome e imprime

const aluno = {
    nome: 'Luis',
    idade: 20
}

console.log(`Nome: ${aluno.nome}\nIdade: ${aluno.idade}`)
*/

/* ARRAYS
para declarar um array: 

const alunos = [
    {
        nome: 'Luis',
        idade: 20
    }
]

const pessoas = [
    {
        nome: 'Luis',
        idade: 20
    },
    {
        nome: 'Diego',
        idade: 25
    },
    {
        nome: 'João',
        idade: 32
    },
    {
        nome: 'Felipe',
        idade: 24
    }
]

console.log(typeof pessoas);

for(var i = 0; i < 4; i++){
    console.log(`\nNome: ${pessoas[i].nome}. \nIdade: ${pessoas[i].idade}.`);
}
*/

// DESAFIO

/*Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

Nome: Rocketseat

Cor: Roxo

Foco: Programação

Endereço:

Rua: Rua Guilherme Gembala
Número: 260

Saída: A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260
*/

const empresa = {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
        rua: 'Guilherme Gembala',
        numero: 260
    }
}

console.log(`A empresa ${empresa.nome} está localizada em Rua ${empresa.endereco.rua}, ${empresa.endereco.numero}`)

// Segundo desafio
// Exemplo de saída: O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop
const programador = [
    {
        nome: 'Luis',
        idade: 20,
        tecnologias: {
            nome: 'C++',
            especialidade: 'Desktop'
        }
    }
]

console.log(`O usuário ${programador[0].nome} tem ${programador[0].idade} anos e usa a tecnologia ${programador[0].tecnologias.nome} com especialidade em ${programador[0].tecnologias.especialidade}`)
    