import React from 'react'
import { Input } from 'antd'
import _ from 'lodash'

class ThrottleDemo extends React.Component {
  constructor () {
    super()
    // 添加监听器
    // lodash实现
    this.lodashThrottle = _.throttle(this.lodashThrottle, 1000)
    this.lodashDebounce = _.debounce(this.lodashDebounce, 1000)
    // 手动实现
    this.selfThrottle = this.throttle2(this.selfThrottle, 1000)
    this.selfDebounce = this.debounce(this.selfDebounce, 1000)
  }

  // 节流
  lodashThrottle = (e, arg) => {
    console.log('lodash节流value :: ', e.target.value, arg)
  }

  // 防抖
  lodashDebounce = (e, arg) => {
    console.log('lodash防抖value :: ', e.target.value, arg)
  }

  // 手动实现-防抖
  debounce = (fn, delay) => {
    let timer
    return (...args) => {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, args)
      }, delay)
    }
  }

  selfDebounce = (e, arg) => {
    console.log('手动实现防抖value :: ', e.target.value, arg)
  }

  // 手动实现-节流 首次不执行
  throttle = (fn, delay) => {
    let timer
    return function (...args) {
      if (timer) return
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, delay)
    }
  }

  // 手动实现-节流 首次执行
  throttle2 = (fn, delay) => {
    let last = 0
    return function () {
      const curr = +new Date()
      if (curr - last > delay) {
        fn.apply(this, arguments)
        last = curr
      }
    }
  }

  selfThrottle = (e, arg) => {
    console.log('手动实现防抖value :: ', e.target.value, arg)
  }

  render () {
    return (
      <>
        <div>lodash-ThrottleDemo</div>
        <Input onChange={ e => this.lodashThrottle(e, 'self-args') } style={{ width: '50%' }} placeholder="lodash-ThrottleDemo"/>
        {/* todo: 分析为何不能直接这样执行，还需要初始化的时候先throttle化 */}
        {/* <Input onChange={ e => _.throttle(this.lodashThrottle, 1000)(e) } style={{ width: '50%' }} placeholder="节流案例"/> */}
        <div>lodash-DebounceDemo</div>
        <Input onChange={ e => this.lodashDebounce(e, 'self-args') } style={{ width: '50%' }} placeholder="lodash-DebounceDemo"/>
        <br/>
        <div>self-ThrottleDemo</div>
        <Input onChange={ e => this.selfThrottle(e, 'self-args') } style={{ width: '50%' }} placeholder="self-ThrottleDemo"/>
        <div>self-DebounceDemo</div>
        <Input onChange={ e => this.selfDebounce(e, 'self-args') } style={{ width: '50%' }} placeholder="self-DebounceDemo"/>
      </>
    )
  }
}

export default ThrottleDemo
