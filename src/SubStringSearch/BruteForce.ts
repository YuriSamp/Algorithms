function main(): void {
  console.log('========String matcher Brute Force Approach===========');
  const text = 'abcabbabbaabac';
  const pattern = 'abba';
  const initialTime = Date.now();
  const matchedIndexes = bruteForceStringMatcher(text, pattern);
  const finalTime = Date.now();
  for (const matchedIndex of matchedIndexes) {
    console.log('Pattern found at ' + matchedIndex);
  }

  if (matchedIndexes.length === 0) console.log('Pattern not found');

  console.log('Time taken for matching ' + (finalTime - initialTime));
}

function bruteForceStringMatcher(text: string, pattern: string): number[] {
  const textArray: string[] = text.split('');
  const patternArray: string[] = pattern.split('');

  const textLength: number = textArray.length;
  const patternLength: number = patternArray.length;

  const matchedIndexes: number[] = [];

  let textIndex: number = 0;

  for (textIndex = 0; textIndex < textLength; textIndex++) {
    let textIndexLocal: number = textIndex;
    let match: boolean = true;
    let matchedIndex: number = textIndex;
    for (let patternIndex = 0; patternIndex < patternLength; patternIndex++) {
      if (textArray[textIndexLocal] !== patternArray[patternIndex]) {
        match = false;
        break;
      }
      textIndexLocal = textIndexLocal + 1;
    }
    if (match) matchedIndexes.push(matchedIndex);
  }
  return matchedIndexes;
}
