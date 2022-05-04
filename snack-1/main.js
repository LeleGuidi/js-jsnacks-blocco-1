const number1 = prompt("Inserisci il primo numero");
const number2 = prompt("Inserisci il secondo numero");
if (number1 == number2) {
    alert("I numeri inseriti sono uguali")
} else if (number1 > number2) {
    alert(`Il numero maggiore è ${number1}`)
} else {
    alert(`Il numero maggiore è ${number2}`)
}