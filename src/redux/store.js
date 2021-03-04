/**
 * 暴露store，整个应用只有一个store
 */

// createStore: 用于生成store
// applyMiddleware: 使用包含自定义功能的 middleware 来扩展 Redux
import { createStore, applyMiddleware } from 'redux'
// 引入reducers
import reducers from './reducer'
// 引入redux-thunk用于支持异步action
import ReduxThunk from 'redux-thunk'
// 引入redux的chrome的扩展程序
import { composeWithDevTools } from 'redux-devtools-extension'

// createStore(reducer, [preloadedState], enhancer)
export default createStore(reducers, composeWithDevTools(applyMiddleware(ReduxThunk)))
