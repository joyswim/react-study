import { useReducer } from 'react'

const reducer = (state, action) => {
  return {
    ...state,
    [action.name]: action.value
  }
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickName: ''
  })
  const { name, nickName } = state
  const onChange = (e) => {
    return dispatch(e.target)
  }

  return (
    <div>
      <div>
        <input
          name="name"
          value={name}
          onChange={onChange}
          placeholder="이름을 입력하세요"
        />
      </div>
      <div>
        <input
          name="nickName"
          value={nickName}
          onChange={onChange}
          placeholder="닉네임을 입력하세요"
        />
      </div>
      <br />
      <div>
        <div>
          <b>이름 : </b> {name}
        </div>
        <div>
          <b>닉네임 : </b> {nickName}
        </div>
      </div>
    </div>
  )
}

export default Info
