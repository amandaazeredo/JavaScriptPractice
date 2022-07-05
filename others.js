//Arrays
let familia = [20, 13, 45, 44] //podem ser declarados todos os tipos de variaveis
console.log(familia[0])

//Operador ternário
let pontos = 100;
let tipo = pontos >= 100 ? 'premium' : 'comum';
console.log(tipo);

//Valores considerados Falsy: undefined, null, 0, false, ' ', NaN(not a number)
//Valores condiderados Truthy: todos os outros
let corPersonalizada = '';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPadrao);