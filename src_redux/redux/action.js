/**
 * 生成action对象
 */

import { INCREMENT, DECREMENT } from './constant'

export const incrementAction = data => ({ type: INCREMENT, data })
export const decrementAction = data => ({ type: DECREMENT, data })

// 异步action(非必须)。 指action的值为函数，一般在异步action中调用同步action
export const incrementActionAsync = (data, time) => {
  // 具备两个函数参数：dispatch和getState
  return (dispatch, getState) => {
    console.log(dispatch, getState())
    setTimeout(() => {
      dispatch(incrementAction(data))
    }, time)
  }
}
