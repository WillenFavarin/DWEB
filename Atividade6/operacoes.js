let num1, num2, soma, sub, prod, div, resto, continuar;

do {
    num1 = parseFloat(prompt("Digite o primeiro numero: "));
    num2 = parseFloat(prompt("Digite o segundo numero: "));

    soma = (num1 + num2);
    sub = (num1 - num2);
    prod = (num1 * num2);
    div = (num1 / num2);
    resto = (num1 % num2);

    alert("Soma: " + soma + "\n" + "Subtração: " + sub + "\n" + "Produto: " + prod + "\n" + "Divisão: " + div.toFixed(2) + "\n" + "Resto: " + resto);

    continuar = confirm("Deseja fazer outro cálculo?");
    
} while (continuar);