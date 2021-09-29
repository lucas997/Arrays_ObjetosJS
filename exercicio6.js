let numeros = [1,2,4,5,6,10,78];
let nomes = ["lucas","joão"];

function numeroDeElementos(arr) {
    if(arr.length >= 5) {
        console.log("muitos elementos");
    } else {
        console.log("poucos elementos");
    }
}

numeroDeElementos(numeros);
numeroDeElementos(nomes);