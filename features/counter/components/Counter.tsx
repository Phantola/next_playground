import { useRecoilState } from 'recoil'
import counterState from '../../../states/counter'

const Counter: React.FC = () => {
  const [count, setCount] = useRecoilState(counterState)

  return (
    <div className="w-[100px] border-2 border-indigo-500 pl-5">
      <p className="text-indigo-400">Count : {count}</p>

      <button
        className="w-[30px] border border-indigo-300 bg-indigo-700 text-indigo-100"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        className="w-[30px] border border-purple-300 text-purple-100 bg-purple-700"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
    </div>
  )
}

export default Counter
