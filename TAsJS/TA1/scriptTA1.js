

/*Manipulacion de cadenas -----------------------*/ 
function repeatString (){
    const textoIngresado = document.getElementById('texto').value;
    let repeticiones = parseInt(document.getElementById('repeticiones').value);
    const resultado = document.getElementById('resultado');
    
    resultado.innerHTML = '';

    for (let i=0; i<repeticiones; i++){
        const p = document.createElement('p');
        p.textContent=textoIngresado;
        resultado.appendChild(p);
    }
}


function reverseString (){
    const textoIngresado = document.getElementById('texto').value;
    const resultado = document.getElementById('resultado');

    resultado.innerHTML = '';

    const p = document.createElement('p');
    for (let i=textoIngresado.length-1; i>=0; i--) {
        p.textContent += textoIngresado[i];
    }
    resultado.appendChild(p);
}
// repeatString("hola", 3);
// reverseString("hola");

/*Procesamiento de arreglos -----------------------*/

function removeFromArray (){
    const arrayIngresado = document.getElementById('arreglo').value.split(',');
    let item = document.getElementById('elementoARemover').value;
    let resultado = document.getElementById('resultado2');
    
    const arrayFiltrado = arrayIngresado.filter((element)=>element.trim()!==item);
    resultado2.innerHTML = '';

    const p = document.createElement('p');
    p.textContent= arrayFiltrado.join(', ');
    resultado.appendChild(p);
    console.log(p.textContent);
    
}
// removeFromArray(["hola","chau","buenas"], "chau");


function getTheTitles() {
    let libros = document.getElementById('libro').value;
    let resultado = document.getElementById('resultado3');
    
    let libroFormateado = JSON.parse(libros);
    const h1 = document.createElement('h1');
    h1.textContent=libroFormateado.map(libro => libro.titulo);
    resultado.appendChild(h1);
}
// formato para los libros: [{"titulo": "Harry Potter y la piedra filosofal", "autor": "J.K. Rowling"}, {"titulo": "Orgullo y prejuicio", "autor":"Jane Austen"}];




/*Filtrado y Transformación -----------------------*/

function getOdds (){
    let arreglo = document.getElementById('arreglo').value.split(',').map(Number);
    let resultado = document.getElementById('resultado4');
    
    const arrayFiltrado = arreglo.filter(numero => numero % 2 !== 0);/*puedo filtrar elementos del array que cumplan con cierta condición (en este caso que sean impares)*/
    resultado.innerHTML = '';

    const p = document.createElement('p');

    arrayFiltrado.forEach(numero => {
        p.textContent += numero + ", " ;
        p.style.color = 'purple';
        p.style.fontSize = '16px';
    });
    resultado.appendChild(p);

}


function duplicates(){
    let arreglo = document.getElementById('arregloDuplicados').value.split(',').map(Number);
    let resultado = document.getElementById('resultado4');
    const duplicados = {};
    
    arreglo.forEach(numero => {
        if (duplicados[numero]) {
            duplicados[numero]++;
        } else {
            duplicados[numero] = 1;
        }
    });

    resultado.innerHTML = '';

    Object.keys(duplicados).forEach(numero => {
        if (duplicados[numero] > 1) { 
            const h4 = document.createElement('h4');
            const p = document.createElement('p');
            
            h4.textContent = `Numero duplicado: ${numero}`;
            p.textContent = `Repeticiones: ${duplicados[numero]}`;
            
            resultado.appendChild(h4);
            resultado.appendChild(p);
        }
    });
}

// let nums = [2,5,3,6,8,2,9,6,6,6,3,3];
// let duplicados = duplicates(nums);