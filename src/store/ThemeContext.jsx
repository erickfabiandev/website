import  { createContext, useState } from 'react';

export const ThemeContext = createContext()

export const ThemeProvider = ({children}) =>{
  const [modeDark, setModeDark] = useState(false)

  const handleTheme = ()=>{
    setModeDark (!modeDark)
  }

  const dataProvider = {
    modeDark,
    handleTheme
  }

  return (
  <ThemeContext.Provider 
    value={dataProvider}>
    {children}
  </ThemeContext.Provider>
  )
}