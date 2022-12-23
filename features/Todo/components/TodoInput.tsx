import { useState } from 'react'
import { useRecoilState } from 'recoil'
import todoState from '../../../states/todos'

const TodoInput: React.FC = () => {
  const [todos, setTodos] = useRecoilState(todoState)
  const [text, setText] = useState('')

  return (
    <>
      <div className="flex flex-col w-[120px] h-[160px]">
        <input
          className="w-full border border-sky-800 mb-2 font-xs"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button
          className="text-[10px] w-full bg-sky-300 text-sky-900"
          onClick={() => {
            setTodos([
              ...todos,
              {
                text
              }
            ])

            setText('')
          }}
        >
          Add Todo
        </button>
      </div>
    </>
  )
}

export default TodoInput
