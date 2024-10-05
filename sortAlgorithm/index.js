// Bubble sort;
{
  function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  let numbers = [8, 2, 3, 6, 7, 8, 1, 3, 4, 77, 23, 13, 30];
  console.time("BubbleSort Time");
  let sortedNumbers = bubbleSort(numbers);
  console.timeEnd("BubbleSort Time");

  console.log(`BubbleSort la: ${sortedNumbers}`);
}
console.log("===============================================");
//Selection Sort
{
  function selectionSort(arr) {
    let n = arr.length;
    for (let index = 0; index < n; index++) {
      let minIndex = index;
      for (let j = index + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      [arr[index], arr[minIndex]] = [arr[minIndex], arr[index]];
    }
    return arr;
  }
  let numbers = [8, 2, 3, 6, 7, 8, 1, 3, 4, 77, 23, 13, 30];
  // Đo thời gian thực thi
  console.time("Selection Sort Time");
  let sortedNumbers = selectionSort(numbers);
  console.timeEnd("Selection Sort Time");

  // In ra kết quả
  console.log(`Selection Sort là: ${sortedNumbers}`);
}
console.log("===============================================");
//Insertion Sort
//
{
  function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
    return arr;
  }
  let numbers = [8, 2, 3, 6, 7, 8, 1, 3, 4, 77, 23, 13, 30];
  console.time("Insertion Sort Time");
  let sortedNumbers = selectionSort(numbers);
  console.timeEnd("Insertion Sort Time");
  // In ra kết quả
  console.log(`Insertion Sort là: ${sortedNumbers}`);
}
console.log("===============================================");
//Merge Sort
{
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    while (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
    return result.concat(left.slice(i)).concat(right.slice(j));
  }
  let numbers = [8, 2, 3, 6, 7, 8, 1, 3, 4, 77, 23, 13, 30];
  console.time("Merge Sort Time");
  let sortedNumbers = selectionSort(numbers);
  console.timeEnd("Merge Sort Time");
  // In ra kết quả
  console.log(`Merge Sort là: ${sortedNumbers}`);
}
console.log("===============================================");
//Quick Sort
//
{
  function quickSort(arr) {
    if (arr <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  let numbers = [8, 2, 3, 6, 7, 8, 1, 3, 4, 77, 23, 13, 30];
  console.time("Quick Sort Time");
  let sortedNumbers = selectionSort(numbers);
  console.timeEnd("Quick Sort Time");
  // In ra kết quả
  console.log(`Quick Sort là: ${sortedNumbers}`);
}
console.log("===============================================");
//bucket sort;
{
  function bucketSort(arr) {
    const bucket = [];
    const numBuckets = 10; // Số lượng bucket
    // Khởi tạo các bucket
    for (let i = 0; i < numBuckets; i++) {
      bucket[i] = [];
    }
    // Phân phối các phần tử vào các bucket
    arr.forEach((num) => {
      const index = Math.floor(num / numBuckets);
      bucket[index].push(num);
    });
    // Sắp xếp từng bucket và gộp lại
    return bucket.reduce((sorted, bucket) => {
      return sorted.concat(bucket.sort((a, b) => a - b));
    }, []);
  }
  let numbers = [8, 2, 3, 6, 7, 8, 1, 3, 4, 77, 23, 13, 30];
  console.time("Bucket Sort Time");
  let bucketSorted = bucketSort(numbers);
  console.timeEnd("Bucket Sort Time");
  console.log(`Bucket Sort: ${bucketSorted}`);
}
console.log("===============================================");
//counting sort
{
  function countingSort(arr) {
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);
    const output = new Array(arr.length);
    // Đếm số lần xuất hiện của mỗi phần tử
    arr.forEach((num) => {
      count[num]++;
    });
    // Tính chỉ số vị trí cho từng phần tử
    for (let i = 1; i <= max; i++) {
      count[i] += count[i - 1];
    }
    // Xây dựng mảng đầu ra
    for (let i = arr.length - 1; i >= 0; i--) {
      output[count[arr[i]] - 1] = arr[i];
      count[arr[i]]--;
    }
    return output;
  }
  let numbers = [8, 2, 3, 6, 7, 8, 1, 3, 4, 77, 23, 13, 30];
  console.time("Counting Sort Time");
  let countingSorted = countingSort(numbers);
  console.timeEnd("Counting Sort Time");
  console.log(`Counting Sort: ${countingSorted}`);
}
console.log("===============================================");
//Pigeonhole sort
{
  function pigeonholeSort(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    const size = max - min + 1;
    const holes = new Array(size).fill(0);
    // Đếm số lần xuất hiện của mỗi phần tử
    arr.forEach((num) => {
      holes[num - min]++;
    });
    // Xây dựng mảng đầu ra
    const output = [];
    holes.forEach((count, index) => {
      for (let i = 0; i < count; i++) {
        output.push(index + min);
      }
    });
    return output;
  }
  let numbers = [8, 2, 3, 6, 7, 8, 1, 3, 4, 77, 23, 13, 30];
  console.time("Pigeonhole Sort Time");
  let pigeonholeSorted = pigeonholeSort(numbers);
  console.timeEnd("Pigeonhole Sort Time");
  console.log(`Pigeonhole Sort: ${pigeonholeSorted}`);
}
console.log("===============================================");
//radix sort
{
  function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  function mostDigits(arr) {
    let maxDigits = 0;
    arr.forEach((num) => {
      maxDigits = Math.max(maxDigits, digitCount(num));
    });
    return maxDigits;
  }
  function radixSort(arr) {
    const maxDigits = mostDigits(arr);

    for (let k = 0; k < maxDigits; k++) {
      const buckets = Array.from({ length: 10 }, () => []);
      arr.forEach((num) => {
        const digit = getDigit(num, k);
        buckets[digit].push(num);
      });
      arr = [].concat(...buckets);
    }
    return arr;
  }
  let numbers = [8, 2, 3, 6, 7, 8, 1, 3, 4, 77, 23, 13, 30];
  console.time("Radix Sort Time");
  let radixSorted = radixSort(numbers);
  console.timeEnd("Radix Sort Time");
  console.log(`Radix Sort: ${radixSorted}`);
}
console.log("===============================================");
//heap SORT
// Hàm để hoán đổi hai phần tử trong mảng
{
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  // Hàm để duy trì cấu trúc max-heap
  function heapify(arr, n, i) {
    let largest = i; // Khởi tạo largest là nút gốc
    let left = 2 * i + 1; // Chỉ số của nút con bên trái
    let right = 2 * i + 2; // Chỉ số của nút con bên phải

    // Nếu nút con bên trái lớn hơn nút gốc
    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    // Nếu nút con bên phải lớn hơn largest
    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    // Nếu largest không phải là nút gốc
    if (largest !== i) {
      swap(arr, i, largest); // Hoán đổi
      heapify(arr, n, largest); // Đệ quy để heapify cây bị ảnh hưởng
    }
  }
}
console.log("===============================================");
// Hàm heapsort chính
{
  function heapsort(arr) {
    let n = arr.length;

    // Xây dựng max-heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
    // Sắp xếp mảng
    for (let i = n - 1; i > 0; i--) {
      swap(arr, 0, i); // Hoán đổi phần tử lớn nhất với phần tử cuối cùng
      heapify(arr, i, 0); // Heapify phần còn lại của mảng
    }
  }
  // Dãy số cần sắp xếp
  let numbers = [8, 2, 3, 6, 7, 8, 1, 3, 4, 77, 23, 13, 30];
  // Ghi lại thời gian thực thi
  console.time("Heapsort Time");
  heapsort(numbers);
  console.timeEnd("Heapsort Time");
  // In ra mảng đã sắp xếp
  console.log(`Heap Sort: ${numbers}`);
}
