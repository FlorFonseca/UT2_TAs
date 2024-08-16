

/*Manipulacion de cadenas -----------------------*/ 
function repeatString ( texto, repeticiones){
    for (i=0; i<repeticiones; i++){
        console.log(texto);
    }
}


function reverseString (texto){

    for (i=texto.length-1; i>=0; i--) {
        console.log(texto[i]);
    }
}
repeatString("hola", 3);
reverseString("hola");

/*Procesamiento de arreglos -----------------------*/

function removeFromArray ( arreglo, item){
    arreglo=arreglo.filter((element)=>element!==item);
    console.log(arreglo);
}
removeFromArray(["hola","chau","buenas"], "chau");


function getTheTitles(books) {
    return books.map(libro => libro.titulo);
}
const libros = [{titulo: "Harry Potter y la piedra filosofal", autor: "J.K. Rowling"}, {titulo: "Orgullo y prejuicio", autor:"Jane Austen"}];
const titles = getTheTitles(libros);
console.log(titles);



/*Filtrado y Transformación -----------------------*/

function getOdds (nums){
    return nums.filter(numero => numero % 2 !== 0);/*puedo filtrar elementos del array que cumplan con cierta condición (en este caso que sean impares)*/
}

let numeros = [2,5,3,6,8,9];
let impares = getOdds(numeros);
console.log(impares);

function duplicates(nums){
    const resultado = {};
    nums.forEach(numero => {
        resultado[numero] = (resultado[numero]||0)+1;/*numero sería el valor a buscar en el objeto. Si no existe se lo crea */
    });
    console.log(resultado);
}

let nums = [2,5,3,6,8,2,9,6,6,6,3,3];
let duplicados = duplicates(nums);