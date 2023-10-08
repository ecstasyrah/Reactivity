
import './App.css'
import './Pages/des.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import FirstPage from './Pages/FirstPage'
import { useState } from 'react'
import Todo from './Pages/Todo'
import ClassList from './Pages/ClassList'
import DogAPI from './Pages/dogAPI'
import ContactBook from './Pages/ContactBook'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  const Protected = ({isLoggedIn,children})=>{
      if(isLoggedIn==true){
        return children
      } else{
        return(
          <>
          <h1>Not Allowed</h1>
          </>
        )
      }
  }

  return (
    <div className='main'>
      <BrowserRouter>
      <header>
        <nav>
          <div className='titles'>
            <div className='Routing'>
              <Link to="/">Home</Link>
            </div>
            <div className='first'>
              <Link to="/Classlist">1st Reactivity</Link>
            </div>
            <div className='second'>
              <Link to="/Todo">2nd Reactivity</Link>
            </div>
            <div className='fourth'>
              <Link to="/DogAPI">4th Reactivity</Link>
            </div>
            <div className='fifth'>
              <Link to="/ContactBook">5th Reactivity</Link>
            </div>
          </div>
        </nav>
      </header>
        <Routes>
          <Route path="/" element={ <FirstPage/>}/>
          <Route path="/Classlist" element={<ClassList/>}/>
          <Route path="/Todo" element={<Todo/>}/>
          <Route path="/DogAPI" element={<DogAPI/>}/>
          <Route path="/ContactBook" element={<ContactBook/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
