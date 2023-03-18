const cache_max_size = 4;
let cache_size = 0;
let cache = new Array(cache_max_size);
let indices = {};

// Generic function to swap two pairs
function swap(a, b) {
  let temp = a;
  a = b;
  b = temp;
}

// Returns the index of the parent node
function parent(i) {
  return (i - 1) / 2;
}

// Returns the index of the left child node
function left(i) {
  return 2 * i + 1;
}

// Returns the index of the right child node
function right(i) {
  return 2 * i + 2;
}

// Self made heap to Rearranges
// the nodes in order to maintain the heap property
function heapify(v, m, i, n) {
  let l = left(i),
    r = right(i),
    minim;
  if (l < n) minim = v[i][1] < v[l][1] ? i : l;
  else minim = i;
  if (r < n) minim = v[minim][1] < v[r][1] ? minim : r;
  if (minim != i) {
    m[v[minim][0]] = i;
    m[v[i][0]] = minim;
    swap(v[minim], v[i]);
    heapify(v, m, minim, n);
  }
}

// Function to Increment the frequency
// of a node and rearranges the heap
function increment(v, m, i, n) {
  ++v[i][1];
  heapify(v, m, i, n);
}

// Function to Insert a new node in the heap
function insert(v, m, value, n) {
  if (n == v.length) {
    delete m[v[0][0]];
    console.log('Cache block ' + v[0][0] + ' removed.');
    v[0] = v[--n];
    heapify(v, m, 0, n);
  }
  v[n++] = [value, 1];
  m[value] = n - 1;
  let i = n - 1;

  // Insert a node in the heap by swapping elements
  while (i && v[parent(i)][1] > v[i][1]) {
    m[v[i][0]] = parent(i);
    m[v[parent(i)][0]] = i;
    swap(v[i], v[parent(i)]);
    i = parent(i);
  }
  console.log('Cache block ' + value + ' inserted.');
}

// Function to refer to the block value in the cache
function refer(cache, indices, value, cache_size) {
  if (!indices.hasOwnProperty(value)) insert(cache, indices, value, cache_size);
  else increment(cache, indices, indices[value], cache_size);
}
