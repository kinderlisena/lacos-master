let numeros = [5, 7, 13, 3, 21, 83, 90, 4, 2, 5];

let resultado = 0;

for(let numero of numeros){
    console.log(`O número atual é ${numero}`);
    console.log(`O resultado atual é ${resultado}`);

    resultado = resultado + numero;

    console.log(" ");
}

console.log(`O resultado final é ${resultado}`);

