import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Message} from './Components/Message/message'
import './Components/Message/message_style.css'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Message message={"Это что-то новенькое!"}/>
      </div>
    </>
  )
}

export default App
