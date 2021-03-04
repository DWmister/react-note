/**
 * combineReducers
 * 合并多个reducer，并把它们返回的结果合并成一个state对象。
 */
import { combineReducers } from 'redux'
import count from './count'
import person from './person'

export default combineReducers({
  count,
  person
})
