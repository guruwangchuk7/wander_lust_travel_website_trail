import React from "react"

const Hero: React.FC = () => (
  <section className="relative h-[80vh] w-full">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
      autoPlay
      muted
      loop
      src="/hero.mp4"
    />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-white text-5xl md:text-6xl font-bold drop-shadow-lg">
        Explore Bhutan with WanderVista
      </h1>
      <p className="text-white text-lg md:text-2xl mt-4 max-w-2xl drop-shadow-md">
        Discover iconic destinations like Punkha Dzong, Paro Taktsang, and Dochula Pass
      </p>
      <button className="mt-8 px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition duration-300">
        Book Your Adventure
      </button>
    </div>
  </section>
)

export default Hero