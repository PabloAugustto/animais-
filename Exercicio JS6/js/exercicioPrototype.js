function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.nomeCompleto = function() {
  return `Seu nome completo é: ${this.nome} ${this.sobrenome} e você tem ${this.idade} anos.`
}

const Delson = new Pessoa('Delson', 'Sousa', 28);

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);


const li = document.querySelector('li');
li; // HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolean
li.offsetLeft; // Number
li.click(); // Undefined

li.hidden.constructot.name; //String