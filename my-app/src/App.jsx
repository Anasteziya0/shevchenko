import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [theme, setTheme] = useState("thene");


  const handleClick = () => {
    if (theme === "тёмная") {
      setTheme("светлая")
    } else {
      setTheme("тёмная")
    }
  }

  if (theme === "тёмная"){
      return (
      <div style={{color: "white", backgroundColor: "black", width:"100%", padding:"0", height:"100vh", padding: "0", textAlign: "center"}}>
        <h5>Привет, я Вероника</h5>
        <div>На странице тёмная тема</div>
        <button onClick={handleClick}>Изменить тему</button>
      </div>
    )
  } else {
    return (
      <div style={{ backgroundColor: "white", width:"100%", padding:"0", height:"100vh", color:"black", textAlign: "center"}}>
          <h5>Привет, я Вероника</h5>
          <div>На странице светля тема</div>
          <button onClick={handleClick}>Изменить тему</button>
      </div>
    )
  }
}

export default App
