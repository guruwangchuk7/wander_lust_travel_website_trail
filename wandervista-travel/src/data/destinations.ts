export type Destination = {
  id: number
  name: string
  image: string
  description: string
  attractions: string[]
}

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Punkha Dzong",
    image: "/punakha-dzong.jpg",
    description:
      "Punkha Dzong is one of Bhutan's most majestic fortresses and the winter capital of the Drukpa Lineage. It offers stunning architecture, riverside views, and a rich historical experience.",
    attractions: [
      "Punakha Suspension Bridge",
      "Chimi Lhakhang (Fertility Temple)",
      "Dzong’s Courtyard"
    ]
  },
  {
    id: 2,
    name: "Paro Taktsang",
    image: "/paro-taktsang.jpg",
    description:
      "Also known as Tiger’s Nest Monastery, Paro Taktsang clings to a cliff 900 meters above the Paro Valley. It is Bhutan's most iconic pilgrimage site with breathtaking views.",
    attractions: [
      "Meditation caves",
      "Viewpoints of the valley",
      "Monastery murals and temples"
    ]
  },
  {
    id: 3,
    name: "Dochula Pass",
    image: "/dochula-pass.jpg",
    description:
      "Dochula Pass features 108 memorial chortens set against panoramic Himalayan mountains. It's an excellent spot for photography and scenic drives.",
    attractions: [
      "108 Druk Wangyal Chortens",
      "Coffee shops with mountain views",
      "Nearby hiking trails"
    ]
  }
]