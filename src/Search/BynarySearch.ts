function binarySearch(array: number[], target: number) {
  //Aqui vamos definir o começo e o final, de acordo onde queremos buscar
  let comeco = 0;
  let fim = array.length - 1;

  //No loop, ele divide o array em 2, e compara o indicie do meio com o valor que está a procura
  while (comeco <= fim) {
    let IndexDoMeio = Math.floor((comeco + fim) / 2);

    //Se na primeira iteração for igual, ele ja retorna bonitinho pra voce
    if (target === array[IndexDoMeio])
      return console.log('o numero foi encontrado no index ' + IndexDoMeio);

    //Caso não seja, ele começa a percorrer alguns dos lados do array, comparando o numero do meio ao target

    //Procurando pelo lado direito do array
    if (target > array[IndexDoMeio]) comeco = IndexDoMeio + 1;

    //Procurando pelo lado esquerdo do array
    if (target < array[IndexDoMeio]) fim = IndexDoMeio - 1;
  }
  //Caso ele percorra o array completamente e não encontre o resultado, ele o que voce definir
  return console.log('valor não encontrado no array');
}
