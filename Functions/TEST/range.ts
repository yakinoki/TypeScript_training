function range(min: number, max: number): number[] {
  return Array.from({ length: max - min + 1 }, (_, index) => min + index);
}

console.log(range(5, 10)); // [5, 6, 7, 8, 9, 10] と表示される
