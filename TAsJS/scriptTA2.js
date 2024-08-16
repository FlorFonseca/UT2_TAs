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
