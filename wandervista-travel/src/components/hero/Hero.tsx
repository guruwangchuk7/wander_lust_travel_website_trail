import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Calendar, ArrowRight } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    navigate('/destinations')
  }

  return (
    <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden">
      {/* Minimalist Visual: Image background instead of busy video for cleaner look */}
      <div className="absolute inset-0 z-0">
        <img
          src="/paro-taksang.jpg"
          className="w-full h-full object-cover scale-105"
          alt="Bhutan"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-transparent to-black/20 z-20" />
      </div>

      {/* Content Container */}
      <div className="relative z-30 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center space-x-2 text-white/90 text-[10px] font-bold uppercase tracking-[0.4em] mb-12"
        >
          <div className="w-8 h-px bg-accent" />
          <span>The Kingdom of Bhutan</span>
          <div className="w-8 h-px bg-accent" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-white text-6xl md:text-9xl font-heading font-black mb-10 leading-tight tracking-tighter"
        >
          Journey to <br />
          <span className="italic">Happiness</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-white/80 text-lg md:text-xl font-medium mb-16 max-w-2xl mx-auto leading-relaxed"
        >
          Authentic adventures through the dragon kingdom. Explore sacred valleys, ancient fortresses, and untouched nature.
        </motion.p>

        {/* Minimalist Search Widget */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onSubmit={handleSearch}
          className="flex flex-col md:flex-row items-stretch gap-0 bg-white shadow-2xl rounded-2xl overflow-hidden max-w-4xl mx-auto border border-gray-100"
        >
          <div className="flex-1 flex items-center px-8 py-6 border-r border-gray-100 group transition-colors hover:bg-gray-50/50">
            <MapPin className="w-5 h-5 text-accent mr-4" />
            <input
              type="text"
              placeholder="Search valleys..."
              className="bg-transparent text-primary font-bold outline-none placeholder-gray-400 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex-1 flex items-center px-8 py-6 group transition-colors hover:bg-gray-50/50">
            <Calendar className="w-5 h-5 text-accent mr-4" />
            <select className="bg-transparent text-primary font-bold outline-none appearance-none w-full cursor-pointer">
              <option>Any Season</option>
              <option>Spring</option>
              <option>Autumn</option>
            </select>
          </div>
          <button className="bg-primary hover:bg-black text-white px-10 py-6 transition-all flex items-center justify-center gap-3 font-bold uppercase tracking-widest text-xs">
            <span>Explore</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.form>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 cursor-pointer text-white/50 hover:text-white transition-colors flex flex-col items-center gap-2"
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  )
}

export default Hero