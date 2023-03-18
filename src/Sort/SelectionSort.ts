function buscaMenorValor(arr: number[]) {
  let menorElemento = arr[0];
  let menorIndice = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < menorElemento) {
      menorElemento = arr[i];
      menorIndice = i;
    }
  }
  return menorIndice;
}

function OrdernarPorSelecao(arr: number[]) {
  let novoArr: number[] = [];
  let CopiaArr = arr.slice();
  let menor = 0;
  for (let i = 0; i < arr.length; i++) {
    menor = buscaMenorValor(CopiaArr);
    novoArr.push(CopiaArr.splice(menor, 1)[0]);
  }
  return novoArr;
}
