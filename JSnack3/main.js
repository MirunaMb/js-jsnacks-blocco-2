// Creazione dell'array di numeri interi
const numeriInteri = [
    10, 5, 20, 15, 30, 25, 40, 35
];
// Variabile per la somma degli elementi in posizione dispari
let sommaDispari = 0 ;

// Ciclo for per sommare gli elementi in posizione dispari
for (let i = 1; i < numeriInteri.length;i += 2) {
    sommaDispari += numeriInteri[i];
}
// Visualizzazione della somma degli elementi in posizione dispari
console.log("Somma degli elementi in posizione dispari:", sommaDispari);
