import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { ThemeProvider } from './store/ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <App/> 
    </ThemeProvider>
    
)
