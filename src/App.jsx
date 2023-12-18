import { useReducer } from 'react'
import Info from './components/Info'

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 }
    case 'DECREMENT':
      return { value: state.value - 1 }
    default:
      return state
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 })

  return (
    <div>
      <p>현재 카운터 값 : {state.value}</p>
      <button
        type="button"
        onClick={dispatch({ type: 'INCREMENT' })}>
        +
      </button>
      <button
        type="button"
        onClick={dispatch({ type: 'DECREMENT' })}>
        -
      </button>
    </div>
  )
}

const App = () => {
  return <Info />
}

export default App
