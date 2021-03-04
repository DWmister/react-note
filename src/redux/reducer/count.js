/**
 * Reducers 纯函数
 * 接收两个参数，分别为：之前的状态(previousState)和动作对象(action)
 */

const initState = 1

export default function countReuder (preState = initState, action) {
  const { type, data } = action
  switch (type) {
    case 'increment':
      return preState + data
    case 'decrement':
      return preState - data
    default:
      return preState
  }
}
