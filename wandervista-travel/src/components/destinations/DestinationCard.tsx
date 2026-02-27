import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { MapPin, Star, ArrowUpRight } from "lucide-react"

type Props = {
  id: number
  name: string
  image: string
  location?: string
  price?: string
  rating?: number
}

const DestinationCard = ({ id, name, image, location = "Bhutan", price = "$899", rating = 4.9 }: Props) => {
  const navigate = useNavigate()

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group cursor-pointer"
      onClick={() => navigate(`/destinations/${id}`)}
    >
      <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-minimal transition-all duration-500 group-hover:shadow-premium bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 z-10" />

        {/* Top Badges */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-start z-20">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full flex items-center space-x-1">
            <Star className="w-3 h-3 text-gold fill-gold" />
            <span className="font-bold text-[10px]">{rating}</span>
          </div>
          <div className="bg-white text-primary px-3 py-1 rounded-full font-bold text-[10px]">
            From {price}
          </div>
        </div>

        {/* Minimalist Info */}
        <div className="absolute bottom-0 left-0 w-full p-8 z-20">
          <div className="flex items-center space-x-2 text-white/60 mb-2">
            <MapPin className="w-3 h-3" />
            <span className="font-bold uppercase tracking-widest text-[9px]">{location}</span>
          </div>

          <div className="flex items-end justify-between gap-4">
            <h3 className="text-2xl text-white font-heading font-bold transition-colors duration-300">
              {name}
            </h3>
            <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default DestinationCard