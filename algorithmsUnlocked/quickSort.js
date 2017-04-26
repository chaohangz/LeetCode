// 快速排序

function quickSort (array, p, r) {

  if (p >= r) {
    return;
  } else {
    let q = partition(array, p, r);
    
    // 递归中不再包含array[q]，因为它已经处在正确的位置（左边所有元素都小于它，右边所有元素都大于或等于它）
    // 如果递归调用还包含array[q]，就会陷入死循环
    quickSort(array, p, q - 1);
    quickSort(array, q + 1, r);
  }

  return array;
}

// 主元：数组中随机挑选单独的一个数（这里我们总是选数组中的最后一位）array[r]
// 组L（左侧组）：所有小于主元的数，array[p...q-1]
// 组R（右侧组）：所有大于或等于主元的数，array[q...u-1]
// 组U（未知组）：还未进行比较的数，array[u...r-1]
function partition(array, p, r) {
  let q = p;
  // 遍历array[p...r-1]
  for (let u = p; u < r; u++) {

    // 如果未知数小于主元，放入组L
    if (array[u] < array[r]) {

      // 把未知数和组R最左侧值(array[q])进行交换，并让q和u往右移一位(加1)
      let key = array[q];
      array[q] = array[u];
      array[u] = key;
      q += 1;
    }

    // 如果未知数大于或等于主元，放入组R
    // 无需其他操作，只需要把u往右移一位
  }

  // 把主元和组R最左侧值(array[q])进行交换，让主元位于组L合组R中间
  let key = array[q];
  array[q] = array[r];
  array[r] = key;

  return q;
}

let array = [3, 5, 9, 11, 39, 1, 4, 9, 8, 2];

quickSort(array, 0, 9);
// partition(array, 0, 8)