import dayjs from 'dayjs'
import { useState } from 'react'

const Timer: React.FC = () => {
  const [time, setTime] = useState(dayjs().format('YYYY-MM-DD HH:mm:ss'))

  setInterval(() => {
    setTime(dayjs().format('YYYY-MM-DD HH:mm:ss'))
  }, 1000)

  return (
    <>
      <div className="">
        <p className="text-indigo-500">{time}</p>
      </div>
    </>
  )
}

export default Timer
