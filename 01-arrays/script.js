const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE
// console.log(teachers)
//console.log(teachers.length)

// 1. Utilizzando un indice sull'array teachers, cambia il valore della
// variabile fourthTeacher qui sotto in modo che sia il quarto insegnante elencato nell'array
const fourthTeacher = teachers[3]; //string

//console.log(`Index of 4th teacher: ${teachers.indexOf('Phil')}`) // stampa index del quarto elemento dell'array 'teachers'
// console.log(fourthTeacher)

// 2. Sostituisci il quinto insegnante nell'array teachers con 'Patrick'
teachers.splice(4, 1, 'Patrick');
//teachers[4] = 'Patrick'

// console.log(teachers);

// 3. Rimuovi l'ultimo insegnante dall'array e salvalo nella variabile lastTeacher qui sotto
const lastTeacher = teachers.pop(); // ritorna il valore eliminato dall'array  !!![ultimo elemento]

// console.log(teachers)
// console.log(lastTeacher);

// 4. Rimuovi il primo insegnante dall'array e salvalo nella variabile firstTeacher qui sotto
const firstTeacher = teachers.shift(); //ritorna il valore eliminato dall'array  !!![primo elemento]

// console.log(teachers, teachers.length)
// console.log(firstTeacher);

// 5. Aggiungi un insegnante di nome 'Vanessa' alla fine dell'array teachers
teachers.push('Vanessa'); //ritorna la 'lenght' dell'oggetto al quale applicato dopo che il valore indicato nelle parentesi è stato pushato alla fine

// console.log(teachers, teachers.length);

// 6. Aggiungi un insegnante di nome 'Sarah' all'inizio dell'array teachers
teachers.unshift('Sarah'); // la nuova lenght dopo che l'elemento è stato aggiunto

// console.log(teachers, teachers.length)

// 7. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.includes('Fabio'); // ritorna booleano

/**const teacherPresece = teachers.includes('Fabio');
 * const isFabioPresent = teacherPresence;
*/

// console.log(isFabioPresent)

// 8. Trova l'indice dell'insegnante 'Lewis' nell'array teachers
// e salvalo nella variabile lewisIndex
const lewisIndex = teachers.indexOf('Lewis'); // ritorna l'index del valore indicato nelle parentesi, se non è presente ritorna -1

// console.log(teachers)
// console.log(lewisIndex)

// 9. Unisci tutti gli insegnanti nell'array teachers in una stringa
// separata da virgole e salvala nella variabile teachersString
const teachersString = teachers.toString();

// console.log(teachers);
// console.log(teachersString);

// 10. Verifica se l'array teachers è vuoto
// e salva il risultato nella variabile isTeachersEmpty

//empty array test
// const test = []
// const emptyTest = test.length === 0; // !!!test per non modificare l'array principale e non commentare tutti i consle log precedenti che sono andati a modificare l'array durante il codice e quindi risulterebbe comunque con contenuto anche cancellando il contenutto principale

const emptyCheck = teachers.length === 0;
const isTeachersEmpty = emptyCheck; // const isTeachersEmpty = teachers.length === 0;

console.log(isTeachersEmpty)
// console.log(emptyTest)
