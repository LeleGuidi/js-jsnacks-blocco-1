const parola1 = prompt(`Inserisci una parola`);
const parola2 = prompt(`Inserisci un'altra parola`);
if (parola1.length == parola2.length) {
    alert(`Le due parole hanno lunghezza uguale`)
} else if (parola1.length > parola2.length) {
    alert(`${parola1} ${parola2}`)
} else {
    alert(`${parola2} ${parola1}`)
}