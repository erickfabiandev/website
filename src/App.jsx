import Heard from './components/Heard/Heard'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <Heard />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>


  )
}

export default App
