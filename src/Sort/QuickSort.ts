function qs(arr: number[], lo: number, hi: number) {
  if (lo >= hi) {
    return;
  }
  const pivot = partition(arr, lo, hi);
  qs(arr, lo, pivot - 1);
  qs(arr, pivot + 1, hi);
  return arr;
}

function partition(arr: number[], lo: number, hi: number): number {
  const pivot = arr[hi];
  let index = lo - 1;
  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      index++;
      const tmp = arr[i];
      arr[i] = arr[index];
      arr[index] = tmp;
    }
  }
  index++;
  arr[hi] = arr[index];
  arr[index] = pivot;

  return index;
}

function quickSort(arr: number[]) {
  return qs(arr, 0, arr.length - 1);
}
