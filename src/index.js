import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import store from './redux/store'
import { Provider } from 'react-redux'
// antd样式
import 'antd/dist/antd.css'

/**
 * Provider
 * 为组件提供state
 * 放到app外层，则app的所有子组件默认都可取到state。
 * 原理为react组件的context属性
 */
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
