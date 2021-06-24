const texto1 = "Olá, Mundo!";
const texto2 = 'Olá, Mundo!';
const senha  = "senhasupersegura123456!";
const stringDeNumeros = "34567";

const citacao = 'Meu nome é ' ;
const nome = "André."
console.log(citacao)

//concatenação (+)

console.log(citacao + nome);


//template string ou template literal


// UNICODE

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//COMPARAÇÃO

const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true


//contagem de caracteres

const senha = "minhaSenha123"
console.log(senha.length) // 13 caracteres

