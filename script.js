/* ESERCIZIO 1 
Elenca e descrivi i prinicipali datatype di Javascript. Prova a spiegarli come se volessi farli comprendere a un bambino 
*/
/* 
I tipi di dati (datatype) vengono utilizzati per classificare un particolare tipo di dati nei linguaggi di programmazione. 
I principali Datatype di Javascript sono i seguenti:
Stringa: è una sequenza di uno o più caratteri (lettere, numeri, simboli). Le stringhe sono utili quando si vuole rappresentare dati testuali.
Numero: un numero, sia intero che decimale.
Boolean: è un'entità logica che più essere vera o falsa. Ti dice se la logica che stai usando è vera o falsa. Il tipo di dato che esce fuori da un confronto è un BOOLEAN
Undefined: è una variabile che non ha un valore assegnato, è indefinito (dentro può esserci qualsiasi cosa). 
Null: è un valore vuoto che rappresenta la mancanza di un valore.
Object: può contenere molti valori come coppie nome:valore (name:value). Queste coppie forniscono un modo utile per archiviare e accedere ai dati.
Array: è una lista che può contenere più dati all'interno di una singola variabile. 
/*


/* ESERCIZIO 2 
Descrivi che cos'è un oggetto in javascript con parole tue 
*/
/* Sono raccolte/contenitori di propietà che definiscono diverse variabili al loro interno 
*/


/* ESERCIZIO 3 
Scrivi il codice necessario ad effettuare una addizione dei numeri 12 e 20. 
*/

let n1= 12;

let n2= 20;

console.log(n1+n2);

/* ESERCIZIO 4 
Crea una variabile di nome "x" e assegna ad essa il numero 12. 
*/
let x = 12;
console.log(x);

/* ESERCIZIO 5
Crea una variabile chiamata "name" e assegna ad essa il tuo nome sotto forma di stringa 
*/
let name = "Giulia";

let surname = "Lacchini";

console.log(name+surname);

/* ESERCIZIO 6 
Esegui una sottrazione tra i numeri 4 e la variabile "x" appena dichiarata (che contiene il numero 12)
*/

let y = 4;

console.log(x- y);

/* ESERCIZIO 7 
Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "jhon" e assegna a name2 la stringa "Jhon". Verifica che name1 sia diverso da name2. 
Infine, verifica che la loro uguaglianza diventi TRUE se entrambe vengono trasformate in LOWERCASE.
*/
let name1 = "jhon";

let name2 = "Jhon";

console.log(name1 == name2);

console.log(name2.toLowerCase() == name1);


