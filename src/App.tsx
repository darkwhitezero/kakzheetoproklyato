import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Наш проект</h1>
      <img src="https://images.steamusercontent.com/ugc/14307771656595998386/599210DC64A4BB330E603088D7EDC9833967FA3D/?imw=512&imh=341&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true"
        alt="Наш проект" className="my-image"></img>
    </>
  )
}
