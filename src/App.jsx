import './App.scss'
import Home from './components/Home/Home'
import Heard from './components/Heard/Heard'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
    <Heard/>
    <main>
      <Home/>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', height:'100vh', fontSize:'30px'}}>
        <p>...Proximamente por subir proyectos...</p>   
      </div>
    </main>
    <Footer/>  
    </>
   
    
  )
}

export default App
