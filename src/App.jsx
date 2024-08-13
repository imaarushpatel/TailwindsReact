import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'


function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    username: "theaarushpatel",
    age: 19
  }

  let newArr = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400  text-black p-3 rounded-xl mb-4 ' >TAILWIND TEST</h1>
      <Card username="Donate" btnText="visit me" />
      <Card username= "Iloveu" btnText="love me"/>
      <Card username= "Dont Hate" btnText= "hate me" />
    
    </>
  )
}

export default App
