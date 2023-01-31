var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

console.log(brasilCampeao);

brasilCampeao.forEach(function(ano) {
  console.log(`o Brasil ganhou a copa de ${ano}`);
});

var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância'];

for(let fruta = 0; fruta < frutas.length; fruta++) {
  console.log(frutas[fruta]);

  if(frutas[fruta] == "Pera") {
    break;
  }
}

var ultimaFruta = frutas[frutas.length - 1];

console.log(ultimaFruta);