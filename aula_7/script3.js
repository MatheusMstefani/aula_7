let bt = document.querySelector("#btn");
let result = document.querySelector("#resul");

bt.addEventListener("click" , somar);

function somar(){

    let n1 = Number (document.querySelector ("#nr1").value);
    let n2 = Number (document.querySelector ("#nr2").value);
    let soma = n1 + n2;
    result.innerText = `A soma Entre ${n1} + ${n2} = ${soma}`;

}
