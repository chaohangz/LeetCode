/**********************************************
传入一个乱序的单层数组，
 数组元素为横杠隔开的两个数字——'111-222',
 以第一个数字为第一层数组，第二个数字为第二层数组，
 相同的元素放入同一个子数组中
 输出一个排好序的多层数组
***********************************************/
const chNode = (arr) => {
  let current = ''
  let chArr = []
  let faArr = []

  arr.map((item, key) => {
    const currentTwo = item.split('-')[1]
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
  const newArr = arr.sort()
  console.log('传入')
  console.log(newArr)

  let current = ''
  let chArr = []
  let faArr = []

  newArr.map((item, key) => {
    const currentOne = item.split('-')[0]
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
const arr = [ '130-120', '100-120', '100-100', '100-110', '110-120', '110-110', '120-100', '120-130', '100-120', '100-120', '100-110', '120-120', '120-110', '130-120' ]
faNode(arr)