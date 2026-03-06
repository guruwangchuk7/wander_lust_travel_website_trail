import React from "react"

type Props = {
  name: string
  description: string
  image: string
}

const AttractionCard: React.FC<Props> = ({ name, description, image }) => (
  <div className="rounded-lg overflow-hidden shadow-lg bg-white max-w-sm mx-auto hover:scale-105 transition-transform duration-300">
    <div className="h-64 w-full">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  </div>
)

export default AttractionCard