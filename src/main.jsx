import ReactDOM from 'react-dom/client'
import './index.scss'
import { ThemeProvider } from './store/ThemeContext.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <RouterProvider router = {router}/> 
    </ThemeProvider>
    
)
