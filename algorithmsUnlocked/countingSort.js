// 计数排序

// array是一个特殊的数组，元素只能是 0~m-1 范围内的整数
//  0~m-1 范围内的整数称为排序关键字

// 计算出array中有多少个元素的排序关键字等于相同的某个值
// 比如关键字为 2，计算出array中有几个 2

// m:定义了数组array中元素的取值范围 0~m-1
function countKeysEqual(array, m) {

  // 创建一个空数组，长度为m，给每个元素赋值0
  // 为什么要有这一步，万一哪个值array里没有就会变成NaN
  let equal = [];
  for (let i = 0; i < m; i++) {
    equal[i] = 0;
  };

  for (let j = 0; j < array.length; j++) {
    // 把array中的元素作为equal数组的索引值
    // 该索引值在equal中对应的值为该元素在array中出现的次数
    let key = array[j];
    equal[key] += 1;
  }

  return equal;
}

// 计算有多少个排序关键字小于该值
// 比如数组为[0, 1, 1, 2]，就有三个排序关键字小于2
function countKeysLess(equal, m) {
  let less = [];
  less[0] = 0;
  for (let i = 1; i < m; i++) {
    // less[i] = equal[0] + equal[1] + ... + equal[i - 1]
    less[i] = less[i - 1] + equal[i - 1];
  }

  return less;
}

// 根据less可以得知元素在数组中的位置
// 重排数组
function rearrange(array, less, m) {
  let arrB = [];
  for (let i = 0; i < array.length; i++) {
    let key = array[i];
    // 有几个小于key的元素排在key前面，则为key值在arrB中的索引
    // 比如数组[0, 1, 1, 2]，有3个排序关键字小于2，则2的索引为3
    let index = less[key];
    arrB[index] = array[i];
    // 自增1，相同值的元素排在该值后一位
    less[key] += 1;
  }

  return arrB;
}

function countSort(array, m) {
  let equal = countKeysEqual(array, m);
  let less = countKeysLess(equal, m);
  let arrB = rearrange(array, less, m);
  return arrB;
}


let array = [4, 1, 5, 0, 1, 6, 5, 1, 5, 3];

countSort(array, 7);