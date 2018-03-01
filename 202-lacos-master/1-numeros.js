//declaração;verificação;incremento
for(let i = 1; i <= 100; i++){
    //executa
    console.log(i);
}

//funcionamento do for:
//
// DECLARA --- VERIFICA ? -----
//               |            |
//             EXECUTA  --- INCREMENTA  

// 1 - IMPRIMA OS NÚMEROS DE 100 À 1
console.log('Números de 100 à 1');
for(let i = 100; i >= 1; i--){
    console.log(i);
}

// 2 - IMPRIMA OS NÚMEROS ÍMPARES DE 1 À 100
console.log('Números ímpares de 1 à 100');
for(let i = 1; i <= 100; i = i + 2){
    console.log(i);
}