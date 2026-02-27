import { motion } from "framer-motion"
import Hero from "../components/hero/Hero"
import DestinationCard from "../components/destinations/DestinationCard"
import { destinations } from "../data/destinations"
import FeaturedDeals from "../components/sections/FeaturedDeals"
import TravelCategories from "../components/sections/TravelCategories"
import Testimonials from "../components/sections/Testimonials"
import { ArrowRight, Star, ShieldCheck, Zap } from "lucide-react"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="bg-[#FAFAFA] overflow-x-hidden">
      <Hero />

      {/* Trust Factors - Minimalist */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {[
            { icon: Star, label: "Experience Excellence", detail: "Top Rated Bhutan Travel" },
            { icon: ShieldCheck, label: "Certified Luxury", detail: "Licensed Local Operators" },
            { icon: Zap, label: "Seamless Booking", detail: "Instant Journey Confirmation" },
            { icon: Compass, label: "Local Expertise", detail: "Guides from the Valley" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <div className="w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary">
                <item.icon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-sm text-primary uppercase tracking-tight">{item.label}</h4>
                <p className="text-xs text-gray-400 mt-1 font-medium">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Curation Section - Minimalist */}
      <section className="section-padding px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <span className="text-accent font-bold uppercase tracking-[0.3em] text-xs mb-6 block font-body">Curation</span>
            <h2 className="text-5xl md:text-7xl font-heading mb-8 tracking-tighter leading-tight">
              Paths of the <span className="italic font-normal">Dragon</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl font-medium">
              Handpicked itineraries that reveal the authentic heartbeat of Bhutan. From sacred Dzongs to untouched glacial valleys.
            </p>
          </div>
          <Link
            to="/destinations"
            className="group flex items-center space-x-3 text-primary font-bold text-sm uppercase tracking-widest border-b-2 border-primary/10 pb-2 hover:border-primary transition-all"
          >
            <span>Full Inventory</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.slice(0, 3).map((dest, idx) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <DestinationCard
                id={dest.id}
                name={dest.name}
                image={dest.image}
              />
            </motion.div>
          ))}
        </div>
      </section>

      <div className="space-y-32 mb-32">
        <FeaturedDeals />
        <TravelCategories />
        <Testimonials />
      </div>

      {/* Minimalism Newsletter */}
      <section className="section-padding px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-heading mb-10 tracking-tight">Stay Enveloped.</h2>
          <p className="text-gray-500 text-lg md:text-xl mb-16 font-medium max-w-xl mx-auto">
            Limited updates on seasonal festivals, permit availability, and luxury collection openings.
          </p>

          <form className="max-w-2xl mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Identity Email"
              className="flex-1 bg-white border border-gray-200 rounded-[2rem] px-8 py-5 outline-none focus:border-accent transition-colors font-bold text-center md:text-left"
            />
            <button
              className="bg-primary text-white px-10 py-5 rounded-[2rem] font-bold uppercase tracking-widest text-xs hover:bg-black transition-colors"
              onClick={(e) => { e.preventDefault(); alert('Manifested.') }}
            >
              Join the Circle
            </button>
          </form>
          <p className="mt-8 text-gray-300 text-[10px] font-bold uppercase tracking-widest">Privacy Respect Protocol</p>
        </div>
      </section>
    </div>
  )
}

import { Compass } from "lucide-react"
export default Home