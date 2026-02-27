import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Compass, Search } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Tours', path: '/tours' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const headerBg = isScrolled || !isHome ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100' : 'bg-transparent'
  const textColor = isScrolled || !isHome ? 'text-primary' : 'text-white'
  const navItemClass = isScrolled || !isHome ? 'text-gray-600 hover:text-primary transition-colors' : 'text-white/80 hover:text-white transition-colors'

  return (
    <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${headerBg} ${isScrolled || !isHome ? 'py-4' : 'py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Minimalist Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="text-accent">
            <Compass className="w-8 h-8" />
          </div>
          <span className={`text-xl font-heading font-black tracking-tight ${textColor}`}>
            Wander<span className="text-accent underline decoration-gold/50">Vista</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-bold tracking-tight uppercase ${navItemClass} ${location.pathname === link.path ? 'text-accent' : ''
                }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className={`p-2 transition-colors ${textColor} hover:text-accent`}>
            <Search className="w-5 h-5" />
          </button>
          <Link
            to="/booking"
            className="btn-primary py-3 px-8 text-xs font-bold uppercase tracking-wider !rounded-full"
          >
            Start a Journey
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 relative z-[110]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-primary" />
          ) : (
            <Menu className={`w-6 h-6 ${textColor}`} />
          )}
        </button>
      </div>

      {/* Modern Minimalist Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="fixed inset-0 bg-white z-[100] lg:hidden flex flex-col justify-center items-center p-10"
          >
            <div className="flex flex-col space-y-10 text-center">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * idx }}
                  key={link.name}
                >
                  <Link
                    to={link.path}
                    className="text-4xl font-heading font-black text-primary hover:text-accent transition-colors block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="pt-10"
              >
                <Link
                  to="/booking"
                  className="btn-accent px-12 py-5 !rounded-full"
                >
                  Book Your Trip
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header