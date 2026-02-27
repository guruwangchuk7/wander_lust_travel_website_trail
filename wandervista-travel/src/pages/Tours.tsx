import { motion } from "framer-motion"
import { Compass, Zap, Shield, Heart, ArrowRight, CloudRain, Sun, Snowflake } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Tours = () => {
  const navigate = useNavigate()

  return (
    <div className="pt-24 bg-[#FAFAFA] min-h-screen">
      {/* Luxury Intro */}
      <section className="py-24 px-6 md:py-40 relative flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[150px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center"
        >
          <div className="w-16 h-1 bg-accent mb-10 rounded-full" />
          <h1 className="text-6xl md:text-9xl font-black text-primary leading-[0.8] tracking-tighter mb-10">
            Signature <br /> <span className="text-accent italic underline decoration-gold/50 decoration-4 underline-offset-8">Expeditions.</span>
          </h1>
          <p className="max-w-xl text-gray-400 font-bold text-xl italic mb-16 leading-relaxed">
            Limited-entry tours designed around festivals, royal traditions, and seasonal peaks.
          </p>
        </motion.div>

        {/* Filter Chips Placeholder */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {['Cultural Festivals', 'Laya Gasa Trek', 'Royal Highland', 'Spirit of Bhutan'].map(tour => (
            <button key={tour} className="px-8 py-3 rounded-2xl bg-white border border-gray-100 shadow-sm font-black text-xs uppercase tracking-widest text-primary hover:bg-primary hover:text-white transition-all">
              {tour}
            </button>
          ))}
        </div>
      </section>

      {/* Seasonal Tours Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {[
            { title: "The Paro Tshechu Edition", period: "Spring (March-May)", icon: Sun, color: "bg-emerald-50", text: "text-emerald-700", img: "/paro-taksang.jpg", price: "$3,499" },
            { title: "Snow Lion High Trek", period: "Summer (June-Aug)", icon: CloudRain, color: "bg-blue-50", text: "text-blue-700", img: "/monk.jpg", price: "$2,899" },
            { title: "Punakha Riverside Gala", period: "Fall (Sept-Nov)", icon: Heart, color: "bg-rose-50", text: "text-rose-700", img: "/punakha-dzong.jpg", price: "$4,199" },
            { title: "Black-Necked Crane Haven", period: "Winter (Dec-Feb)", icon: Snowflake, color: "bg-indigo-50", text: "text-indigo-700", img: "/dochula-pass.jpg", price: "$2,299" },
          ].map((tour, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[4rem] overflow-hidden shadow-premium group border border-gray-50 p-8 flex flex-col md:flex-row gap-8 items-center"
            >
              <div className="w-full md:w-64 h-64 rounded-[3rem] overflow-hidden shrink-0 shadow-xl">
                <img src={tour.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="" />
              </div>
              <div className="flex-1">
                <div className={`inline-flex items-center space-x-2 ${tour.color} ${tour.text} px-4 py-1.5 rounded-xl mb-6`}>
                  <tour.icon className="w-4 h-4" />
                  <span className="text-[10px] font-black uppercase tracking-widest font-heading">{tour.period}</span>
                </div>
                <h3 className="text-3xl font-black text-primary leading-tight mb-4 tracking-tighter">{tour.title}</h3>
                <p className="text-gray-400 font-medium mb-8 leading-relaxed">Experience Bhutan in its peak glory with exclusive access to local festivals.</p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest leading-none">All-Inclusive</span>
                    <span className="text-2xl font-black text-primary">{tour.price}</span>
                  </div>
                  <button
                    onClick={() => navigate('/booking')}
                    className="w-14 h-14 bg-primary text-white rounded-[1.5rem] flex items-center justify-center group-hover:bg-accent transition-colors shadow-lg"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Inclusion Section */}
      <section className="py-32 bg-primary px-6 rounded-t-[5rem]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-8xl text-white font-black tracking-tighter leading-tight mb-8">What’s <span className="text-gold italic">Enveloped.</span></h2>
            <p className="text-white/40 font-bold max-w-xl mx-auto italic text-xl">Every expedition we curate includes the following premium protocols.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: Shield, title: "Visa & Entry", desc: "Full handling of Bhutanese visa permits and SDF government taxes." },
              { icon: Compass, title: "Expert Guides", desc: "A personal heritage architect assigned to your journey from start to finish." },
              { icon: Zap, title: "Local Flights", desc: "Domestic transfers within the kingdom, ensuring zero logistical stress." },
            ].map((inc, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-3xl p-12 rounded-[3.5rem] border border-white/10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-accent rounded-[2rem] flex items-center justify-center text-white mb-10 shadow-2xl">
                  <inc.icon className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-black text-white mb-6 uppercase tracking-tight">{inc.title}</h4>
                <p className="text-white/60 font-medium leading-relaxed">{inc.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tours