function LinearSerach(arr: number[], GoldNumber: number) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === GoldNumber) {
      return 'Parabéns o seu número se encontra no array';
    } else {
      return 'Ops, pelo visto o número desejado não se encontra no array';
    }
  }
}
