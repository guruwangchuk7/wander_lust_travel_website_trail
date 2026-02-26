import React from "react"
import Hero from "../components/hero/Hero"
import DestinationCard from "../components/destinations/DestinationCard"
import { destinations } from "../data/destinations"

const Home = () => (
  <div className="bg-gray-50">
    <Hero />
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">
        Top Destinations in Bhutan
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {destinations.map((dest) => (
          <DestinationCard
            key={dest.id}
            id={dest.id}
            name={dest.name}
            image={dest.image}
          />
        ))}
      </div>
    </section>
  </div>
)
import { attractions } from "../data/attractions"
import AttractionCard from "../components/attractions/AttractionCard"

<section className="py-16 px-6 max-w-7xl mx-auto">
  <h2 className="text-4xl font-bold mb-8 text-center">
    Popular Attractions
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {attractions.map(a => (
      <AttractionCard
        key={a.id}
        name={a.name}
        description={a.description}
        image={a.image}
      />
    ))}
  </div>
</section>
import { tours } from "../data/tours"
import TourCard from "../components/tours/TourCard"

<section className="py-16 px-6 max-w-7xl mx-auto">
  <h2 className="text-4xl font-bold mb-8 text-center">
    Our Tours & Packages
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {tours.map(t => (
      <TourCard
        key={t.id}
        title={t.title}
        duration={t.duration}
        price={t.price}
        image={t.image}
      />
    ))}
  </div>
</section>
import BookingForm from "../components/forms/BookingForm"

<BookingForm />
export default Home