//Essa ordenação aqui, pega o menor elemento da lista
//e coloca ele no index 0, depois segue esse mesmo processo
// aumentando o index, e ordenando a lista

function buscaMenorValor(arr: number[]) {
  let menorElemento = arr[0];
  let menorIndice = 0;
  //Vamos em cada elemento da lista
  for (let i = 1; i < arr.length; i++) {
    //achamos o menor elemento, e colocamos ele em primeiro no array
    if (arr[i] < menorElemento) {
      menorElemento = arr[i];
      //Alteramos o indice já que sabemos onde estava o menor elemento
      menorIndice = i;
    }
  }
  return menorIndice;
}

function OrdernarPorSelecao(arr: number[]) {
  //Criamos o array com os resultados
  let novoArr: number[] = [];
  let CopiaArr = arr.slice();
  let menor = 0;
  //Vamos em cada elemento do array
  for (let i = 0; i < arr.length; i++) {
    //Montamos o array com o resultado
    menor = buscaMenorValor(CopiaArr);
    novoArr.push(CopiaArr.splice(menor, 1)[0]);
  }
  return novoArr;
}
