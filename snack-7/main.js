//Creare lista nomi e lista cognomi
const listaNomi = [`Emanuele`, `Federico`, `Simone`]
const listaCognomi = [`Guidi`, `Alpi`, `Miceli`]

let listaUnica = [];
//Creare un'unica lista di nomi e cognomi
for (let i = 0; i < listaNomi.length; i++) {
    const indiceNomi = Math.floor(Math.random() * listaNomi.length);
    console.log(indiceNomi)
    const indiceCognomi =  Math.floor(Math.random() * listaCognomi.length);
    console.log(indiceCognomi)
    listaUnica.push(`${listaNomi[indiceNomi]} ${listaCognomi[indiceCognomi]}`);
    console.log(listaUnica)
}
console.log(listaUnica);