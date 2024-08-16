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