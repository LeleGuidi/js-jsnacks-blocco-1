//Creo i due array vuoti
let numbers1 = [];
let numbers2 = [];

//Con due cicli for che cicleranno randomicamente vado a inserire gli elementi all'interno degli array
for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
    const number = Math.floor(Math.random() * 5);
    numbers1.push(`${number}`)
}
for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
    const number = Math.floor(Math.random() * 5);
    numbers2.push(`${number}`)
}
console.log(numbers1, numbers2)
//Con una condizione trovo quali dei due array ha meno elementi al suo interno
if (numbers1.length == numbers2.length) {
    console.log("I due array hanno lo stesso numero di elementi")
} else if (numbers1.length < numbers2.length) {
    //Se il primo array ha meno elementi allora apro un ciclo for fino a quando il numero di elementi non raggiunge quello del secondo
    for (let i = numbers1.length; i < numbers2.length; i++) {
        const number = Math.floor(Math.random() * 5);
        numbers1.push(`${number}`)
    }
    console.log(numbers1, numbers2)
    console.log("Aggiunti elementi al primo array per pareggiarli con quelli del secondo")
} else {
    //Altrimenti apro il ciclo for fino a quando il secondo array non raggiunge il numero di elementi del primo
    for (let i = numbers2.length; i < numbers1.length; i++) {
        const number = Math.floor(Math.random() * 5);
        numbers2.push(`${number}`)
    }
    console.log(numbers1, numbers2)
    console.log("Aggiunti elementi al secondo array per pareggiarli con quelli del primo")
}

