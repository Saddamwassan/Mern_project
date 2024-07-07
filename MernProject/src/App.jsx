import React from 'react'
import Home from './pages/Home'
import Nav from './components/Nav'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import ArticleList from './pages/ArticleList'
function App() {
  return (
    <Router>
      <Nav />
      <div className='text-center'>
      <Routes>
      <Route  path='/' element = {<Home />}/>
      <Route  path='/Services/:title' element = {<Services />}/>
      <Route  path='/Articles' element = {<ArticleList />}/>
      <Route  path='/AboutUs' element = {<AboutUs />}/>

      </Routes>
      </div>    
    </Router>
  )
}

export default App