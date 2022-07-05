console.log("hello world")
let idade = 20; //Se usa let para valores que podem mudar
const cpf = 12345678901; //Se usa constante sempre que o valor for fixo
const nome = "Amanda"; //String (literal)
const rg = 1234; //number (literal)
let aprovada = true; //boolean
let sobrenome; //undefined: apenas let, const não pode ser undefined
let corFavorita = null; //usada para que seja definida mais tarde, apenas vazia por enquanto

console.log(idade, nome, cpf, rg, aprovada, sobrenome, corFavorita);

//criando um objeto
 let pessoa = {
     nome: "Amanda",
     idade: 20,
     sobrenome: "Azeredo",
     corFavorita: "Azul"
 };

 console.log(pessoa);
 