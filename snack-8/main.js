//Creo un array vuoto
let numbers = [];
let shotNumbers = 0;
for (let i = 0; i < 6; i++) {
    //Inserisco al suo interno 6 numeri interi
    const number = Math.floor(Math.random() * 10)
    numbers.push(`${number}`)

    //Nel caso il numero sia dispari lo inserisco in una variabile e lo sommo agli inseriti nella stessa
    if (numbers[i] % 2 != 0) {
        shotNumbers += Number(numbers[i])
    }
    
}
console.log(numbers)
console.log(shotNumbers)