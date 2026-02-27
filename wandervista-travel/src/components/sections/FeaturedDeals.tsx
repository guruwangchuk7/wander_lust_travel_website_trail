import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { Tag } from "lucide-react"

const deals = [
    {
        id: 1,
        title: "Summer Retreat in Punakha",
        discount: "EXCLUSIVE",
        originalPrice: "$1,499",
        dealPrice: "$1,124",
        image: "/punakha-dzong.jpg",
        tags: ["ULTIMATE LUXURY"]
    },
    {
        id: 2,
        title: "Spiritual Path in Paro",
        discount: "LIMITED",
        originalPrice: "$2,299",
        dealPrice: "$1,999",
        image: "/paro-taksang.jpg",
        tags: ["BUDDHIST HERITAGE"]
    }
]

const FeaturedDeals = () => {
    const navigate = useNavigate()

    return (
        <section className="section-padding px-6 max-w-7xl mx-auto">
            <div className="text-center mb-20 max-w-2xl mx-auto">
                <span className="text-accent font-bold tracking-[0.3em] uppercase text-xs mb-4 block underline decoration-accent/20 underline-offset-8">Opportunities</span>
                <h2 className="text-5xl md:text-6xl font-heading tracking-tight leading-tight">
                    Seasonal <span className="italic font-normal">Exclusivity</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {deals.map((deal) => (
                    <motion.div
                        key={deal.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer shadow-minimal hover:shadow-premium transition-all duration-700"
                        onClick={() => navigate(`/destinations/${deal.id}`)}
                    >
                        <img
                            src={deal.image}
                            alt={deal.title}
                            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent p-10 flex flex-col justify-end">
                            <div className="flex space-x-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-500">
                                {deal.tags.map(tag => (
                                    <span key={tag} className="text-[9px] font-bold tracking-widest px-3 py-1.5 rounded-md bg-white/10 text-white backdrop-blur-md border border-white/10 uppercase">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-4xl text-white font-heading font-bold mb-8 max-w-md leading-tight tracking-tight">
                                {deal.title}
                            </h3>

                            <div className="flex items-center justify-between pt-8 border-t border-white/10">
                                <div className="flex items-center space-x-6">
                                    <div className="flex flex-col">
                                        <span className="text-white/40 text-[10px] line-through font-bold">{deal.originalPrice}</span>
                                        <span className="text-white text-3xl font-bold leading-none">{deal.dealPrice}</span>
                                    </div>
                                    <div className="bg-accent text-white px-3 py-1.5 rounded-md font-bold text-[9px] uppercase tracking-widest shadow-xl">
                                        {deal.discount}
                                    </div>
                                </div>
                                <Tag className="text-white/20 w-8 h-8 group-hover:text-gold transition-colors duration-500" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}

export default FeaturedDeals
