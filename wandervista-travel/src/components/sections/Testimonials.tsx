import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
    {
        id: 1,
        name: "Dr. Tashi Wangdi",
        role: "Cultural Historian",
        content: "The level of authenticity WanderVista brings to their itineraries is unparalleled. They don't just show you the Dzongs; they introduce you to the spirit and the building blocks of Bhutan.",
        avatar: "https://i.pravatar.cc/200?u=bhutan1"
    },
    {
        id: 2,
        name: "Jameson Brooks",
        role: "Visual Artist",
        content: "Lighting is everything. My guide was so well-trained that he knew the exact minute the sun would hit the Tiger's Nest waterfall for that perfect frame. Truly exceptional local knowledge.",
        avatar: "https://i.pravatar.cc/200?u=photog"
    },
    {
        id: 3,
        name: "Anya Petrova",
        role: "Solo Traveler",
        content: "Safety and soul. These are the two things I found. As a solo female traveler, I felt completely protected and spiritually recharged. The homestays were the highlight of my life.",
        avatar: "https://i.pravatar.cc/200?u=anya"
    }
]

const Testimonials = () => {
    return (
        <section className="section-padding px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-8 block">Voice of the valley</span>
                    <h2 className="text-5xl md:text-7xl font-heading tracking-tighter leading-none">
                        The World’s <span className="italic font-normal">Seekers.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {testimonials.map((t, idx) => (
                        <motion.div
                            key={t.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex flex-col h-full bg-[#FAFAFA] p-12 rounded-3xl group"
                        >
                            <Quote className="w-10 h-10 text-primary/10 mb-10 group-hover:text-gold transition-colors duration-500" />

                            <p className="text-gray-600 text-lg font-medium italic leading-relaxed mb-12 flex-1">
                                "{t.content}"
                            </p>

                            <div className="mt-auto flex items-center space-x-4 pt-8 border-t border-gray-100">
                                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                                <div className="flex flex-col">
                                    <h4 className="font-bold text-primary leading-none text-sm mb-1 uppercase tracking-tight">{t.name}</h4>
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300">{t.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
