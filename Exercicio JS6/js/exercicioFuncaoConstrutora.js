function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  this.andar = function() {
    console.log(nome + ' andou');
  }
}

const Joao = new Pessoa('João', 20);
const Maria = new Pessoa('Maria', 25);
const Bruno = new Pessoa('Bruno', 15);


console.log(Joao, Maria, Bruno);

function Dom(seletor){
  const elementList = document.querySelectorAll(seletor);
  this.elements = elementList;
  this.addClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.add(classe);
    });
  }
  this.removeClass = function(classe) {
    elementList.forEach((element) => {
      element.classList.remove(classe);
    });
  }
}

const ListaItens = new Dom('li');

ListaItens.addClass('ativo');





