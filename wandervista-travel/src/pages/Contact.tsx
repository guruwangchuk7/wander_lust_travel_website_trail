import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Send, Instagram, Twitter, Facebook, Globe } from "lucide-react"

const Contact = () => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Visual Header */}
      <section className="py-24 px-6 relative overflow-hidden flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none select-none overflow-hidden whitespace-nowrap">
          <span className="text-[300px] font-black uppercase text-primary leading-none block">TALK TALK TALK TALK</span>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative z-10"
        >
          <h1 className="text-6xl md:text-9xl font-black text-primary tracking-tighter leading-none mb-6">Contact <span className="text-accent italic">Thimphu.</span></h1>
          <p className="text-gray-400 font-bold text-xl max-w-2xl mx-auto italic">Our local experts in the capital are ready to architect your dream journey.</p>
        </motion.div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-12">
            <div className="flex items-start space-x-8">
              <div className="w-16 h-16 bg-primary rounded-[2rem] flex items-center justify-center text-white shrink-0 shadow-xl shadow-primary/20">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-black text-2xl text-primary mb-2">The Base</h4>
                <p className="text-gray-500 font-bold text-lg leading-relaxed">
                  Changlam Square, 2nd Floor <br />
                  Thimphu, Kingdom of Bhutan
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-8">
              <div className="w-16 h-16 bg-accent rounded-[2rem] flex items-center justify-center text-white shrink-0 shadow-xl shadow-accent/20">
                <Phone className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-black text-2xl text-primary mb-2">Digital Call</h4>
                <p className="text-gray-500 font-bold text-lg leading-relaxed">
                  +975 2 334567 <br />
                  +975 17 609800 (WhatsApp)
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-8">
              <div className="w-16 h-16 bg-gold rounded-[2rem] flex items-center justify-center text-primary shrink-0 shadow-xl shadow-gold/20">
                <Mail className="w-8 h-8" />
              </div>
              <div>
                <h4 className="font-black text-2xl text-primary mb-2">Electronic Mail</h4>
                <p className="text-gray-500 font-bold text-lg leading-relaxed">
                  explore@wandervista.bt <br />
                  concierge@wandervista.bt
                </p>
              </div>
            </div>

            <div className="pt-10 border-t border-gray-100 flex space-x-6">
              {[Instagram, Twitter, Facebook, Globe].map((Icon, idx) => (
                <button key={idx} className="w-14 h-14 rounded-2xl bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </button>
              ))}
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAFAFA] rounded-[4rem] p-12 md:p-20 shadow-premium border border-gray-50 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />
              <h3 className="text-4xl font-black text-primary mb-12 tracking-tight">Initiate <span className="text-accent underline decoration-gold/30">Inquiry.</span></h3>

              <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); alert('Message sent to Thimphu.') }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input type="text" placeholder="Identity Name" className="w-full bg-white border-none rounded-2xl px-8 py-6 outline-none focus:ring-4 focus:ring-accent/10 transition-all font-bold" required />
                  <input type="email" placeholder="Digital Address" className="w-full bg-white border-none rounded-2xl px-8 py-6 outline-none focus:ring-4 focus:ring-accent/10 transition-all font-bold" required />
                </div>
                <select className="w-full bg-white border-none rounded-2xl px-8 py-6 outline-none focus:ring-4 focus:ring-accent/10 transition-all font-bold appearance-none">
                  <option>General Enlightenment</option>
                  <option>Luxury Booking Request</option>
                  <option>Partnership Protocol</option>
                  <option>Cultural Sponsorship</option>
                </select>
                <textarea placeholder="Your Intentions..." rows={6} className="w-full bg-white border-none rounded-2xl px-8 py-6 outline-none focus:ring-4 focus:ring-accent/10 transition-all font-bold resize-none" required></textarea>

                <button className="btn-primary w-full py-6 text-xl shadow-primary/20">
                  <span>Send Transmission</span>
                  <Send className="w-6 h-6 ml-3" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full bg-gray-100 grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden relative group">
        <img src="/thimphu.jpg" className="w-full h-full object-cover" alt="Thimphu Map" />
        <div className="absolute inset-0 bg-primary/20 pointer-events-none group-hover:bg-transparent transition-colors" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-4 rounded-2xl shadow-2xl flex items-center space-x-4 border-2 border-accent">
          <div className="w-4 h-4 rounded-full bg-accent animate-ping" />
          <span className="font-black text-primary uppercase tracking-[0.2em] text-xs">Architectural Base In Thimphu</span>
        </div>
      </section>
    </div>
  )
}

export default Contact