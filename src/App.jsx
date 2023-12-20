import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SingleMealPage from './pages/SingleMealPage'
import ErrorPage from './pages/ErrorPage'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {


  return (
    <div className='container'>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/meal/:mealId' element={<SingleMealPage />} />cd
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <Footer />      
        </Router>
    </div>
  )
}

export default App
