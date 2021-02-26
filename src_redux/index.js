import React from 'react'
import ReactDom from 'react-dom'
import App from './App'
import store from './redux/store'

ReactDom.render(
  <App />,
  document.getElementById('root')
)

console.log(store)
// subscribe(listener) 添加变化监听器检测redux中状态的变化，每当 dispatch action时都会执行
store.subscribe(() => {
  ReactDom.render(
    <App />,
    document.getElementById('root')
  )
})
