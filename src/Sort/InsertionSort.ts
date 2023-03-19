//Aqui é muito parecido com o bubbleSort
// A diferença que a gente usa um while em vez de 2 ifs aninhados
// isso melhora um pouco a performance
function InsertionSort(arr: number[]) {
  //Passa por toda a lista
  for (let i = 1; i < arr.length; i++) {
    //Cria uma chave de comparação
    let chave = arr[i];
    // Um index
    let j = i - 1;
    //Enquanto esse index n for -1, vai ordenando todo mundo
    while (j > -1 && chave < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = chave;
  }
  return arr;
}
