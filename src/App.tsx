import './App.css'
import Footer  from './components/Footer'
import Header from './components/Header'
import Nav from './components/Nav'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Body from './components/Body'
import Logo from './components/ui/logo'
import ManagementRole from './components/organization'

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Logo />
      <Header />
      <Routes>
        <Route path="/organization" element={<ManagementRole />}>
        </Route>

        <Route path="/employees" element={<Body />}>
        </Route>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
