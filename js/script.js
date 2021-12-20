
/* Traccia
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito21

1- Creare variabili per Nome, Cognome, Colori
2- Creare prompt e popups
3- stampare variabili
4- inserire testo su HTML
*/
console.log("JS OK");

//Benvenuto
alert("Ciao! Se sei qui è perchè vuoi creare una nuova password più sicura?! Allora clicca su Ok");

//! Creazione Variabili & stamparle

//Nome
const firstName = prompt("Qual'è il tuo Nome?");

console.log(firstName);

//Cognome

const lastName = prompt("Qual'è il tuo Cognome?");

console.log(lastName);

//Colore

const favColour = prompt("Qual'è il tuo colore preferito?");

console.log(favColour);

//! Inserire testo in HTML

const newPSW = document.getElementById('yourpsw');

newPSW.innerHTML = `La tua nuova password è: ${firstName}${lastName}${favColour}21`