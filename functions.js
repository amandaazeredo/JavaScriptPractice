 //Functions sem parametros
 let corSite = "azul";
 function mudarCor(){
    corSite = ""
 };
 console.log(corSite); //azul
 mudarCor(); //chama função
 console.log(corSite); //agora a cor é null

 //Functions com parametros
 let corDeTema = "padrao";
 function mudarTema(tema, tonalidade){
    corDeTema = tema + ' ' + tonalidade;
 };
 console.log(corDeTema);
 mudarTema("dracula","dark");
 console.log(corDeTema);

 //Função que realiza tarefa e não tem retorno
function escreverNome(){
    console.log(nome);
};
escreverNome();

 //Fução com retorno
 function soma(valor1, valor2){
    return valor1 + valor2;
 };
 let resultado = soma(5,5);
 console.log(resultado);