//Generación de contraseñas -----------
function generatePassword(){
    let longitudIngresada = Number(document.getElementById('largo').value);
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; 

    const p = document.createElement('p');
    
    if(longitudIngresada < 8){
        p.textContent = 'Debe tener al menos 8 caracteres';
        resultado.appendChild(p);
    } else {
        const mayus = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ';
        const min = 'abcdefghijklmnñopqrstuvwxyz';
        const numeros = '0123456789';
        const simbolos = '!@#$%^&*()_+~`|}{:;?><,./-=[]';

        const caracteres = mayus + min + numeros + simbolos;
        let password = '';

        for(let i = 0; i < longitudIngresada; i++){
            const indiceRandom = Math.floor(Math.random() * caracteres.length);
            password += caracteres[indiceRandom];
        }

        p.textContent = `Su contraseña es: ${password}`;
        resultado.appendChild(p);
    }
}

//Búsqueda del Más Viejo --------------

function getTheOldest(){
    let personas = document.getElementById('personas').value;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    let personasFormateadas = JSON.parse(personas);

    let personaMasVieja = personasFormateadas.reduce((oldest, persona) => {
        return (oldest.edad || 0) > persona.edad ? oldest : persona; //si la edad de la persona no está definida, se considera 0. Se compara la edad de la persona ás vieja hasta el momento con la persona que está evaluando reduce() en ese momento. Se decide si oldest cambia o se mantiene.
    }, {});//{} es el valor inicial de oldest

    const p = document.createElement('p');
    p.textContent=`${personaMasVieja.nombre} es la más vieja con ${personaMasVieja.edad} años`;
    resultado.appendChild(p);
}

//formato para las personas: [{"nombre": "Harry", "edad": "12"}, {"nombre": "Florencia", "edad":"21"}]
