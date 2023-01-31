var Delson = {
  nome: 'Delson',
  sobrenome: 'Sousa',
  nomeCompleto() {
    return `${this.nome} ${this.sobrenome}`
  }
}

console.log(Delson.nomeCompleto());


var carro = {
  preco: 1000, 
  portas: 4,
  marca: "Audi",
}

carro.preco = 3000;

console.log(carro.preco);

var cachorro = {
  raca: "Labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if(pessoa == "homem"){
      console.log('Cachorro Latiu');
    } else {
      console.log('Cachorro não Latiu');
    }
  }
}

console.log(cachorro.lateAoVerUmHomem)