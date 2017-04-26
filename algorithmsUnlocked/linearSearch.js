// array: 一个数组
// x: 要查找的值

// 简单的线性查找
function linearSearch(array, x) {
  let answer = 'NOT-FOUND';

  for (let i = 0; i < array.length; i++) {
    if (array[i] === x) {
      // 虽然找到了i, 但没有返回继续查找，直到 for 结束
      answer = i;
    }
  }

  return answer;
}

// 优化的查找，找到目标后立刻返回
function betterLinearSearch(array, x) {

  for (let i = 0; i < array.length; i++) {
    if (array[i] === x) {
      // 直接返回不再查找
      return i;
    }
  }

  return 'NOT-FOUND';
}

// 更优的写法
// 总是让 for 循环可以结束
function sentinelLinearSearch(array, x) {
  let n = array.length - 1; // 最后一个元素

  // 把数组最后一个值保存到last变量中
  let last = array[n]
  // 把数组最后一个值替换成目标值
  array[n] = x;
  
  // 判断数组中是否有目标值x，即使没有，数组的最后一个值也一定是目标值，避免越过数组末尾的访问
  let i = 0;
  while (array[i] !== x) {
    i++;
  }

  //如果i小于数组长度，或者最后一个值为目标值x，则返回i
  array[n] = last;
  if (i < n || last === x) {
    return i;
  }

  return 'NOT-FOUND';
}


// test
let array = ['a', 'b', 'c', 'd', 'e', 'f'];
let x = 'c';
let y = 'yyyyyyy';

linearSearch(array, x);
linearSearch(array, y);

betterLinearSearch(array, x);
betterLinearSearch(array, y);

sentinelLinearSearch(array, x);
sentinelLinearSearch(array, 'f');
sentinelLinearSearch(array, y);