import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './pages/Home'
import Results from './pages/Results'
import Survey from './pages/Survey'
import Error from './Components/Error'
import Freelances from './pages/Freelances'

function App() {
  return (
    <div className='App'>
        <Header />
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/survey' element={<Survey />}/>
            <Route path='/survey/:questionNumber' element={<Survey />}/>
            <Route path='/results' element={<Results />}/>
            <Route path='/freelances' element={<Freelances />}/>
            <Route path='/*' element={<Error />} />
        </Routes>
    </div>
  )
}

export default App