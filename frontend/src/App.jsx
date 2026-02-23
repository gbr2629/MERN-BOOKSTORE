import React from 'react'
import {Route ,Routes} from 'react-router'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import BookDetailPages from './pages/BookDetailPages'


const App = () => {
  return (
    <div>
        <Routes>
            <Route path ="/" element={<HomePage />}/>
            <Route path ="/Create" element={<CreatePage />}/>
            <Route path ="/book/:id" element={<BookDetailPages />}/>
            

        </Routes>
    </div>
  )
}

export default App
