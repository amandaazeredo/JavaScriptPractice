//Loop For
for(let i=0; i<=5; i++){
    console.log('Valores Impares de 1-5: ');
    if(i % 2 !== 0){
    console.log(i);
    }
 }

 //Loop While
 let i = 5;
 while(i >= 1){
   console.log("Valores Pares de 1-5: ");
   if(i % 2 == 0){
      console.log(i);
   }
   i--;
 }

 //Loop Do..While
 let j = 0;
 do{
   console.log("Iterando 10 vezes!",j);
   j++;
 }while (j < 10)

 //For..in
 const id = {
    nome: 'Amanda',
    idade: 20
 };
 for(let key in id){
    console.log(key);
 }

 //ou
 const cores = ['vermelho','azul','verde','amarelo'];
 for(let indice  in cores) {
    console.log(indice,cores[indice]);
 }

 //For..of
 for(let cor of cores){
   console.log(cor);
 }