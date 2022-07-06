let valorMaior = maior(876, 11111);
console.log(valorMaior);

function maior(num1, num2){
    if(num1 > num2){
        console.log("Num1 é maior");
        return num1;
} else { 
        console.log("Num2 é maior");
        return num2;
    }
}