/* Faça um programa para a leitura de duas notas parciais de um aluno. O
programa deve calcular a média alcançada por aluno e apresentar:
a. A mensagem "Aprovado", se a média alcançada for maior ou
igual a sete;
b. A mensagem "Reprovado", se a média for menor do que sete;
c. A mensagem "Aprovado com Distinção", se a média for igual a
dez
*/

var nota1 = 10 // armazena os valores de nota1 e nota2
var nota2 = 1 

var media = (nota1+nota2) / 2  // realiza o calculo da media entre nota1 e nota2

if (media === 10){   // caso media for igual a 10, imprime "Aprovado com Distinção"
    console.log("Aprovado com Distinção")
}

else if(media >= 7){   // se a primeira condição for falsa e media maior ou igual a 7, imprime "Aprovado"
    console.log("Aprovado")
}

else{  // se media não for maior ou igual a 7, imprime "Reprovado"
    console.log("Reprovado")
}
