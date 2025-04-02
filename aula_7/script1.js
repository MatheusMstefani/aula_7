// acessar informações do Document

document.write(`Olá mundo! <br>`);
document.write(window.document.charset + "<br>");
document.write(window.navigator.appname + "<br>");
document.write(window.document.URL+ "<br>");

// acessando o elementos HTML

document.getElementById(`Tit1`).innerText = "Exemplos DOM!";
document.getElementById(`Tit1`).style.color = "red";
document.querySelector("p").style.color = "white";
document.querySelector(".parah").style.background = "red";
document.querySelector("#msg").innerText = "Nova mensagem";

// criar novos elementos 

let novoparagrafo = document.createElement ("p")
novoparagrafo.innerText = "Esse e o novo Parágrafo!!";
document.body.appendChild(novoparagrafo);

// Remover Elementos

let elemento = document.getElementById(`Tit1`);
// elemento.remove(); comando para remover 
