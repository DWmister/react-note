/**
 * 使用redux
 * 实现加、减、异步加方法
 * dispatch 触发action
 */

import React from 'react'
// 引入store
import store from '../redux/store'
// 引入生成action对象的方法
import { incrementAction, decrementAction, incrementActionAsync } from '../redux/action'

const valueRef = React.createRef()

function Count () {
  return (
    <>
      <p>结果为：{ store.getState() } </p>
      <select ref={ valueRef }>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      &nbsp;
      &nbsp;
      <button onClick={ () => increment() }>+</button>
      &nbsp;
      <button onClick={ () => decrement() }>-</button>
      &nbsp;
      <button onClick={ () => incrementAsync() }>异步加</button>
    </>
  )

  function increment () {
    const selVal = valueRef.current.value * 1
    store.dispatch(incrementAction(selVal))
  }
  function decrement () {
    const selVal = valueRef.current.value * 1
    store.dispatch(decrementAction(selVal))
  }
  function incrementAsync () {
    const selVal = valueRef.current.value * 1
    store.dispatch(incrementActionAsync(selVal, 500))
  }
}

export default Count
