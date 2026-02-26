import React from "react"
import { Link } from "react-router-dom"

type Props = {
  id: number
  name: string
  image: string
}

const DestinationCard: React.FC<Props> = ({ id, name, image }) => (
  <Link to={`/destinations/${id}`}>
    <div className="rounded-lg overflow-hidden shadow-lg bg-white w-full max-w-sm cursor-pointer hover:scale-105 transition-transform duration-300">
      <div className="h-64 w-full">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
    </div>
  </Link>
)

export default DestinationCard