// 选择排序

function selectionSort (array) {
  for (let i = 0; i < array.length - 1; i++) {
    let smallest = i;
    let key = array[i]; // 保存当前值
    for (let j = i + 1; j < array.length; j++) {
      // 比较当前值和最小值，如果当前值小于最小值则把当前值的索引赋给smallest
      if (array[j] < array[smallest]) {
        smallest = j;
      }
    }
    // 最小值和当前值交换
    array[i] = array[smallest];
    array[smallest] = key;
  }

  return array;
}

let array = [3, 5, 9, 11, 39, 1, 4, 9, 8, 23];

selectionSort(array);