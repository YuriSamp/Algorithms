function mergeSort(arr: number[]): number[] {
  //Se o tamanho dele for menor do que 2, n faz sentido continuar dividindo em arrays menores
  if (arr.length < 2) {
    return arr;
  }

  //Pega o valor central do array
  const middleIndex = Math.floor(arr.length / 2);

  //Divide o array do começo ate o valor central
  const leftArr = arr.slice(0, middleIndex);

  //Divide o array do valor central ate o final
  const rightArr = arr.slice(middleIndex, arr.length);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr: number[], rightArr: number[]) {
  //Cria o nosso array de resultado
  let resultArr: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
    //Faz a comparação dos valores, caso o valor da esquerda seja menor que o da direita
    // Ele inclui esse numero no array e incrementa o index da esquerda
    if (leftArr[leftIndex] < rightArr[rightIndex]) {
      resultArr.push(leftArr[leftIndex]);
      leftIndex += 1;

      //Faz a comparação dos valores, caso o valor da direita seja menor que o da esquerda
      // Ele inclui esse numero no array e incrementa o index da direita
    } else {
      resultArr.push(rightArr[rightIndex]);
      rightIndex += 1;
    }
  }

  //Retorna o array concatenado e ordenado
  return resultArr
    .concat(leftArr.slice(leftIndex))
    .concat(rightArr.slice(rightIndex));
}
