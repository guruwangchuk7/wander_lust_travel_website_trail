import { Link } from 'react-router-dom'
import { Instagram, Facebook, Twitter, ArrowUpRight } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24 border-b border-gray-100">
          {/* Brand Intro */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <Link to="/" className="flex items-center space-x-3 mb-10 group">
              <Compass className="w-8 h-8 text-accent animate-spin-slow" />
              <span className="text-3xl font-heading font-black tracking-tighter text-primary">
                Wander<span className="text-accent underline decoration-gold/50">Vista</span>
              </span>
            </Link>

            <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-sm mb-12">
              Authentic journeys into the Land of the Thunder Dragon. Expert-led, luxury, and cultural experiences.
            </p>

            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <Link key={i} to="#" className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Links Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 mb-10">Directory</h4>
              <ul className="space-y-6">
                {['Home', 'Destinations', 'Tours', 'About'].map(link => (
                  <li key={link}>
                    <Link to={`/${link === 'Home' ? '' : link.toLowerCase()}`} className="text-primary hover:text-accent transition-all font-bold text-sm tracking-tight group flex items-center">
                      {link}
                      <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 mb-10">Kingdom Info</h4>
              <ul className="space-y-6">
                {['Visa Policy', 'Cultural Ethics', 'Best Seasons', 'GNH Data'].map(link => (
                  <li key={link}>
                    <Link to="#" className="text-primary hover:text-accent transition-all font-bold text-sm tracking-tight">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-gray-300 mb-10">Base Depot</h4>
              <ul className="space-y-6">
                <li className="text-sm font-bold text-primary">Thimphu, Bhutan</li>
                <li className="text-sm font-bold text-primary italic underline decoration-accent/20">explore@wandervista.bt</li>
                <li className="text-sm font-bold text-primary">+975 2 334567</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Closing Minimalist Bar */}
        <div className="pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300">© {new Date().getFullYear()} WanderVista</p>
            <div className="hidden md:block w-px h-6 bg-gray-100" />
            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-300">Sustainable Travel Certified</p>
          </div>

          <div className="flex space-x-12">
            <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-300 hover:text-accent">Privacy Ops</Link>
            <Link to="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-300 hover:text-accent">Legal Manifest</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Compass } from "lucide-react"
export default Footer