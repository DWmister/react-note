/* eslint-disable react/prop-types */
// import { useRef } from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../redux/action/person'

function Person (props) {
  // const inputRef = useRef()
  let inputRef = ''

  return (
    <>
      <h1>这个是Person组件</h1>
      <h6>Count组件的结果为： { props.count }</h6>
      <div>
        {/* <input type="text" placeholder="输入姓名" ref={ inputRef }/> */}
        <input type="text" placeholder="输入姓名" ref={ v => { inputRef = v } }/>
        &nbsp;
        <button onClick={addPerson}>点击添加</button>
        &nbsp;
        <ul>
          {
            props.name.map((name, idx) => (
              <li key={ idx }>{ name }</li>
            ))
          }
        </ul>
      </div>
    </>
  )

  function addPerson () {
    props.addPerson(inputRef.value)
    inputRef.value = ''
    // props.addPerson(inputRef.current.value)
    // inputRef.current.value = ''
  }
}

// export default Person
export default connect(
  state => ({
    name: state.person,
    count: state.count
  }),
  { addPerson }
)(Person)
