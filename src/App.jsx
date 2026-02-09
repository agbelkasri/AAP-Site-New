import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Locations from './pages/Locations'
import Employment from './pages/Employment'
import Contact from './pages/Contact'
import SupplierPortal from './pages/SupplierPortal'

function App() {
  const location = useLocation()

  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/employment" element={<Employment />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/supplier-portal" element={<SupplierPortal />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
