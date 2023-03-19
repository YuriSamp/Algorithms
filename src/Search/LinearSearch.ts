function LinearSerach(arr: number[], GoldNumber: number) {
  let v = '';

  // Voce itera no array de index em index até achar o número que você ta procurando, e ai escolhe o que ele vai retornar
  // no caso dele achar e no caso dele não achar

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === GoldNumber) {
      v = 'Parabéns o seu número se encontra no array';
      break;
    } else {
      v = 'Ops, pelo visto o número desejado não se encontra no array';
    }
  }
  return v;
}
