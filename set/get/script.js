const button = {
  get tamanho() {
    return this._numero;
  },
  set tamanho(numero) {
    this._numero = numero
  }
}

const frutas = {
  lista: [],
  set nova(fruta) {
    this.lista.push(fruta);
  }
}

frutas.nova = 'Banana';
frutas.nova = 'Morango';
console.log(frutas.lista);


class Button {
  constructor(text, background, color) {
    this.text = text;
    this.background = background;
    this.color = color;
  }
  get element() {
    const type = this._elementType || 'button';
    const buttonElement = document.createElement(type);
    buttonElement.innerText = this.text;
    buttonElement.style.background = this.background;
    buttonElement.style.color = this.color;
    return buttonElement;
  }
  set element(type) {
    this._elementType = type
  }
}

const blueButton = new Button('Comprar', 'blue', 'white');