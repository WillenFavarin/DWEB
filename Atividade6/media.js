let nome, nota1, nota2, nota3, nota4, media, continuar;

do {
    nome = prompt("Qual o nome?");

    nota1 = parseFloat( prompt( "Qual a nota 1?" ) )
    nota2 = parseFloat( prompt( "Qual a nota 2?" ) )
    nota3 = parseFloat( prompt( "Qual a nota 3?" ) )
    nota4 = parseFloat( prompt( "Qual a nota 4?" ) )

    media = (nota1 + nota2 + nota3 + nota4) / 4;

    alert("A média de " + nome + ": " + media.toFixed(2));

    continuar = confirm("Deseja calcular a média de outro aluno?");

} while (continuar);