function verificarValor(valor) {
  if (valor) {
    console.log('valor verdadeiro');
  } else {
    console.log ('Valor Falso');
  }
}

verificarValor()


function perimetro(lado) {
const somaLado = lado + lado + lado + lado;
 console.log(somaLado);
}

perimetro(16)


function nomeCompleto(nome, sobrenome) {
 console.log(`Seu nome completo é: ${nome} ${sobrenome}`);
}

nomeCompleto('Delson', 'Sousa')

function par(num) {
  if(num % 2 == 0 ) {
    console.log('é par');
  } else {
    console.log('é impar');
  }
}

par(2)


function tipoDado(dado) {
  console.log(typeof dado);
}

tipoDado('oi')

function scrollNome(nomeCompleto) {
  nomeCompleto = "Delson Sousa"
  console.log(`Seu nome completo é: ${nomeCompleto}`);
}

addEventListener('scroll', scrollNome);

var totalPaises = 193;
function precisoVisitar(paisesVisitados) {
  
 console.log(`Ainda faltam ${totalPaises - paisesVisitados} países para visitar`);
}
function jaVisitei(paisesVisitados) {
  console.log(`Já visittei ${paisesVisitados} do total de ${totalPaises} países`);
}

precisoVisitar(20)
jaVisitei(20)