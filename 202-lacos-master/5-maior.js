//imprima o maior número da lista
let numeros = [5, 7, -23, 31, 23, 46, 4, 7, 1, 10];

let numeroMao = numeros[0];

for(let numeroChegando of numeros){
    if(numeroMao < numeroChegando){
        numeroMao = numeroChegando;
    }
}

// for(let i = 0; i < numeros.length; i++){
//     if(numeroMao < numeros[i]){
//         numeroMao = numeros[i];
//     }
// }

console.log(numeroMao);

