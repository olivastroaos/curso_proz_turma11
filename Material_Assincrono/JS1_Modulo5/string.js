let nome = "Rafael";
let sobrenome = "Pereira"

let nomeCompleto = nome + sobrenome;
console.log(nomeCompleto)

let nomeCompleto2 ="Meu nome é: "+nome+" "+sobrenome;
console.log(nomeCompleto2)

//let templateString = `Meu nome é: ${nome} ${sobrenome}`
//console.log(templateString)

let templateString = `Meu nome é ${nome},
meu sobrenome é ${sobrenome}`
console.log(templateString)

let numA = 5;
let numB = 9;
let soma = `A soma de ${numA} e ${numB} é ${numA + numB}`
console.log(soma);
