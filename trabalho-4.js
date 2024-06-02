
function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
        return 1;
    } else {
        return numero * calcularFatorial(numero - 1)
    }
}

function calcularFibonacci(numero) {
    var fibonacci = [0, 1];
    for (var i = 2; i <= numero; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2]
    }
    return fibonacci.slice(0, numero + 1)
}

function calcularInvestimentos() {
    var numero = parseInt(prompt("Digite um número inteiro positivo:"))
      
    if (numero < 0 || isNaN(numero)) {
        alert("Por favor, insira um número inteiro positivo válido.")
        return
    }
    
    var fatorial = calcularFatorial(numero)
    
    var fibonacci = calcularFibonacci(numero)
    
    console.log("Fatorial de " + numero + ": " + fatorial)
    console.log("Sequência de Fibonacci até " + numero + ": " + fibonacci.join(", "))
}

calcularInvestimentos()