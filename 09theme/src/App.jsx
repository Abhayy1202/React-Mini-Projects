import { useEffect, useState } from 'react'

import './App.css'
import ThemeBtn from './components/ThemeBtn.jsx'
import Card from './components/Card.jsx'
import { ThemeProvider } from './context/Theme'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightmode =()=>{
    setThemeMode('light')
  }
  const darkmode =()=>{
    setThemeMode('dark')
  }

  //actual theme change
  useEffect(()=>{
    var theme=document.querySelector('html').classList
    theme.remove("light", "dark");
    theme.add(themeMode)

  },[themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightmode, darkmode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App
