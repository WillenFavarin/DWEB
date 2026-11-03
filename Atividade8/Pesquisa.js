const qtde = 45;

let i, MediaIdade, SomaIdade, MaisVelha, MaisNova, QtdePessimo, QtdeRegular, QtdeBom, QtdeOtimo, Porcent, QtdeM, QtdeF, QtdeO, Idade, Sexo, Opiniao;

MediaIdade = 0;
MaisNova = 200;
MaisVelha = 0;
QtdeBom = 0;
QtdeOtimo = 0;
QtdePessimo = 0;
QtdeRegular = 0;
QtdeF = 0;
QtdeM = 0;
QtdeO = 0;
Idade = 0;
Porcent = 0;
SomaIdade = 0;

for(i=0; i < qtde; i++)
{
    Idade = prompt("Qual sua idade?");
    Idade = Number(Idade);
    SomaIdade = SomaIdade + Idade;

    if (i === 0)
    {
        MaisNova = Idade;
        MaisVelha = Idade;
    }

    if (Idade > MaisVelha)
        MaisVelha = Idade;
    if (Idade < MaisNova)
        MaisNova = Idade;

    Sexo = prompt("Qual seu sexo?");
    Sexo = Sexo.toUpperCase();

    if (Sexo == "F")
        QtdeF++;
    if (Sexo == "M")
        QtdeM++;
    if (Sexo == "O")
        QtdeO++;

    Opiniao = prompt("Qual sua opinião sobre o filme?");

    if (Opiniao == 1)
        QtdePessimo++;
    else if (Opiniao == 2)
        QtdeRegular++;
    else if (Opiniao == 3)
        QtdeBom++;
    else if (Opiniao == 4)
        QtdeOtimo++;
}

MediaIdade = SomaIdade / qtde;
Porcent = ((QtdeBom + QtdeOtimo) / qtde) * 100;

alert("Média das idades: " + MediaIdade);
alert("\nIdade da pessoa mais velha: " + MaisVelha);
alert("\nIdade da pessoa mais nova: " + MaisNova);
alert("\nQuantas pessoas responderam péssimo: " + QtdePessimo);
alert("\nPorcentagem de bom e ótimo: " + Porcent.toFixed(2));
alert("\nNúmero de mulheres: " + QtdeF);
alert("\nNúmero de homens: " + QtdeM);
alert("\nNúmero de outros: " + QtdeO);