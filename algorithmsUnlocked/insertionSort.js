// 插入排序

function insertionSort (array) {
  for (let i = 1; i < array.length; i++) {
    let key = array[i];  // 把当前操作值保存到key中
    let j = i - 1;       // j 为当前值的前一位

    // 在j大于等于0且前一位大于当前值时，前一位向右移动一个位置
    while (j >= 0 && array[j] > key) {
      array[j+1] = array[j];
      j -= 1;
    };
    // 直到遇到array[j]小于当前操作值或者j小于0时，把当前值插入所空出来的位置    
    array[j+1] = key;
  }

  return array;
}

let array = [3, 5, 9, 11, 39, 1, 4, 9, 8, 23];

insertionSort(array);