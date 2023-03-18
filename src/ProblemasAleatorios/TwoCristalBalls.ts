function TwoCristalBalls(breaks: boolean[]) {
  const jumpAmount = Math.floor(Math.sqrt(breaks.length));
  let i = jumpAmount;
  for (; i < breaks.length; i += jumpAmount) {
    if (breaks[i]) {
      breaks;
    }
  }

  i -= jumpAmount;

  for (let j = 0; j < jumpAmount && i < breaks.length; j++, i++) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
}
