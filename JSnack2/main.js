const nomi = [
    "Roberto","Thomas","Andrea","Davide","Marco","George","Claudio","Gabrielle","Paolo","Rocco"
];
const cognome = [
    "Rossi","Bianchi","Esposito","Romano","Colombo","Ricci","Marino","Greco","Conti","De Luca"
];

// Array per la lista degli invitati
const listaInvitati = [];

// Generazione dei nomi causali
for (let i = 0;i < 10; i++) {
    const nomeCausale = nomi[Math.floor(Math.random() * nomi.length)]
    const cognomeCausale = cognome[Math.floor(Math.random() * cognome.length)]

    listaInvitati.push({nome: nomeCausale, cognome: cognomeCausale});
}

// // Visualizzazione della lista di invitati
listaInvitati.forEach((invitato, index) => {
    console.log(`Invitato ${index +1}: ${invitato.nome} ${invitato.cognome}`)

})