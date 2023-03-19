//Essa talvez seja a pior forma de ordenar olhando pela performance

function BubbleSort(arr: number[]) {
  // O que ta acontecendo aqui é, a gente passa por cada item da lista
  for (let i = 0; i < arr.length; i++) {
    //E pra cada item da lista a gente compara com todo o resto da lista
    for (let j = 0; j < arr.length - 1 - i; j++) {
      //A gente precisa garantir que ele seja o maior / menor, depende de como vc quer ordenar
      if (arr[j] > arr[j + 1]) {
        //Aqui a gente faz as trocas de posições
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      }
    }
  }
  return arr;
}
