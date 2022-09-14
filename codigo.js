let readlineSync = require("readline-sync");

let a = readlineSync.question("Digite o primeiro valor: ");
let b = readlineSync.question("Digite o segundo valor: ");

function adicao (a, b) {
    return parseInt(a) + parseInt(b);
}
console.log(adicao(a,b));

function subtracao (a, b) {
    return a - b;
}
console.log(subtracao(a,b));

function multiplicacao (a, b) {
    return a * b;
}
console.log(multiplicacao(a, b));

function divisao (a, b) {
    return a / b;
}
console.log(divisao(a,b));

var resultado = (a, b);