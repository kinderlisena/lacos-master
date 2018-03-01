let numeros = [5, 7, 13, 3, 21, 83, 90];

let resultado = 0;

for(let i = 0; i <= 6; i++){
    console.log(`O número atual é ${numeros[i]}`);
    console.log(`O resultado atual é ${resultado}`);

    resultado = resultado + numeros[i];

    console.log(" ");
}

console.log(`O resultado final é ${resultado}`);

