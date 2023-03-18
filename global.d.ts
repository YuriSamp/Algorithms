declare type GraphEdge = { to: number; weight: number };
declare type WeightedAdjacencyList = GraphEdge[][];
declare type AdjacencyList = number[][];
declare type AdjacencyMatrix = number[][];
declare interface binaryNode<T> {
  value: T;
  left: binaryNode<T> | null;
  Rigth: binaryNode<T> | null;
}

declare type node<T> = {
  value: T;
  next?: node<T>;
  prev?: node<T>;
};

declare type Point = {
  x: number;
  y: number;
};
