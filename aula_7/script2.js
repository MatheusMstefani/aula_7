let a = document.querySelector("#area");
a.addEventListener("click" , clicar );
a.addEventListener("mouseenter" , entrar);
a.addEventListener("mouseout" , sair);

function clicar (){
    a.innerText = "Voce clicou!!"
    a.style.background = "green"

}
function entrar (){
    a.innerText =  "Passou o mouse por cima!!"
    a.style.background = "blue"
}
function sair(){
    a.innerText ="Voce Tirou o mouse!!"
    a.style.background = "purple"
}