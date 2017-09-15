/**********************************************
 传入一个乱序的单层数组，
 数组元素为一个对象，根据对象元素 n: '111-222' 进行排序,
 以第一个数字为第一层数组，第二个数字为第二层数组，
 相同的元素放入同一个子数组中
 输出一个排好序的多层数组
 ***********************************************/

const compare = (property) => {
  return (obj1, obj2) => {
    const val1 = obj1[property]
    const val1One = parseInt(val1.split('-')[0])
    const val1Two = parseInt(val1.split('-')[1])
    const val2 = obj2[property]
    const val2One = parseInt(val2.split('-')[0])
    const val2Two = parseInt(val2.split('-')[1])
    if (val1One > val2One) {
      return 1
    } else if (val1One === val2One) {
      if (val1Two >= val2Two) {
        return 1
      } else {
        return -1
      }
    } else {
      return -1
    }
  }
}

const chNode = (arr) => {
  let current = ''
  let chArr = []
  let faArr = []

  arr.map((item, key) => {
    const currentTwo = item.n.split('-')[1]
    if (current === currentTwo) {
      chArr.push(item)

      // 最后一个元素有可能与当前元素一致有可能不一致
      if (key === arr.length - 1) {
        faArr.push(chArr)
      }

    } else {
      if (chArr.length) {
        faArr.push(chArr)
      }

      current = currentTwo
      chArr = [item]

      if (key === arr.length - 1) {
        faArr.push(chArr)
      }
    }
  })
  return faArr
}

// 先排序再分组
const faNode = (arr) => {
  console.log('传入')
  console.log(arr)
  const newArr = arr.sort(compare('n'))
  console.log('排序')
  console.log(newArr)

  let current = ''
  let chArr = []
  let faArr = []

  newArr.map((item, key) => {
    const currentOne = item.n.split('-')[0]
    if (current === currentOne) {
      chArr.push(item)

      // 最后一个元素有可能与当前元素一致有可能不一致
      if (key === newArr.length - 1) {
        faArr.push(chNode(chArr))
      }

    } else {
      if (chArr.length) {
        faArr.push(chNode(chArr))
      }

      current = currentOne
      chArr = [item]

      // 如果是最后一个元素
      if (key === newArr.length - 1) {
        faArr.push(chArr)
      }
    }
  })

  console.log('输出')
  console.log(faArr)
}


// const arr = [1,1,1,2,2,2,3,3,1,1,2,3,4,4,5,5,6,6]
// const arr = [ {n:3}, {n:1}, {n:2}, {n:3}, {n:1}, {n:2}, {n:3}, {n:2}, {n:1}, {n:23}, {n:2}]
// const arr = [ '130-120', '100-120', '100-100', '100-110', '110-120', '110-110', '120-100', '120-130', '100-120', '100-120', '100-110', '120-120', '120-110', '130-120' ]
const arr = [ {n:'130-120'}, {n:'100-120'}, {n:'100-100'}, {n:'100-110'}, {n:'110-120'}, {n:'110-110'}, {n:'120-100'}, {n:'120-130'}, {n:'100-120'}, {n:'100-120'}, {n:'100-110'}, {n:'120-120'} ]

faNode(arr)