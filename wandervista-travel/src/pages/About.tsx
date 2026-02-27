import { motion } from "framer-motion"
import { Users, History, Award, Heart } from "lucide-react"

const About = () => {
  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img src="/monk.jpg" className="absolute inset-0 w-full h-full object-cover" alt="About Bhutan" />
        <div className="absolute inset-0 bg-primary/60 mix-blend-multiply" />
        <div className="relative z-10 text-center px-6">
          <h1 className="text-6xl md:text-9xl font-black text-white tracking-tighter leading-none mb-6">Our <span className="text-gold italic">Legacy.</span></h1>
          <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto">Founded in the heart of Thimphu, we are the bridge between the world and the Kingdom of Happiness.</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-accent font-black uppercase tracking-[0.3em] text-sm mb-6 block">Our Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-black text-primary tracking-tighter leading-none mb-10">Travel as a <br /> <span className="text-accent italic">Spiritual Act.</span></h2>
            <p className="text-gray-500 text-xl leading-relaxed font-medium mb-10">
              At WanderVista Bhutan, we believe travel shouldn't just change your location—it should change your perspective. We focus on "Deep Travel"—engaging with local communities, respecting sacred traditions, and ensuring every journey contributes to Bhutan's sustainable growth.
            </p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Founded", val: "2010" },
                { label: "Guides", val: "50+ Local" },
                { label: "Regions", val: "All 20 Dzongkhags" },
                { label: "Happiness", val: "100% GNH" },
              ].map(stat => (
                <div key={stat.label}>
                  <span className="block text-4xl font-black text-primary mb-1">{stat.val}</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-[4rem] overflow-hidden shadow-2xl relative z-10">
              <img src="/paro-taksang.jpg" className="w-full h-full object-cover" alt="Heritage" />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent rounded-[3rem] -z-10 flex items-center justify-center text-white">
              <History className="w-20 h-20 opacity-20" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto text-center mb-24">
          <h2 className="text-5xl font-black text-primary tracking-tighter mb-6">Built on <span className="text-accent">Integrity</span></h2>
          <p className="text-gray-400 font-bold max-w-xl mx-auto italic">Four pillars that define every WanderVista experience.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: Users, title: "Community First", desc: "We ensure tourism dollars reach the remote families we visit." },
            { icon: Award, title: "Unmatched Expertise", desc: "Our guides are certified historians and cultural experts." },
            { icon: Heart, title: "Deep Vetting", desc: "Every hotel and lodge is personally tested for soul and quality." },
            { icon: ShieldCheck, title: "Ethical Impact", desc: "We are carbon-negative and plastic-free on all our treks." },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="bg-white p-12 rounded-[3.5rem] shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8">
                <value.icon className="w-8 h-8" />
              </div>
              <h4 className="font-black text-2xl mb-4 text-primary tracking-tight">{value.title}</h4>
              <p className="text-gray-400 font-medium leading-relaxed">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

import { ShieldCheck } from "lucide-react"
export default About