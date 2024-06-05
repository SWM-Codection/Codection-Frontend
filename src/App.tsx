import { Route, Routes } from 'react-router-dom'
import { NotFoundPage } from './pages/errors/NotFoundPage'
import { LandingPage } from './pages/LandingPage'

export const App = () => {

  return (
    <Routes>
      <Route path="/" Component={LandingPage}/>
      <Route path='*' Component={NotFoundPage}/>
    </Routes>
  )
}