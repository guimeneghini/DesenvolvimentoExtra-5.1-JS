let titulo = document.getElementById("titulo");
titulo.innerText = 'DesenvolvimentoExtra 5.1';

let ref = document.querySelector("a");
ref.innerText = 'Link para o site da Proz'

let desordenada = document.getElementById("lista-desordenada");
desordenada.innerHTML = `
<li>Elemento 1</li>
<li>Elemento 2</li>
<li>Elemento 3</li>
`

let ordenada = document.getElementById("lista-ordenada");
ordenada.innerHTML = `
<li> <a href="https://banco.bradesco/html/classic/index.shtm" target="_blank"> Site da Bradesco </a> </li>
<li> <a href="https://inter.co/" target="_blank"> Site do Inter </a> </li>
<li> <a href="https://www.itau.com.br/" target="_blank"> Site do Itaú </a> </li>
`