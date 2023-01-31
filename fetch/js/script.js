const cep = fetch('https://viacep.com.br/ws/24310340/json/');

cep.then(r => r.json())
.then(body => {
  console.log(body);
  const div = document.querySelector('.conteudo');
  div.innerText = body.localidade;
})