import { useRecoilState } from 'recoil'
import todoState from '../../../states/todos'

const TodoList: React.FC = () => {
  const [todos, setTodos] = useRecoilState(todoState)

  return (
    <>
      <div className="flex border border-zinc-700 w-[90px] h-[160px]">
        <ul className="w-full border-collapse">
          {todos.map((todo, index) => {
            return (
              <li key={index} className="">
                {todo.text}
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default TodoList
