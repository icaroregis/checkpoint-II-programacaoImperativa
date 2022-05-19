/* 1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor? */
function maiorEmenor(a, b, c) {
  function maior() {
    if (a > b && a > c) {
      return a;
    } else if (b > a && b > c) {
      return b;
    } else if (c > a && c > b) {
      return c;
    }
  }

  function menor() {
    if (a < b && a < c) {
      return a;
    } else if (b < a && b < c) {
      return b;
    } else if (c < a && c < b) {
      return c;
    }
  }

  console.log(`O maior número é: ${maior()}`);
  console.log(`O menor número é: ${menor()}`);
}

maiorEmenor(10, 200, 50);

/* 2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a 
idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&) */

function podeDoar(idade) {
  if (idade >= 18 && idade <= 67) {
    return `Você pode doar sangue!!!`;
  }

  return `Você ainda não pode doar sangue!!!`;
}

/* . Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo */
function ehPositivoOuNegativo(valor) {
  if (valor >= 0) {
    return `O Valor: ${valor} é positivo!!!`;
  }

  return `O Valor: ${valor} é negativo!!!`;
}

/* 4. Faça um programa para a leitura de duas notas de um aluno.  
    A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
    A mensagem “Aprovado com Distinção”, se a média for igual a 10;
    A mensagem “Reprovado” se a média for menor de do que 7; */

function media(nota1, nota2) {
  if ((nota1 + nota2) / 2 < 7) {
    return `Reprovado.`;
  } else if ((nota1 + nota2) / 2 === 10) {
    return `Aprovado com Distinção`;
  } else if ((nota1 + nota2) / 2 >= 7) {
    return `Aprovado`;
  }
}
