import './App.scss'
import Home from './components/Home/Home'
import Heard from './components/heard/Heard'

function App() {

  return (
    <>
    <Heard/>
    <main>
      <Home/>
      <div style={{ display:'flex', alignItems:'center', justifyContent:'center', height:'100vh', fontSize:'30px'}}>
        <p>...Proximamente por subir ...</p>   
      </div>
    </main>
    <footer>

    </footer>
   
    </>
   
    
  )
}

export default App
