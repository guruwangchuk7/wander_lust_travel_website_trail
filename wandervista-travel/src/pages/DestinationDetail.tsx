import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { MapPin, ArrowLeft, Calendar, Users, Shield, Clock, MessageSquare, Heart, Share2, Star, Globe, ArrowRight } from "lucide-react"
import { useParams } from "react-router-dom"
import { destinations } from "../data/destinations"
import { useState, useEffect } from "react"

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const destination = destinations.find(d => d.id === Number(id))
  const [activeTab, setActiveTab] = useState('overview')

  // Smooth scroll to top on enter
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!destination) return <div className="p-20 text-center text-2xl font-black text-primary">Destination missed. Back to Home?</div>

  const itinerary = [
    { day: "01", title: "Arrival in the Land of Thunder Dragon", detail: "Traditional welcome at Paro International Airport. Private luxury transfer to your valley-view suite. Welcome dinner with cultural performance." },
    { day: "02", title: "Sacred Monasteries & Hidden Arts", detail: "Early morning meditation session at Kyichu Lhakhang. Exclusive access to temple murals and traditional thangka painting workshop." },
    { day: "03", title: "Himalayan Ridge Expedition", detail: "A guided hike through rhododendron forests to a mountain monastery. High-altitude picnic with panoramic Himalayan peaks." },
    { day: "04", title: "Departure & Blessings", detail: "Morning prayer ceremony for safe travels. Final souvenir shopping at the local craft bazaar and transfer to Paro Airport." },
  ]

  return (
    <div className="bg-[#FCFCFC] min-h-screen">
      {/* Immersive Header */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-primary/80" />

        {/* Navigation Overlays */}
        <div className="absolute top-32 left-10 md:left-20 z-30">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-3 text-white/70 hover:text-white transition group"
          >
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition">
              <ArrowLeft className="w-6 h-6" />
            </div>
            <span className="font-black text-sm uppercase tracking-widest">Return</span>
          </button>
        </div>

        <div className="absolute bottom-20 left-10 md:left-20 right-10 md:right-20 z-30">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-10">
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-3 text-gold mb-6"
              >
                <div className="bg-gold text-primary px-3 py-1 rounded-lg text-xs font-black uppercase tracking-widest italic shadow-xl">Rare Experience</div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-gold" />)}
                </div>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-9xl text-white font-black tracking-tighter leading-none"
              >
                {destination.name}
              </motion.h1>
            </div>

            <div className="flex items-center space-x-4">
              <button className="w-16 h-16 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl">
                <Heart className="w-6 h-6" />
              </button>
              <button className="w-16 h-16 rounded-[2rem] bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all duration-500 shadow-2xl">
                <Share2 className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-12 gap-20">
        {/* Main Content Area (8 cols) */}
        <div className="lg:col-span-8">
          {/* Custom Tabs */}
          <div className="flex space-x-12 border-b border-gray-100 mb-16 overflow-x-auto scrollbar-hide">
            {['overview', 'itinerary', 'amenities', 'reviews'].map(tab => (
              <button
                key={tab}
                className={`pb-6 relative font-black text-sm uppercase tracking-[0.2em] transition-all whitespace-nowrap ${activeTab === tab ? 'text-primary' : 'text-gray-300 hover:text-primary'
                  }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div layoutId="tab-underline" className="absolute bottom-0 left-0 w-full h-1 bg-accent rounded-full" />
                )}
              </button>
            ))}
          </div>

          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === 'overview' && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <h2 className="text-4xl font-black text-primary mb-10 tracking-tight leading-tight">Authentic Bhutanese <br /> Journey Overview</h2>
                  <p className="text-gray-500 text-xl leading-relaxed mb-12 font-medium">
                    {destination.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {[
                      { icon: MapPin, label: "Altitude", val: "2,300m" },
                      { icon: Clock, label: "Ideal Stay", val: "4-5 Days" },
                      { icon: Calendar, label: "Peak Period", val: "Spring/Fall" },
                      { icon: Globe, label: "Language", val: "Dzongkha" },
                    ].map((item, idx) => (
                      <div key={idx} className="bg-white p-8 rounded-[2.5rem] shadow-sm flex flex-col items-center text-center border border-gray-50 hover:shadow-xl transition-shadow">
                        <item.icon className="w-6 h-6 text-accent mb-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{item.label}</span>
                        <span className="font-black text-primary">{item.val}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'itinerary' && (
                <motion.div
                  key="itinerary"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-12"
                >
                  {itinerary.map((item) => (
                    <div key={item.day} className="group flex space-x-10 p-10 bg-white rounded-[3rem] shadow-sm border border-gray-50 hover:shadow-xl transition-all">
                      <div className="flex flex-col items-center shrink-0">
                        <span className="text-accent font-black text-5xl italic leading-none">{item.day}</span>
                        <div className="w-px h-full bg-gray-100 my-4" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-black text-primary mb-4 flex items-center space-x-3">
                          <span>{item.title}</span>
                          <div className="w-2 h-2 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h4>
                        <p className="text-gray-500 text-lg leading-relaxed font-medium">{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Dynamic Sidebar (4 cols) */}
        <div className="lg:col-span-4">
          <div className="sticky top-32 space-y-10">
            {/* Booking Widget */}
            <div className="bg-primary rounded-[3rem] p-10 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-white/5 rounded-full" />

              <div className="relative z-10">
                <div className="flex items-end justify-between mb-10">
                  <div className="flex flex-col">
                    <span className="text-white/40 text-xs font-black uppercase tracking-widest mb-1">Standard Rate</span>
                    <span className="text-5xl font-black text-gold leading-none tracking-tighter">$899</span>
                  </div>
                  <div className="text-right">
                    <span className="block font-black text-sm">TOTAL PER PERS.</span>
                    <span className="text-white/40 text-xs italic">Inclusive of SDF Tax</span>
                  </div>
                </div>

                <div className="space-y-6 mb-12">
                  <div className="flex items-center space-x-4 text-white/70">
                    <Users className="w-5 h-5 text-accent" />
                    <span className="font-bold">2 Adult Travelers</span>
                  </div>
                  <div className="flex items-center space-x-4 text-white/70">
                    <Shield className="w-5 h-5 text-accent" />
                    <span className="font-bold">Premium Medical Insurance</span>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/booking')}
                  className="w-full btn-accent py-6 text-xl shadow-accent/40"
                >
                  <span>Secure Trip</span>
                  <ArrowRight className="w-6 h-6 " />
                </button>

                <p className="mt-8 text-center text-xs font-bold text-white/30 uppercase tracking-[0.2em]">
                  Instant Confirmation Required
                </p>
              </div>
            </div>

            {/* Assistance Card */}
            <div className="bg-white rounded-[3rem] p-10 shadow-premium border border-gray-50 flex items-center space-x-6">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                <MessageSquare className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-black text-primary leading-none mb-2">Need Guidance?</h4>
                <p className="text-gray-400 text-sm font-medium">Talk to our local concierge in Thimphu.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { AnimatePresence } from "framer-motion"
export default DestinationDetail