//If..Else
let hora = 19;
if(hora < 12 && hora > 6) {
   console.log("Bom dia!");
} else if (hora >= 12 && hora < 18) {
   console.log("Boa tarde!");
} else {
   console.log("boa noite")
}

//Switch..Case
let permissao;
permissao = "comum";
switch (permissao){
   case 'comum':
       console.log("Usuário comum.");
       break;

   case 'gerente':
       console.log("Usuário gerente.");
       break;

   case 'diretor':
       console.log("Usuário diretor.");

   default:
       console.log("Usuário não reconhecido.")
}
