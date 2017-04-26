// 阶乘
function factorial(n) {
  if (n >= 0) {
    if (n === 0) {
      return 1;
    };
    return n * factorial(n - 1);
  };
}

// test
console.log(factorial(1));
console.log(factorial(0));
console.log(factorial(8));

// 线性查找的递归风格
function recursiveLinearSearch(array, i, x) {

  if (i < array.length) {
    if (array[i] === x) {
      return i;
    }else {
      return recursiveLinearSearch(array, i+1, x);
    }
  }

  return 'NOT-FOUND';
}

// test
let array = ['a', 'b', 'c', 'd', 'e', 'f'];
let x = 'c';
let y = 'yyyyyyy';

recursiveLinearSearch(array, 0, x);
recursiveLinearSearch(array, 0, 'f');
recursiveLinearSearch(array, 0, y);
recursiveLinearSearch(array, 3, 'e');
recursiveLinearSearch(array, 3, 'a');