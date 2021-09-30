const calculadora = {
    adicao: function(a,b) {
        return a + b;
    },

    subtracao: function(a,b) {
        return a - b;
    },

    multiplicacao: function(a,b) {
        return a * b;
    },

    divisao: function(a,b) {
        return a / b;
    }
};

console.log(calculadora.adicao(4,4));
console.log(calculadora.subtracao(10,5));
console.log(calculadora.multiplicacao(6,3));
console.log(calculadora.divisao(10,5));