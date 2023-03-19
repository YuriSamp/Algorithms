//Essa aqui é a mais dificil porem a minha forma preferida de ordenar

function qs(arr: number[], lo: number, hi: number) {
  //Isso aqui é pra chegar se menor index é maior ou igual o maior index,
  // se cair nesse if é pq deu problema
  if (lo >= hi) {
    return;
  }
  //aqui a gente pega um pivo pra ordenar nosso array com ele de referencia
  const pivot = partition(arr, lo, hi);
  //Usamos a recursão pra chamar essa função com nosso pivor
  qs(arr, lo, pivot - 1);
  qs(arr, pivot + 1, hi);
  //retornamos o array ordenado
  return arr;
}

function partition(arr: number[], lo: number, hi: number): number {
  //Nesse caso aqui o pivot era o ultimo elemento do array, mas pode ser qualquer um
  const pivot = arr[hi];
  let index = lo - 1;
  //Vamo passar pelo array inteiro
  for (let i = lo; i < hi; i++) {
    //Se o array em alguma casa for menor que o pivot que escolhemos
    if (arr[i] <= pivot) {
      //Aumentamos nosso index
      index++;
      //E começamos a dança das cadeiras para ordenar o array
      const tmp = arr[i];
      arr[i] = arr[index];
      arr[index] = tmp;
    }
  }
  //No fim aumentamos o index de novo e re arranjamos quem é o pivo
  index++;
  arr[hi] = arr[index];
  arr[index] = pivot;
  return index;
}

function quickSort(arr: number[]) {
  return qs(arr, 0, arr.length - 1);
}
