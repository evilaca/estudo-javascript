function testeFinal(umaString, umNumero){

    let retorno;
 
    switch(umaString){

        case "mundojs":

            console.log("MundoJS");
 

            retorno = umNumero;
            break;

        case "soma":

            let metadeNumero = (umNumero/2);
 

            let quadradoNumero = (umNumero*umNumero);

            retorno = metadeNumero + quadradoNumero;
            break;

        case "vetor":
 

            let vetor = [];

            for(let i = 0; i< 5; i++){
 

                vetor[i] = umNumero + (i * 2);
            }
 

            retorno = vetor;
            break;

        case "booleano":
 

            let array = [];
            let total = 0;
 
            for(let i = 0; i < 5; i++){

                array[i] = umNumero + (i * 2);
                

                total = total + array[i];
            }
 

            retorno = total > 35;
            break;
      

        default:

            retorno = -1;
    }

    return retorno;
}

// function somarSubVetores(vetor){
//     let resultado = [];

//     for(let indice = 0; indice < vetor.length; indice++){
//         let subVetor = vetor[indice];
//         let soma = 0;

//         for(let subIndice = 0; subIndice < subVetor.length; subIndice++){
//             soma = soma + subVetor[subIndice];
//         }

//         resultado[indice] = soma;
//     }

//     return resultado;
// }

// console.log("-------------------------------------------------------------------------------");

// function calcularVetor(vetor, numero) {
//     let resultado = [];
//    for (let item of vetor) {
//         if(item > 5) {
//             resultado[resultado.length] = item * numero;
//         }else{
//             resultado[resultado.length] = item;
//         }
//    }
// return resultado;
  
// }

// console.log("-------------------------------------------------------------------------------");

// function calcularVetor(vetor, numero) {
//     for(let i = 0; i < vetor.length; i++) {
//         if (vetor[i] > 5) {
//             vetor[i] = vetor[i] * numero;
//         }
//     }

//     return vetor;
// }

// console.log("-------------------------------------------------------------------------------");

// function fibonacci(n) {
//     if (n < 2) {
//         return n;
//     }

//     // let anterior = 1;
//     // let penultimo = 0;

//     // for (let i = 2; i <= n; i++) {
//     //     if (i == n) {
//     //         return penultimo + anterior;
//     //     }

//     //     let temp = penultimo;
//     //     penultimo = anterior;
//     //     anterior = temp + penultimo;
//     // }

//     let posicao = 2;
//     let anterior = 1;
//     let penultimo = 0;

//     while (true) {
//         if (posicao == n) {
//             return penultimo + anterior;
//         }

//         let temp = penultimo;
//         penultimo = anterior;
//         anterior = temp + penultimo;
//         posicao++;
//     }
// }


// console.log("-------------------------------------------------------------------------------");

// let carro = {
//     rodas: 4,
//     portas: 2,
//     cor: "cinza",
//     ano: 2012,
//     estado: "novo"
// };

// function mudarPropriedade(nomePropriedade, novoValor) {
//     switch (nomePropriedade) {
//         case "rodas":
//             if (novoValor > 1) {
//                 carro.rodas = novoValor;
//             }
//             else {
//                 return "Minimo de rodas precisa ser 2";
//             }
//             break;

//         case "portas":
//             if (novoValor > 0) {
//                 carro.portas = novoValor;
//             }
//             else {
//                 return "Minimo de portas precisa ser 1";
//             }
//             break;

//         case "cor":
//             if (novoValor == "cinza" || novoValor == "preto" || novoValor == "vermelho") {
//                 carro.cor = novoValor;
//             }
//             else {
//                 return "Cor invalida";
//             }
//             break;

//         case "ano":
//             carro.ano = novoValor;
//             if (novoValor == 2019) {
//                 carro.estado = "novo";
//             } else {
//                 carro.estado = "usado";
//             }
//             break;

//         default:
//             return "Propriedade invalida";
//     }
//     return "Alteração concluída!"
// }

// console.log("------------------------------------------------------------------------------");

// function testarTamanho(valor){
//     if(valor > 15){
//         return("maior")
//     }else if (valor <= 15 && valor >= 3){
//         return("na faixa")
//     }else{
//         return("menor")
//     }
// }

// console.log("------------------------------------------------------------------------------");

// let objetoServidor = {
//     acesso : true,
//     login : "mundojs",
// };

// let objetoServidor2 = {
//     erro : "Erro ao conectar ao servidor",
// }

// function conexaoLogin(respostaDoServidor) {
//     if(respostaDoServidor.erro == null){
//         if(respostaDoServidor.acesso){
//             console.log(respostaDoServidor.login);
//         }else{
//             console.log("acesso negado!");
//         }
//     }else {
//         console.log(respostaDoServidor.erro);
//     }

// }

// console.log("------------------------------------------------------------------------------");

// let simbolo1 = "R$";
// let simbolo2 = "$";
// let simbolo3 = "£";

// function moeda(simbolo) {
//     switch (simbolo) {
//         case "R$":
//             console.log("Real");
//             break;
//         case "$":
//             console.log("Dólar");
//             break;
//         case "£":
//             console.log("Libra");
//             break;
//         default:
//             console.log("Não encontrado");
//             break;
//     }
// }

// console.log("------------------------------------------------------------------------------");

// console.log("Olá mundo 2");

// console.log("------------------------------------------------------------------------------");

// let vetor = [1, 3, 5, 7, 9, 11, 13];

// let numero = vetor[1] + vetor[3];

// console.log(numero > 9);

// console.log("---------");

// console.log((vetor[6] - numero) == 5 || true);

// console.log("---------");

// console.log(true == "true");

// console.log("---------");

// console.log(true === "true");

// console.log("------------------------------------------------------------------------------");

// let objeto = {
//     objeto2: {
//         vetor : [1,2, {valor: 55}]
//     }
// }

// Qual opção exibirá o valor 55 ?

// console.log(objeto["objeto2"].vetor.valor);
// console.log(objeto.objeto2.vetor.valor);
// console.log(objeto["objeto2"]["vetor"][2].valor);
// console.log(objeto.objeto2.vetor[3].valor);
// console.log(objeto.objeto2.vetor[2].valor);

// console.log("------------------------------------------------------------------------------");

// function revisao(valor1, valor2, valor3){

//     let outroValor = valor1 + 2;

//     let maisUm = valor2 + valor3;

//     let vetor = [valor3, valor1, maisUm, valor2, outroValor];


//     console.log(`A soma de ${vetor[2]} está certa? Ou ${vetor[1] + 2} = ${vetor[4]} parece melhor?`);

// }

// revisao(2, "5", "zero");

// console.log("------------------------------------------------------------------------------");

// let listaMista = [50, "mundo", true, objeto = { teste : "Testando" }];