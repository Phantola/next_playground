import Timer from '../features/timer/components/Timer'
import TodoInput from '../features/Todo/components/TodoInput'
import TodoList from '../features/Todo/components/TodoList'

export default function Todo() {
  return (
    <div className="px-10">
      <h1>Hello! Phantola</h1>
      <Timer />
      <div className="flex flex-nowrap gap-2">
        <TodoList />
        <TodoInput />
      </div>
    </div>
  )
}
