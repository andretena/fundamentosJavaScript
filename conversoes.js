// conversão implicita.

const numero = 456;
const numeroString = "456";

console.log(numero == numeroString);

console.log(numero + numeroString);

//conversão explicita.

//Number
console.log(numero + Number(numeroString));

//String
let telefone = 12341234;
console.log("O telefone é " + String(telefone)); 