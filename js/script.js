/* Chiedi all’utente il suo nome,
/ poi chiedi il suo cognome,
/ poi chiedi il suo colore preferito
 Infine scrivi sulla pagina nomecognomecolorepreferito21 
 */

console.log("here");

//vars  
var name = prompt('inserisci il tuo nome:');
var surname = prompt('inserisci il tuo cognome:');
var color = prompt('inserisci il tuo colore preferito:');
var psw;


//var placeholder html
var pName = document.getElementById('name');
var pSurname = document.getElementById('surname');
var pColor = document.getElementById('color');
var pPsw = document.getElementById('psw');


//debug string name
if (name.match('[0-9]')) {
    console.log("invalid name.");
} else {
    console.log('nome: ', name);
}

//debug string surname
if (name.match('[0-9]')) {
    console.log("invalid surname.");
} else {
    console.log('cognome: ', surname);
}

//debug string color
if (name.match('[0-9]')) {
    console.log("invalid color.");
} else {
    console.log('colore: ', color);
}


//write html
pName.innerText = " Nome: " + name;
pSurname.innerText = " Cognome: " + surname;
pColor.innerText = " colore preferito: " + color;

//concat + debug
psw = name + surname + color + '21';
console.log('concat: ', psw);

//write psw
pPsw.innerText = psw;

