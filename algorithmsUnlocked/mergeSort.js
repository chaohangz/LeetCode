// 归并排序

// array: 数组
// p: 开始索引
// r: 末尾索引

function mergeSort (array, p, r) {
  if (p >= r) {
    return;
  } else {
    // 不可以用四舍五入，找了一夜的bug竟然是因为四舍五入这个小蹄子
    let q = Math.floor((p + r) / 2);
    // 递归调用，把数组拆分成两部分，直到每个数组只剩一个元素
    mergeSort(array, p, q);
    mergeSort(array, q + 1, r);

    // 把两个子数组排序并合并
    merge(array, p, q, r);
  }

  return array;
}

function merge (array, p, q, r) {
  let n1 = q - p + 1;  // 子数组的长度
  let n2 = r - q;

  // 把两个子数组拷贝到B、C数组中
  // slice不包含end参数，所以end参数要加一
  let arrB = array.slice(p, q + 1);
  let arrC = array.slice(q + 1, r + 1);

  // 两个数组的最后一个元素设为无穷大值，确保了无需再检查数组中是否有剩余元素
  arrB[n1] = Number.MAX_VALUE;
  arrC[n2] = Number.MAX_VALUE;

  // 因为回填入原数组的个数是固定的，所以无穷大值不会被填入，也无需判断是否有剩余
  // 一旦B、C两个数组中的所有元素拷贝完就自动终止
  // 因为B、C中的元素已经按照非递减顺序排好了，所以最小索引值对应的就是最小值
  // 两个子数组的最小值比较，小的则为当前最小值
  let i = j = 0;
  for (let k = p; k < r + 1; k++) {
    if (arrB[i] < arrC[j]) {
      array[k] = arrB[i];
      i++;
    } else {
      array[k] = arrC[j];
      j++;
    }
  }

  return;
}

let array = [3, 5, 9, 11, 39, 1, 4, 9, 8, 23];

mergeSort(array, 0, 9);