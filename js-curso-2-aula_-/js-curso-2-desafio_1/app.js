let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do desafio";

function verificaConsole(){
    console.log("O botão foi clicado");
}

function verificaCidade(){
    let cidade = prompt("Escreva o nome de uma cidade do Brasil");
    alert(`Estive em ${cidade} e lembrei de você`);
}

function verificaAlerta(){
    alert("Eu amo JS");
}

function verificaSoma(){
    let numero1 = parseInt(prompt("Digite um número"));
    let numero2 = parseInt(prompt("Digite outro número"));
    let resultado = numero1 + numero2;
    console.log(`${resultado}`);
    alert(`A soma de ${numero1} com ${numero2} é ${resultado}`);
}

/* Desafios 2

//1
 function olaMundo(){
    console.log("Olá mundo");
}
olaMundo();

//2
function olaConsole(){
    let nome = prompt("Digite seu nome");
   console.log(`Olá, ${nome}!`);
}
olaConsole();

function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}!`);
  }
  
  exibirOlaNome("Raul");

//3
function dobroNumero() {
    let numero = parseInt(prompt("Digite um número"));
    let numeroDobrado = numero * 2;
    alert(`${numeroDobrado}`);
}
dobroNumero();

function calcularDobro(numero) {
    return numero * 2;
}  
let resultadoDobro = calcularDobro(5);
console.log(resultadoDobro);

//4
function media(x, y, z) {
    return (x + y + z)/3;    
}
let resultadoMedia = media(6, 7, 9);
console.log(resultadoMedia);

//5
function numeroMaior(a, b){
    if(a > b){
        return console.log(`${a} é maior`);
    }else{
        return console.log(`${b} é maior`);
    }
}
numeroMaior(12, 9);

function encontrarMaior(a, b) {
    return a > b ? a : b;
  }
  
  let maiorNumero = encontrarMaior(15, 9);
  console.log(maiorNumero);

//6 
function raizQuadrada(n) {
    return n * n;
}
let resultadoRaiz = raizQuadrada(7);
console.log(resultadoRaiz); */

/* Desafios 3

//1
function imc(altura, peso){
    return peso / (altura * altura);
}
let resultadoImc = imc(1.73, 110);
console.log(resultadoImc);

//2
function fatorial(numeroFatorial) {
}

//3
function cotacaoReal(valorDolar) {
    return valorDolar * 4.8; 
}
let resultadoCotacao = cotacaoReal(7.5);
console.log(resultadoCotacao);

//4
function areaPerimetro(alturaSala, larguraSala) {
    let area = alturaSala * larguraSala;
    let perimetro = 2 * (larguraSala * alturaSala);

    console.log(area);
    console.log(perimetro);
}
let alturaSala = 3; 
let larguraSala = 5;
areaPerimetro(alturaSala, larguraSala);

//5 
function areaPerimetroCircular(raio){
    let areaCircular = 3.14 * (raio * raio);
    let perimetroCircular = 2 * 3.14 * raio; 

    console.log(areaCircular);
    console.log(perimetroCircular);
}
let raio = 5
areaPerimetroCircular(raio);

//6
function tabuada(numeroTabuada) {

}
*/

//Desafios 4

//1
let listaGenerica = [];

//2
let linguagensDeProgramação = ["JavaScript", "C", "C++", "Kotlin", "Python"];

//3
linguagensDeProgramação.push("Java", "Ruby", "GoLang");

//4
console.log(linguagensDeProgramação);

//5 
function arrayInverso(){

}

//6
