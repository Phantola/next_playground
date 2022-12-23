import { atom } from 'recoil'

interface Todo {
  text: string
}

const todoState = atom<Todo[]>({
  key: 'todoState',
  default: []
})

export default todoState
