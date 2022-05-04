//Chiedere un numero
let number = Number(prompt(`Inserisci un numero`));
//Se il numero è pari
if (number % 2 == 0) {
    //Stampo il numero
    console.log(number)
//Altrimenti se è dispari
}else {
    //Stampo il numero successivo
    number += 1;
    console.log(number)
}