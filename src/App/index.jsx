
import './App.css'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { Outlet } from 'react-router-dom'

export function App() {


  return (
    <div className="App">
         
         <header>
          <Header/>
         </header>
              <main>
                <Outlet/>
              </main>



          <Footer/>
    </div>
  )
}

