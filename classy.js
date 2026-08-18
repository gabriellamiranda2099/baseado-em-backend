class Produto{
    constructor(estoque, quantidade, valor, funcao, modelo){
        this.estoque = estoque;
        this.quantidade = quantidade;
        this.valor = valor;
        this.funcao = funcao;
        this.modelo = modelo;
    }

    Vender() {
        console.log(`O produto ${this.modelo}, custa ${this.valor}, e possui ${this.estoque} disponíveis`);
    }

    RealizarVenda(disponivel) {
    }
}

class Reposicao extends Produto {
    constructor(estoque, quantidade, valor, funcao, modelo){
        super(estoque, quantidade, valor, funcao, modelo);
    }

    Disponibilidade() {
        console.log(`A disponibilidade do produto é ${this.estoque} unidades`);
    }
}
