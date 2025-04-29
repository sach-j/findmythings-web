import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Features from './pages/Features'
import Support from './pages/Support'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import PageViewTracker from './components/PageViewTracker'
import CookieConsentBanner from './components/CookieConsent'

function App() {
  // Use basename only in production on github pages
  const basePath = window.location.hostname === 'sach-j.github.io' ? '/findmythings-web' : '';
  
  return (
    <Router basename={basePath}>
      <div className="min-h-screen flex flex-col">
        <PageViewTracker />
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsentBanner />
      </div>
    </Router>
  )
}

export default App
