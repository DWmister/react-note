/* eslint-disable react/prop-types */
/**
 * 使用redux
 * 实现加、减、异步加方法
 * dispatch 触发action
 */

import React from 'react'
// 引入生成action对象的方法
import { increment, decrement, incrementAsync } from '../redux/action/count'
// 从react-redux引入connect，生成容器组件 用于连接容器组件和UI组件
import { connect } from 'react-redux'

const valueRef = React.createRef()

function Count (props) {
  return (
    <>
      <h1>这个是Count组件</h1>
      <h6>Person组件列表长度为： { props.person.length }</h6>
      <p>结果为：{ props.count } </p>
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
    props.increment(selVal)
  }
  function decrement () {
    const selVal = valueRef.current.value * 1
    props.decrement(selVal)
  }
  function incrementAsync () {
    const selVal = valueRef.current.value * 1
    props.incrementAsync(selVal, 500)
  }
}

/**
 * connect(mapStateToProps, mapDispatchToProps)(UI组件)
 * mapStateToProps 映射状态 -- 对象格式
 * mapDispatchToProps 映射操作状态的方法 -- 对象格式
 * UI组件只负责UI的渲染，和redux无交互
 * 容器组件负责和redux交互，可使redux的API，具备内部状态，并把数据通过props传递给UI组件
 */
export default connect(
  state => {
    return {
      count: state.count,
      person: state.person
    }
  },
  { increment, decrement, incrementAsync }
)(Count)
