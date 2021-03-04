/**
 * 生成action对象
 */

import { INCREMENT, DECREMENT } from '../constant'

export const increment = data => ({ type: INCREMENT, data })
export const decrement = data => ({ type: DECREMENT, data })

// 异步action(非必须)。 指action的值为函数，一般在异步action中调用同步action
export const incrementAsync = (data, time) => {
  // 具备两个函数参数：dispatch和getState
  return (dispatch, getState) => {
    setTimeout(() => {
      dispatch(increment(data))
    }, time)
  }
}
