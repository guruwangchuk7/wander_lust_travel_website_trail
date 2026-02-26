import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold">WanderVista</div>
      <nav className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/destinations">Destinations</Link>
        <Link to="/tours">Tours</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header