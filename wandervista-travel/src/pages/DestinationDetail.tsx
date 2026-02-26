import React from "react"
import { useParams, Link } from "react-router-dom"
import { destinations } from "../data/destinations"

const DestinationDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const destination = destinations.find(d => d.id === Number(id))

  if (!destination) return <div className="p-10 text-center text-2xl">Destination not found.</div>

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">{destination.name}</h1>
      <img src={destination.image} alt={destination.name} className="w-full h-96 object-cover rounded-lg mb-6" />
      <p className="text-lg text-gray-700">{destination.description}</p>
      <div className="text-center mt-8">
        <Link className="px-6 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition" to="/">Back to Home</Link>
      </div>
    </div>
  )
}

export default DestinationDetail