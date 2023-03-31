import React from 'react'
import Header from './components/Header'
import Crew from './sections/Crew'
import Destination from './sections/Destination'
import Home from './sections/Home'
import Technology from './sections/Technology'

const App = () => {
  return (
    <div className='container'>
        <Header />
        <div className='wrapper'>
                <Home />
                <Destination />
                <Crew />
                <Technology />
        </div>
    </div>
  )
}

export default App
