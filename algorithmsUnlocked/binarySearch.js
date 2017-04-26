// 利用二分法在已经排好序的数组中查找值x
function binarySearch(array, x) {
  let p = 1;
  let r = array.length - 1;

  while (p <= r) {
    let q = Math.round((p + r) / 2);  //四舍五入取整

    if (array[q] === x) {
      return q;
    } else {
      if (array[q] > x) {
        // 如果q没有减一，遇到找不到x的情况，
        // 就会陷入while循环中出不来，因为p会一直等于r
        r = q - 1; 
      } else {
        p = q + 1;
      }
    }
  }

  return 'NOT-FOUND';
}

// 二分法递归风格
function recursiveBinarySearch(array, p, r, x) {

  if (p > r) {  // 基础情况
    console.log('NOT-FOUND');
    return;
  }

  let q = Math.round((p + r) / 2);

  if (array[q] === x) {  // 基础情况
    console.log(q);
    return;
  } else {
    if (array[q] > x) {
      recursiveBinarySearch(array, p, q-1, x);
    } else {
      recursiveBinarySearch(array, q+1, r, x);
    }
  }
}

let array = [1, 2, 3, 4, 5, 6, 7];

binarySearch(array, 3);
binarySearch(array, 7);

recursiveBinarySearch(array, 0, 6, 2);
recursiveBinarySearch(array, 0, 6, 7);
recursiveBinarySearch(array, 0, 6, 1);
recursiveBinarySearch(array, 3, 6, 6);
recursiveBinarySearch(array, 0, 4, 3);
recursiveBinarySearch(array, 4, 5, 2);
recursiveBinarySearch(array, 0, 1, 7);
