//Recomendo ler um artigo caso nunca tenha visto esse problema
// Mas em sintese, queremos saber qual é o ultimo andar que podemos
// soltar nossa bolinha de vidro sem que ela quebre na queda

function TwoCristalBalls(breaks: boolean[]) {
  //A raiz quadrada da quantidade de pulos que podemos dar
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jumpAmount;
  //Enquanto a quantidade de pulos for menor que a altura necessaria pra quebrar a bolinha, continuar pulando
  for (; i < breaks.length; i += jumpAmount) {
    //Se a nossa bolinha quebrou, a gente sabe que subiu muitos andares
    if (breaks[i]) {
      breaks;
    }
  }

  //Voltamos pra onde estavamos antes da bola quebrar
  i -= jumpAmount;

  //A gente só tem uma bolinha restante, então devemos ir com cuidado
  // Portanto a gente implementa um LinearSearch ate chegar no nosso resultado
  for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }
}
