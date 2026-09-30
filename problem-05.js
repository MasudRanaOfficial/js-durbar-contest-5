function findRainfallPeaks(rainfall) {
  const peaks = [];

  for (let i = 1; i < rainfall.length - 1; i++) {
    if (rainfall[i] > rainfall[i - 1] && rainfall[i] > rainfall[i + 1]) {
      peaks.push(i + 1);
    }
  }

  return peaks;
}

// Examples
console.log(findRainfallPeaks([2, 5, 3, 3, 7, 4, 4, 6])); // [2, 5]
console.log(findRainfallPeaks([1, 2, 3, 2, 1])); // [3]
console.log(findRainfallPeaks([5, 4, 3, 2, 1])); // []
console.log(findRainfallPeaks([])); // []
