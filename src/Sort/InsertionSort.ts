function InsertionSort(arr: number[]) {
  for (let i = 1; i < arr.length; i++) {
    let chave = arr[i];
    let j = i - 1;
    while (j > -1 && chave < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = chave;
  }
  return arr;
}
