//Divisível por 3 => Fizz
//Divisível por 5 => Buzz
//Divisível por 3 e 5 => FizzBuzz
//Não divisível por 3 ou 5 => retorna o valor

const resultado = fizzBuzz(11);
console.log(resultado);

function fizzBuzz(entrada){
    if(entrada % 3 === 0){
        return'Fizz';
    } else if(entrada % 5 === 0){
       return 'Buzz';
    } else if(entrada % 3 === 0 && entrada % 5 === 0){
        return'FizzBuzz';
    } else if (entrada % 5 ==! 0 && entrada % 3 ==! 0){
        return entrada;
    } else {
        return'Não é um número';
    }
}