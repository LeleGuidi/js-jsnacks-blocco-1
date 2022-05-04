let numbers = []
for (i = 0; i < 6; i++) {
    const number = Number(prompt(`Inserisci un numero`))
    if (number % 2 != 0) {
        numbers.push(number)
    }
}
console.log(numbers)