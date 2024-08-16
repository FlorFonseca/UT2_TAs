function getOdds (nums){
    return nums.filter(numero => numero % 2 !== 0);/*puedo filtrar elementos del array que cumplan con cierta condición (en este caso que sean impares)*/
}

let numeros = [2,5,3,6,8,9];
let impares = getOdds(numeros);
console.log(impares);

function duplicate()