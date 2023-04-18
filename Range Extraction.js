function solution(list) {
    const result = []
    let str = []
    for (let i = 0; i < list.length; i++) {
      if (list[i + 1] === list[i] + 1) {
        str.push(list[i])
      } else {
        if (str.length < 2) {
          result.push(...str, list[i])
        } else {
          result.push(str[0] + '-' + list[i])
        }
        str = []
      }
    }
    return result.join()
  }
  console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]));
  // "-6,-3-1,3-5,7-11,14,15,17-20"