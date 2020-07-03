/*//Variáveis
var nome = "Ricardo Mariano";
var idade = 36;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo";

//alert(nome + " tem " + idade + " anos.");
//alert(idade + idade2);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));//muda elemento de uma variável
console.log(frase.toUpperCase());//define todas as letras em caixa alta
console.log(frase.toLowerCase());// define todas as letras em caixa baixa

/************************************************ */
/*
//array
var lista = ["Maçã", "Pêra", "Laranja"];

console.log(lista); //imprime lista
console.log(lista.length); //imprime quantidade de elementos detro do array
console.log(lista[0]);//imprime o 1º item da lista
lista.push("Uva");//adiciona um item na lista
//lista.pop();//exclui o ultimo item da lista
console.log(lista);
console.log(lista.toString());//transforma o elemento em string
console.log(lista.join(" | ")); //adiciona um separador
//console.log(lista.reverse());//inverte os elementos da lista
*/
/***********************************************************/
/*
//Dicionários

var fruta = {nome: "Maçã", cor:"Vermelho"};

console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);

var frutas = [
    {nome: "Maçã", cor:"Vermelho"},
    {nome: "Uva", cor:"Roxo"},
    {nome: "Limão", cor:"Verde"},
];

console.log(frutas);
console.log(frutas[1].nome)
*/
/***********************************************/
//CONDICIONAIS
/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/
/********************************* */
/*Laços de repetição While
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};
*/

/*Laços de repetição FOR
var cont;
for (count = 0; count <= 5; count++){
    console.log(count);
}
*/

/*Date*/
var data = new Date();
console.log("Ano " + data.getFullYear()); //retorna o ano
console.log("Mês " + (data.getMonth()+1));//retorna o mês a partir do 0 (zero) então somar + 1
console.log("Dia " + data.getDay()); //retorna o dia
console.log("Hora " + data.getHours());//retorna as horas
console.log("Minuto " + data.getMinutes());//retorna os minutos

