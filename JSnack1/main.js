// Usiamo questa funzione per verificare se il numero e pari

function isEven(number) {
    return number %  2 === 0;
    
}

// Funzione per stampare il numero successivo se è dispari
function printNextIfOdd(number) {
    if (isEven(number)) {
    console.log(number);  // È pari, quindi stampa il numero
} else {
    console.log(number + 1); // E dispari ,quindi stampa il numero successivo
}
}
// Richiede all'utente di inserire un numero
const inputNumber = parseInt(prompt("Inserisci un numero:"));

// Chiama la funzione per stampare il numero o il successivo se è dispari
printNextIfOdd(inputNumber);
