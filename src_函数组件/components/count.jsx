/**
 * 函数组件
 * 实现加、减、异步加方法
 */

import React, { useState } from 'react'

const valueRef = React.createRef()

function Count () {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>结果为：{ count } </p>
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
    setCount(count + selVal)
  }
  function decrement () {
    const selVal = valueRef.current.value * 1
    setCount(count - selVal)
  }
  function incrementAsync () {
    const selVal = valueRef.current.value * 1
    setTimeout(() => {
      setCount(count + selVal)
    }, 500)
  }
}

export default Count
