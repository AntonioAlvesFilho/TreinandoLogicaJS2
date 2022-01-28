let num = 10 // [ ] Faça um programa que compare um número com 10 e imprime na tela "o número é maior, o número é menor o número é igual"
if(num <10){
    console.log('O numero é menor que 10')
}

    else if(num >10) {
    console.log('O numero é maior que 10')
}
    else {
    console.log('O numero é igual a 10')
}


//

const randomPerson = {  //[ ] Faça um programa que verifica se uma pessoa é brasileira ou não. // DEVE SER UM OBJETO
    ethnicity:"brazilian",
}

if (randomPerson.ethnicity === "brazilian"){
    console.log("This person is Brazilian")
}
else {
    console.log("This person is not Brazilian")
}


//

let ganhador = Math.floor((Math.random() * 10) + 1) //[ ] Faça um programa que gere um número aleatório entre 1 e 10, esse número é o número 'ganhador'. Então ele também irá gerar um número aleatório entre 1 e 10, e verifica se a pessoa ganhou ou não. Em caso de ter ganhado, mostra o prêmio, se não ganhou, mostra outra mensagem.
console.log(ganhador)

let recebido = Math.floor((Math.random() * 10) + 1)
console.log(recebido)

if (ganhador === recebido){
    console.log(`Numero recebido foi:${recebido} e o numero ganhador foi:${ganhador}, parabens voce ganhou o sorteio `)
}
else{
    console.log(`Numero recebido foi:${recebido} e o numero ganhador foi:${ganhador}, nao foi dessa vez, mas continue tentando ta? valeu `)
}


//

let number1 = Math.floor((Math.random() * 100) + 1)//[ ] Faça um programa que receba 3 números inteiros, e deve imprimir, qual é o maior, qual é o menor.
console.log(`[ ${number1}`)
let number2 = Math.floor((Math.random() * 100) + 1)
console.log(` ${number2}`)
let number3 = Math.floor((Math.random() * 100) + 1)
console.log(` ${number3}`)


if (number1 > number2 && number2 > number3) {
    console.log(`number ${number1} is bigger than ${number2} which is bigger than ${number3}]`)
}
else if (number2 > number1 && number1> number3) {
    console.log(`number ${number2} is bigger than ${number1} which is bigger than ${number3}]`)
}
else if (number3 > number2 && number2> number1) {
    console.log(`number ${number3} is bigger than ${number2} which is bigger than ${number1}]`)
}
else if (number1 > number3 && number3> number2) {
    console.log(`number ${number1} is bigger than ${number3} which is bigger than ${number2}]`)
}
else if (number2 > number3 && number3> number1) {
    console.log(`number ${number2} is bigger than ${number3} which is bigger than ${number1}]`)
}
else if (number3 > number1 && number1 > number2) {
    console.log(`number ${number3} is bigger than ${number1} which is bigger than ${number2}]`)
}
else if (number1 === number2 || number1 === number3 || number2 === number3 || number1 === number2 === number3) {
    console.log('equal numbers, cancelling count]')
}


//

const data = [ //[ ] Crie 5 objetos nesse formato. Ao rodar o programa, deve imprimir se a pessoa é aprovada ou não no processo ,a pessoa deve ser maior de idade e brasileira para ser aprovada.
{
    name: "antonio",
    age: 20,
    sex: "male",
    profission: "dev",
    nationality: "brasileiro",
},
{
    name: "diogo",
    age: 18,
    sex: "male",
    profission: "programmer",
    nationality: "canadian",
}, 
{
    name: "ingrid",
    age: 22,
    sex: "female",
    profission: "teacher",
    nationality: "brasileiro",
}, 
{
    name: "rodrigo",
    age: 17,
    sex: "male",
    profission: "entrepreneur",
    nationality: "brasileiro",
}, 
{
    name: "guilherme",
    age: 16,
    sex: "male",
    profission: "bussnesman",
    nationality: "italian ",
}
]

const datas = (data) => {
    for (let i = 0; i < data.length; i++) {
        let nationality = data[i].nationality
        let age = data[i].age

        if (nationality == "brasileiro" && age >= 18) {
            console.log(`${data[i].name} Aproved`)
        }
        else {
            console.log(`${data[i].name} Reproved`)
        
        }
    }
}

datas(data)




//

let numero = Math.floor(Math.random() * 11) // [ ] Faça um programa onde os jurados vão dar a explicação para cada nota dada. São permitidas notas de 0 a 10. Cada nota deve conter uma mensagem diferente.

if (numero == 0){
    console.log("desempenho lástimavel")
}
else if (numero == 1){
    console.log("desempenho horrível")
}
else if (numero == 2){
    console.log("desempenho bem ruim")
}
else if (numero == 3){
    console.log("desempenho ruim")
}
else if (numero == 4){
    console.log("desempenho abaixo da médial")
}
else if (numero == 5){
    console.log("desempenho mediano")
}
else if (numero == 6){
    console.log("desempenho acima da média")
}
else if (numero == 7){
    console.log("desempenho bom")
}
else if (numero == 8){
    console.log("desempenho muito bom")
}
else if (numero == 9){
    console.log("desempenho excelente")
}
else if (numero == 10){
    console.log("desempenho perfeito")
}


//

let n = Math.floor(Math.random() * 1000)//[ ] Faça um programa onde leia um numero e diga se ele é par ou impar.
if (n % 2 == 0){
    console.log("O número i é par, pois o resto da divisão por dois é igual a zero")
}
else {
    console.log("Existe resto na divisão por dois, portando o número i é ímpar")
}


//

let n1 = 3 //[ ] Faça um programa onde leia um número e diga se ele é: - ímpar, - par, - é um número primo e impar, - é par e divisível por 5.
let numeroPrimoAte = 0

for (let i1 =0; i1 <= 100; i1++){
        if ( n1 % i1 == 0) {
        numeroPrimoAte = numeroPrimoAte +1
}
}
if (numeroPrimoAte == 2 && n1 % 2 ==1 ) {
    console.log(`o numero ${n1} é primo e impar`)
}

else if(n1 % 2 ==0 && n1 % 5 == 0) {
    console.log("numero par e divisivel por 5")
}
else if(n1 % 2 ==0){
    console.log("numero par")
}
else if(n1 % 2 ==1) {
    console.log("numero impar")
}


//

let rando1 = Math.floor((Math.random() * 100) + 1)// [ ] Faça um programa onde ele leia 4 números. Em cada caso, ele deve retornar a mensagem condizente: - Todos os números são impares => TODOS OS NÚMEROS SÃO IMPARES - Todos os números são pares => TODOS OS NÚMEROS SÃO PARES. Em caso negativo dos casos a cima, colocar uma mensagem => Há números pares e ímpares.
console.log(rando1)
let rando2 = Math.floor((Math.random() * 100) + 1)
console.log(rando2)
let rando3 = Math.floor((Math.random() * 100) + 1)
console.log(rando3)
let rando4 = Math.floor((Math.random() * 100) + 1)
console.log(rando4)
if (rando1 % 2 == 0 && rando2 % 2 == 0 && rando3 % 2 == 0 && rando4 % 2 == 0){
    console.log("todos os numeros são pares")
}
else if (rando1 % 2 == 1 && rando2 % 2 == 1 && rando3 % 2 == 1 && rando4 % 2 == 1){
    console.log("todos os numeros são impares")
}
else {
    console.log("todos os numeros são pares e impares")
}

//