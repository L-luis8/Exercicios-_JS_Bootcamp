//console.log(typeof variavel) typeof serve p saber o tipo da variavel
/*
============
 === igual e do mesmo tipo;
 !== DIferente, inclusive do tipo;
============
*/

// calculo IMC javascript

/*const nome = 'Luis'
const peso = 80
const altura = 1.80
const sexo = 'Masculino'

const imc = peso / (altura * altura);

if(imc >= 30){
    console.log(`${nome}, você está acima do peso`)
}else if(imc < 29.9){
    console.log(`${nome}, você não está acima do peso`)
}*/ 

console.log('=========\nSegundo programa..\n=========');

// calculo aposentadoria
const nome = 'Luis'
const idade = 54
const sexo = 'M'
const contribuicao = 42

aposenta = (idade + contribuicao)

if(sexo === 'F' || sexo ==='f'){
    if(aposenta >= 85){
        console.log(`${nome}, você pode se aposentar!`)
    }else{
        console.log(`${nome}, você não pode se aposentar!`)
    }
}else if(sexo === 'M' || sexo === 'm'){
    if(aposenta >= 95){
        console.log(`${nome}, você pode se aposentar!`)
    }else{
        console.log(`${nome}, você não pode se aposentar!`)
    }
    // OBS mais tarde fazer uma função para evitar repetições de codigo
}