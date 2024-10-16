const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE
console.log(teachers)

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
const reversedTeachers = teachers.reverse();

console.log(teachers)

const miaFunzione = (teacher, indice, lista) => {
  return indice % 2 === 0;
}


// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter(miaFunzione); // ritorna un array con gli elementi presi che rispettano le condizioni imposte


console.log(longNames)


// 3. Rimuovi 'Ed' dall'array teachers