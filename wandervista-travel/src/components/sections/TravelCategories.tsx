import { motion } from "framer-motion"
import { Sparkles, Mountain, Tent, Camera, Gem, Wind } from "lucide-react"

const categories = [
    { name: 'Adventure', icon: Mountain, count: 12 },
    { name: 'Cultural', icon: Sparkles, count: 8 },
    { name: 'Luxury', icon: Gem, count: 5 },
    { name: 'Trekking', icon: Tent, count: 15 },
    { name: 'Photography', icon: Camera, count: 6 },
    { name: 'Spiritual', icon: Wind, count: 10 },
]

const TravelCategories = () => {
    return (
        <section className="section-padding bg-white overflow-hidden border-y border-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <h2 className="text-5xl md:text-6xl font-heading mb-8 tracking-tighter">
                        Journey by <span className="italic font-normal">Intent</span>
                    </h2>
                    <p className="text-gray-400 text-lg font-medium leading-relaxed max-w-xl mx-auto">
                        Choose your path based on what your soul seeks. Each category offers a unique perspective of Bhutan.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-gray-100 rounded-[2rem] overflow-hidden shadow-minimal">
                    {categories.map((cat, idx) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: idx * 0.05 }}
                            whileHover={{ backgroundColor: '#F9FAFB' }}
                            className={`p-10 flex flex-col items-center text-center cursor-pointer transition-all border-r border-b lg:border-b-0 border-gray-100 last:border-r-0`}
                        >
                            <div className="p-4 rounded-xl bg-primary/5 text-primary mb-6 transition-transform group-hover:scale-110">
                                <cat.icon className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-lg mb-2 text-primary tracking-tight">{cat.name}</h4>
                            <span className="text-[9px] font-bold uppercase tracking-widest text-gray-300">
                                {cat.count} Options
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TravelCategories
