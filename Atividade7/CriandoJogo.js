do
{
escolha1 = prompt("Qual sua escolha? ");

escolha1 = escolha1.toLowerCase();

escolha2 = Math.random();

if (escolha2 <= 1/3 * 0.99)
    escolha2 = "tesoura";

else if (escolha2 > 1/3 * 0.99 && escolha2 <= 2/3 * 0.99)
    escolha2 = "pedra";

else
    escolha2 = "papel";

alert("Escolha do computador: " + escolha2);

if (escolha1 === escolha2)
   alert("Empate");

else if (escolha1 === "tesoura" && escolha2 === "papel")
    alert("Vitória");

else if (escolha1 === "pedra" && escolha2 === "tesoura")
    alert("Vitória");

else if (escolha1 === "papel" && escolha2 === "pedra")
    alert("Vitória");

else
    alert("Derrota");

continuar = confirm("Quer jogar de novo? ");
}
while (continuar);