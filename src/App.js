import Count from './components/count'
import Person from './components/person'
import ThrottleDemo from './components/throttle'

import { Divider } from 'antd'

function App () {
  return (
    <div>
      <Divider>redux 多状态demo</Divider>
      <Count />
      <hr/>
      <Person />
      <Divider>react lodash 防抖/节流demo</Divider>
      <ThrottleDemo />
    </div>
  )
}

export default App
