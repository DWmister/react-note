/**
 * person组件的Reducers 纯函数
 * 接收两个参数，分别为：之前的状态(previousState)和动作对象(action)
 */

const initState = ['张三']

export default function countReuder (preState = initState, action) {
  const { type, data } = action
  switch (type) {
  case 'addPerson':
    return [data, ...preState]
  default:
    return preState
  }
}
