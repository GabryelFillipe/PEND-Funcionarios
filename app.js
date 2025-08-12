'use strict'

import funcionarios from "./funcionarios.json" with{type: "json"}

function criarFuncionario(funcionarios){

    const containerFuncionairos = document.getElementById('funcionarios')
    const card = document.createElement('div')
    
    const imagemFuncionario = document.createElement('img')
    imagemFuncionario.src = funcionarios.imagem

    const nomeFuncionario = document.createElement('p')
    nomeFuncionario.textContent = funcionarios.nome

    const cargoFuncionario = document.createElement('span')
    cargoFuncionario.textContent = funcionarios.cargo

    containerFuncionairos.appendChild(card)
    card.appendChild(imagemFuncionario)
    card.appendChild(nomeFuncionario)
    card.appendChild(cargoFuncionario)
}
function carregarFuncionarios(){
    funcionarios.forEach(criarFuncionario)
}

carregarFuncionarios()