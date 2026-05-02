import { Routes, Route ,useNavigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { useEffect } from 'react';
import Layout from './components/common/Layout'
import Home from './pages/home'
import About from './pages/about'
import Projects from './pages/projects'
import Skills from './pages/skills'
import Contact from './pages/contact'
import Login from './pages/login'
import Admin from './pages/admin'
import ProtectedRoute from './components/common/ProtectedRoute'
import './App.css'

function App() {
  const navigate = useNavigate();
   useEffect(() => {
    const handleKeyDown = (e) => {
      const isMac = navigator.platform.toUpperCase().includes('MAC');

      if (
        (isMac ? e.metaKey : e.ctrlKey) &&
        e.shiftKey &&
        e.key.toLowerCase() === 'l'
      ) {
        e.preventDefault();
        navigate('/login');
      }
    };
     window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin"
                  element={
                    <ProtectedRoute>
                      <Admin />
                    </ProtectedRoute>
                  }/>
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App

{/* <p className="text-xs text-gray-400">
  Admin access: Ctrl + Shift + L
</p> */}