import './App.css'
import { RoutesComponent } from './routes/Routes'
import { ThemeProvider } from 'styled-components'
import { getTheme, Themes } from '../../styles/theme'
import { GlobalStyle } from '../../styles/globalStyle'

export const App = () => {
  const currentTheme = ()=>{
    let changeTheme: any
    const Theme = localStorage.getItem("currentTheme");
    if(!Theme){
      localStorage.setItem('lightTheme',currentTheme)
    }
    if(Theme === "lightTheme"){
        changeTheme = Themes.DARK
    }else{
        changeTheme = Themes.LIGHT
    }
    return { ...getTheme(changeTheme), selected: changeTheme }
  }
  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle />
      <RoutesComponent />
    </ThemeProvider>
  )
}
